const fs = require('fs');
const path = require('path');

const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;
const schemaPath = path.join(__dirname, 'schema.prisma');

if (!fs.existsSync(schemaPath)) {
    console.error('❌ schema.prisma not found at:', schemaPath);
    process.exit(1);
}

let schema = fs.readFileSync(schemaPath, 'utf8');

if (isRender) {
    console.log('🚀 Render environment detected. Setting Prisma provider to postgresql...');
    schema = schema.replace(/provider\s*=\s*"sqlite"/, 'provider = "postgresql"');
} else {
    console.log('💻 Local environment detected. Ensuring Prisma provider is sqlite...');
    schema = schema.replace(/provider\s*=\s*"postgresql"/, 'provider = "sqlite"');
}

fs.writeFileSync(schemaPath, schema);
console.log('✅ schema.prisma updated successfully.');
