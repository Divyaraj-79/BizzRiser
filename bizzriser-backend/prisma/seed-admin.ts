import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import * as bcrypt from 'bcrypt';

const url = (process.env.DATABASE_URL ?? 'file:./dev.db').replace('file:', '');
const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter } as any);

async function main() {
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
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
