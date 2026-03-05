import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import * as bcrypt from 'bcrypt';

const url = process.env.DATABASE_URL?.replace('file:', '') || './dev.db';
const adapter = new PrismaBetterSqlite3({
    url,
});

const prisma = new PrismaClient({
    adapter,
    log: ['info'],
});

async function main() {
    const adminEmail = 'admin@bizzriser.com';
    const existingAdmin = await prisma.adminUser.findUnique({
        where: { email: adminEmail }
    });

    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = await prisma.adminUser.create({
            data: {
                email: adminEmail,
                password: hashedPassword,
                name: 'Super Admin',
                role: 'ADMIN'
            }
        });
        console.log('Seeded admin user:', admin.email);
    } else {
        console.log('Admin user already exists:', existingAdmin.email);
    }
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
