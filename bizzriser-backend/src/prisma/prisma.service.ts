import 'dotenv/config';
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        const url = process.env.DATABASE_URL?.replace('file:', '') || './dev.db';
        const adapter = new PrismaBetterSqlite3({
            url,
        });

        super({
            adapter,
            log: ['info'],
        });
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
