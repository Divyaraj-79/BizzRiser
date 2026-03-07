import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const databaseUrl = process.env.DATABASE_URL || '';
        const isSqlite = databaseUrl.startsWith('file:') || databaseUrl.includes('.db');

        if (isSqlite) {
            // Lazy load SQLite adapter to avoid issues in environments without better-sqlite3
            /* eslint-disable @typescript-eslint/no-var-requires */
            const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
            const url = databaseUrl.replace('file:', '') || './dev.db';
            const adapter = new PrismaBetterSqlite3({ url });
            super({ adapter, log: ['info'] });
        } else {
            // Standard PostgreSQL/MySQL/etc. configuration
            super(databaseUrl ? { datasourceUrl: databaseUrl } as any : {});
        }
    }

    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
