// Root entry file for Hostinger - SELF-HEALING VERSION
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log(`🚀 BizzRiser Boot Sequence Initiated...`);

// 1. Seed DATABASE_URL
if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = `file:${path.join(__dirname, 'dev.db')}`;
    console.log(`🔑 Seeded DATABASE_URL: ${process.env.DATABASE_URL}`);
}

// 2. Self-Healing: Check Prisma Engine
// If the engine for the current platform is missing, generate it.
try {
    const prismaDir = path.join(__dirname, 'node_modules', '.prisma', 'client');
    const enginesExist = fs.existsSync(prismaDir);
    
    if (!enginesExist) {
        console.log('⚠️ Prisma Client not found. Generating...');
        execSync('npx prisma generate', { stdio: 'inherit' });
    }
} catch (e) {
    console.warn('⚠️ Self-healing prisma generate failed (Expected on some read-only systems):', e.message);
}

// 3. Start App
const port = process.env.PORT || 3000;
console.log(`📍 Port: ${port}`);

try {
    const paths = ['./dist/src/main', './dist/main'];
    let loaded = false;
    
    for (const p of paths) {
        try {
            require(p);
            console.log(`✅ Loaded entry point: ${p}`);
            loaded = true;
            break;
        } catch (e) {
            // Silently continue
        }
    }

    if (!loaded) {
        console.error('❌ Could not find entry point in dist/src/main.js or dist/main.js');
        process.exit(1);
    }
} catch (err) {
    console.error('💥 Fatal error during startup:', err);
    process.exit(1);
}
