import 'dotenv/config';
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        const databaseUrl = process.env.PRISMA_URL || process.env.DATABASE_URL || '';
        const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;
        const isSqlite = !isRender && (databaseUrl.startsWith('file:') || databaseUrl.includes('.db'));

        if (isSqlite) {
            console.log('📦 Initializing Prisma with SQLite adapter');
            // Lazy load SQLite adapter to avoid issues in environments without better-sqlite3
            /* eslint-disable @typescript-eslint/no-var-requires */
            const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
            const url = databaseUrl.replace('file:', '') || './dev.db';
            const adapter = new PrismaBetterSqlite3({ url });
            super({ adapter, log: ['info'] });
        } else {
            console.log('🏦 Initializing Prisma with PostgreSQL adapter');
            /* eslint-disable @typescript-eslint/no-var-requires */
            const { Pool } = require('pg');
            const { PrismaPg } = require('@prisma/adapter-pg');
            const pool = new Pool({ connectionString: databaseUrl });
            const adapter = new PrismaPg(pool);
            super({ adapter, log: ['info'] });
        }
    }

    async onModuleInit() {
        try {
            await this.$connect();
            console.log('✅ Database connected successfully');
        } catch (error) {
            console.error('❌ Database connection failed:', error.message);
            // We don't rethrow to allow the server to start even if DB is temporarily down,
            // which helps in getting the server to "bind" to the port on Render.
        }
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }
}
