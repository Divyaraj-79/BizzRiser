import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

function parseFeatures(plan: any) {
    if (!plan) return plan;
    return {
        ...plan,
        features: typeof plan.features === 'string'
            ? JSON.parse(plan.features)
            : plan.features ?? [],
    };
}

@Injectable()
export class PricingPlansService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.PricingPlanCreateInput) {
        const result = await this.prisma.pricingPlan.create({ data });
        return parseFeatures(result);
    }

    async findAll() {
        const results = await this.prisma.pricingPlan.findMany({
            orderBy: { createdAt: 'asc' },
        });
        return results.map(parseFeatures);
    }

    async findOne(id: string) {
        const plan = await this.prisma.pricingPlan.findUnique({ where: { id } });
        if (!plan) throw new NotFoundException(`PricingPlan with ID ${id} not found`);
        return parseFeatures(plan);
    }

    async update(id: string, data: Prisma.PricingPlanUpdateInput) {
        await this.findOne(id);
        const result = await this.prisma.pricingPlan.update({ where: { id }, data });
        return parseFeatures(result);
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.pricingPlan.delete({ where: { id } });
    }
}
