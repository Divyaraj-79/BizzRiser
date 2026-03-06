import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class SolutionIndustriesService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.SolutionIndustryCreateInput) {
        return this.prisma.solutionIndustry.create({ data });
    }

    async findAll() {
        return this.prisma.solutionIndustry.findMany({
            orderBy: { order: 'asc' },
        });
    }

    async findOne(id: string) {
        const industry = await this.prisma.solutionIndustry.findUnique({ where: { id } });
        if (!industry) throw new NotFoundException(`SolutionIndustry with ID ${id} not found`);
        return industry;
    }

    async update(id: string, data: Prisma.SolutionIndustryUpdateInput) {
        await this.findOne(id);
        return this.prisma.solutionIndustry.update({ where: { id }, data });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.solutionIndustry.delete({ where: { id } });
    }
}
