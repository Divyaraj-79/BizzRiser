const fs = require('fs');
const path = require('path');

const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;
// Detect Hostinger by the presence of a specific directory or a custom env var we'll suggest
// Detect Hostinger by the presence of a specific directory or a custom env var
const isHostinger = process.env.HOSTINGER === 'true' || (process.env.HOME && process.env.HOME.includes('u881310799')) || !!process.env.MYSQL_DATABASE;
const schemaPath = path.join(__dirname, 'schema.prisma');

if (!fs.existsSync(schemaPath)) {
    console.error('❌ schema.prisma not found at:', schemaPath);
    process.exit(1);
}

let schema = fs.readFileSync(schemaPath, 'utf8');

if (isRender) {
    console.log('🚀 Render environment detected. Setting Prisma provider to postgresql...');
    schema = schema.replace(/provider\s*=\s*"sqlite"/, 'provider = "postgresql"');
    schema = schema.replace(/provider\s*=\s*"mysql"/, 'provider = "postgresql"');
} else if (isHostinger) {
    console.log('🌐 Hostinger environment detected. Setting Prisma provider to mysql...');
    schema = schema.replace(/provider\s*=\s*"sqlite"/, 'provider = "mysql"');
    schema = schema.replace(/provider\s*=\s*"postgresql"/, 'provider = "mysql"');
} else {
    console.log('💻 Local environment detected. Ensuring Prisma provider is sqlite...');
    schema = schema.replace(/provider\s*=\s*"postgresql"/, 'provider = "sqlite"');
    schema = schema.replace(/provider\s*=\s*"mysql"/, 'provider = "sqlite"');
}

fs.writeFileSync(schemaPath, schema);
console.log('✅ schema.prisma updated successfully.');
