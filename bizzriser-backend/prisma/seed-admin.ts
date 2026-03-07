import 'dotenv/config';
import 'dotenv/config';
import { PrismaClient } from '../src/generated/prisma';
import * as bcrypt from 'bcrypt';

async function getPrisma() {
    const databaseUrl = process.env.DATABASE_URL || '';
    const isSqlite = databaseUrl.startsWith('file:') || databaseUrl.includes('.db');

    if (isSqlite) {
        /* eslint-disable @typescript-eslint/no-var-requires */
        const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3');
        const url = databaseUrl.replace('file:', '') || './dev.db';
        const adapter = new PrismaBetterSqlite3({ url });
        return new PrismaClient({ adapter } as any);
    }

    return new PrismaClient();
}

async function main() {
    const prisma = await getPrisma();
    try {
        console.log('🌱 Seeding admin credentials...');

        const adminEmail = 'admin@bizzriser.com';
        const existingAdmin = await prisma.adminUser.findUnique({ where: { email: adminEmail } });

        if (!existingAdmin) {
            const hashedPassword = await bcrypt.hash('admin123', 10);
            await prisma.adminUser.create({
                data: {
                    email: adminEmail,
                    password: hashedPassword,
                    name: 'Super Admin',
                    role: 'ADMIN'
                }
            });
            console.log('✅ Admin user created: admin@bizzriser.com / admin123');
        } else {
            console.log('ℹ️  Admin user already exists');
        }

        console.log('🎉 Admin seeding complete!');
    } finally {
        await prisma.$disconnect();
    }
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    });
