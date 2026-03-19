// Root entry file for Hostinger
// Seed DATABASE_URL if missing (Prisma 7 requirement)
if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = 'file:./dev.db';
}

try {
    require('./dist/src/main');
} catch (e) {
    try {
        require('./dist/main');
    } catch (err) {
        console.error('Could not find entry point in dist/src/main.js or dist/main.js');
        process.exit(1);
    }
}
