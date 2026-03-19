import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    async onModuleInit() {
        try {
            await this.$connect();
            console.log('✅ Database connected successfully');
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
            // On some hosting, we want to log the full error to help debugging
            if (process.env.NODE_ENV === 'production') {
                const fs = require('fs');
                const path = require('path');
                const logDir = path.join(process.cwd(), 'logs');
                if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);
                fs.appendFileSync(path.join(logDir, 'error.log'), `${new Date().toISOString()} - DB Connect Error: ${error.stack}\n`);
            }
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
