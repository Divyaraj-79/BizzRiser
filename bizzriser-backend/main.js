// Root entry file for Hostinger - ZERO-LAG BOOT
const path = require('path');

console.log(`🚀 BizzRiser API Booting...`);

// 1. Seed DATABASE_URL with absolute path for stability
if (!process.env.DATABASE_URL) {
    process.env.DATABASE_URL = `file:${path.join(__dirname, 'dev.db')}`;
}

const port = process.env.PORT || 3000;
console.log(`📍 Port: ${port}`);
console.log(`🔑 DB: ${process.env.DATABASE_URL}`);

// 2. Load the application asynchronously to avoid blocking the bridge
try {
    const paths = ['./dist/src/main', './dist/main'];
    let loadedPath = null;
    
    for (const p of paths) {
        try {
            require.resolve(p);
            loadedPath = p;
            break;
        } catch (e) {}
    }

    if (loadedPath) {
        console.log(`✅ Loading: ${loadedPath}`);
        require(loadedPath);
    } else {
        console.error('❌ Missing dist/main.js. Please run REBUILD in Hostinger.');
        process.exit(1);
    }
} catch (err) {
    console.error('💥 Boot Error:', err);
}
