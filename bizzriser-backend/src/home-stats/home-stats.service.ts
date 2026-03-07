import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class HomeStatsService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.HomeStatCreateInput) {
        return this.prisma.homeStat.create({ data });
    }

    async findAll() {
        return this.prisma.homeStat.findMany({
            orderBy: { order: 'asc' },
        });
    }

    async findOne(id: string) {
        const stat = await this.prisma.homeStat.findUnique({ where: { id } });
        if (!stat) throw new NotFoundException(`HomeStat with ID ${id} not found`);
        return stat;
    }

    async update(id: string, data: Prisma.HomeStatUpdateInput) {
        await this.findOne(id);
        return this.prisma.homeStat.update({ where: { id }, data });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.homeStat.delete({ where: { id } });
    }
}
