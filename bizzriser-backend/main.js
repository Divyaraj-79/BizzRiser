// Root entry file for Hostinger - ULTIMATE STABLE BOOT
const path = require('path');
const fs = require('fs');

const logFile = path.join(__dirname, 'boot-error.log');
const log = (msg) => {
    const time = new Date().toISOString();
    const entry = `[${time}] ${msg}\n`;
    console.log(msg);
    fs.appendFileSync(logFile, entry);
};

log(`🚀 BizzRiser API Booting...`);

// 1. Seed DATABASE_URL
// try {
//     if (!process.env.DATABASE_URL || process.env.DATABASE_URL.startsWith('file:.')) {
//         const dbName = (process.env.DATABASE_URL || 'file:./dev.db').replace(/^file:\.\/?/, '');
//         process.env.DATABASE_URL = `file:${path.join(__dirname, dbName)}`;
//         log(`📂 Sanitized DB URL to absolute: ${process.env.DATABASE_URL}`);
//     } else {
//         log(`📂 Using provided DB URL: ${process.env.DATABASE_URL}`);
//     }
// } catch (e) {
//     log(`⚠️ DB URL Seed Failed: ${e.message}`);
// }

// 2. Load and Start
try {
    const entryPoint = path.join(__dirname, 'dist', 'main.js');
    if (fs.existsSync(entryPoint)) {
        log(`✅ Entry found: ${entryPoint}`);
        require(entryPoint);
    } else {
        log(`❌ CRITICAL: ${entryPoint} not found! Run REBUILD.`);
    }
} catch (err) {
    log(`💥 FATAL CRASH: ${err.stack || err.message}`);
    process.exit(1);
}
