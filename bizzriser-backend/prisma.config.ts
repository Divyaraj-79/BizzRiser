const isRender = process.env.RENDER === 'true' || !!process.env.RENDER;

if (!isRender) {
  try {
    require("dotenv").config();
  } catch (e) {
    console.warn("Dotenv load failed, skipping...");
  }
}

import { defineConfig } from "prisma/config";

// Use PRISMA_URL as the primary source to avoid pollution from rogue DATABASE_URL settings
const databaseUrl = process.env["PRISMA_URL"] || process.env["DATABASE_URL"];

console.log(`[Prisma Config] RENDER=${isRender}, USING_PRISMA_URL=${!!process.env["PRISMA_URL"]}, PROTOCOL=${databaseUrl?.split(':')[0]}`);

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "ts-node prisma/seed.ts",
  },
  datasource: {
    url: databaseUrl,
  },
});
