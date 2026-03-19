import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super({});
    }

    async onModuleInit() {
        console.log('⏳ Prisma connecting...');
        try {
            await this.$connect();
            console.log('✅ Database connected successfully');
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
        }
    }

    async onModuleDestroy() {
        try {
            await this.$disconnect();
        } catch (error) {
        }
    }
}
