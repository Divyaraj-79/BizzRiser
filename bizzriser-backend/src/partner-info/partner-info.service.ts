import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartnerInfoService implements OnModuleInit {
    constructor(private prisma: PrismaService) { }

    async onModuleInit() {
        // Ensure at least one AboutSection exists
        const count = await this.prisma.aboutSection.count();
        if (count === 0) {
            await this.prisma.aboutSection.create({
                data: {
                    title: "Powered by Selten Infotech",
                    description: "BizzRiser is proudly developed and maintained by Selten Infotech, a premier software development agency known for building robust, scalable enterprise solutions."
                }
            });
        }
    }

    // Section Management
    async getSection() {
        return this.prisma.aboutSection.findFirst();
    }

    async updateSection(data: any) {
        const section = await this.prisma.aboutSection.findFirst();
        if (section) {
            return this.prisma.aboutSection.update({
                where: { id: section.id },
                data: {
                    title: data.title,
                    description: data.description,
                },
            });
        }
        return this.prisma.aboutSection.create({ data });
    }

    // Stats Management
    async getStats() {
        return this.prisma.aboutStat.findMany({
            orderBy: { order: 'asc' },
        });
    }

    async createStat(data: { label: string; value: string; order: number }) {
        return this.prisma.aboutStat.create({ data });
    }

    async updateStat(id: string, data: { label: string; value: string; order: number }) {
        return this.prisma.aboutStat.update({
            where: { id },
            data,
        });
    }

    async deleteStat(id: string) {
        return this.prisma.aboutStat.delete({
            where: { id },
        });
    }
}
