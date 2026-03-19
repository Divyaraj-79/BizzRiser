import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({});
    }

    async onModuleInit() {
        console.log('⏳ Prisma connection initiated in background...');
        // We do NOT await here so the app boots instantly on Hostinger
        this.$connect()
            .then(() => console.log('✅ Database connected successfully'))
            .catch((error: any) => console.error('❌ Database connection failed:', error.message));
    }

    async onModuleDestroy() {
        try {
            await this.$disconnect();
        } catch (error) {
        }
    }
}
