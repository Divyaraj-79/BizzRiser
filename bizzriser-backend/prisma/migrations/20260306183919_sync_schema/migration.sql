/*
  Warnings:

  - Added the required column `slug` to the `CaseStudy` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CaseStudy" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "company" TEXT NOT NULL,
    "industry" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "goal" TEXT NOT NULL,
    "metric" TEXT NOT NULL,
    "metricLabel" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "excerpt" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "logoUrl" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "metaTitle" TEXT,
    "metaDescription" TEXT,
    "metaKeywords" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_CaseStudy" ("company", "content", "createdAt", "excerpt", "goal", "id", "industry", "logoUrl", "metric", "metricLabel", "published", "title", "updatedAt") SELECT "company", "content", "createdAt", "excerpt", "goal", "id", "industry", "logoUrl", "metric", "metricLabel", "published", "title", "updatedAt" FROM "CaseStudy";
DROP TABLE "CaseStudy";
ALTER TABLE "new_CaseStudy" RENAME TO "CaseStudy";
CREATE UNIQUE INDEX "CaseStudy_slug_key" ON "CaseStudy"("slug");
CREATE TABLE "new_PricingPlan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "features" JSONB NOT NULL,
    "recommended" BOOLEAN NOT NULL DEFAULT false,
    "billingCycle" TEXT NOT NULL DEFAULT 'monthly',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_PricingPlan" ("createdAt", "description", "features", "id", "name", "price", "recommended", "updatedAt") SELECT "createdAt", "description", "features", "id", "name", "price", "recommended", "updatedAt" FROM "PricingPlan";
DROP TABLE "PricingPlan";
ALTER TABLE "new_PricingPlan" RENAME TO "PricingPlan";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
