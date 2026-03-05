import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UploadService {
    private s3Client: S3Client;

    constructor() {
        this.s3Client = new S3Client({
            region: process.env.AWS_REGION || 'us-east-1',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
            },
            // for local testing w/o credentials, you might want to mock this or catch errors
        });
    }

    async uploadFile(file: Express.Multer.File, folder: string = 'general'): Promise<string> {
        const bucketName = process.env.AWS_S3_BUCKET_NAME;
        if (!bucketName) {
            console.warn('AWS_S3_BUCKET_NAME not set. Returning dummy URL for local dev.');
            return `https://dummyimage.com/600x400/ccc/000&text=${file.originalname}`;
        }

        const key = `${folder}/${uuidv4()}-${file.originalname}`;

        try {
            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: bucketName,
                    Key: key,
                    Body: file.buffer,
                    ContentType: file.mimetype,
                    ACL: 'public-read', // ensure bucket policy allows this if required
                }),
            );

            return `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
        } catch (error) {
            console.error('Error uploading to S3:', error);
            throw new InternalServerErrorException('Failed to upload file');
        }
    }
}
