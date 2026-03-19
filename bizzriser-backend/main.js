// Root entry file for Hostinger
const path = require('path');

// Seed DATABASE_URL if missing (Prisma requirement)
// Use absolute path to ensure it works correctly on Hostinger regardless of CWD
if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = `file:${path.join(__dirname, 'dev.db')}`;
}

const port = process.env.PORT || 3000;
console.log(`🚀 Starting BizzRiser Backend...`);
console.log(`📍 Port: ${port}`);
console.log(`🔑 Database: ${process.env.DATABASE_URL}`);

try {
    // Try different possible build locations
    const paths = ['./dist/src/main', './dist/main'];
    let loaded = false;
    
    for (const p of paths) {
        try {
            require(p);
            console.log(`✅ Loaded entry point: ${p}`);
            loaded = true;
            break;
        } catch (e) {
            // Silently continue to next path
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
