const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;

if (!isRender) {
  require("dotenv").config();
}

import { defineConfig } from "prisma/config";

const databaseUrl = process.env["DATABASE_URL"];

console.log(`[Prisma Config] RENDER=${isRender}, DATABASE_URL schema=${databaseUrl?.split(':')[0]}...`);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: databaseUrl,
  },
});
