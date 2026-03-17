import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BrandsService {
    constructor(private prisma: PrismaService) { }

    async create(data: { name: string; imageUrl: string; order?: number }) {
        return this.prisma.brand.create({
            data: {
                name: data.name,
                imageUrl: data.imageUrl,
                order: data.order || 0,
            },
        });
    }

    async findAll() {
        return this.prisma.brand.findMany({
            orderBy: { order: 'asc' },
        });
    }

    async remove(id: string) {
        return this.prisma.brand.delete({
            where: { id },
        });
    }
}
