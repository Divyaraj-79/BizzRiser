import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma';

function parseFlowSteps(chatbot: any) {
    if (!chatbot) return chatbot;
    return {
        ...chatbot,
        flowSteps: typeof chatbot.flowSteps === 'string'
            ? JSON.parse(chatbot.flowSteps)
            : chatbot.flowSteps ?? [],
    };
}

@Injectable()
export class IndustryChatbotsService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.IndustryChatbotCreateInput) {
        const result = await this.prisma.industryChatbot.create({ data });
        return parseFlowSteps(result);
    }

    async findAll() {
        const results = await this.prisma.industryChatbot.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return results.map(parseFlowSteps);
    }

    async findOne(id: string) {
        const chatbot = await this.prisma.industryChatbot.findUnique({ where: { id } });
        if (!chatbot) throw new NotFoundException(`IndustryChatbot with ID ${id} not found`);
        return parseFlowSteps(chatbot);
    }

    async findByIndustry(industrySlug: string) {
        const chatbot = await this.prisma.industryChatbot.findUnique({ where: { industry: industrySlug } });
        return parseFlowSteps(chatbot);
    }

    async update(id: string, data: Prisma.IndustryChatbotUpdateInput) {
        await this.findOne(id);
        const result = await this.prisma.industryChatbot.update({ where: { id }, data });
        return parseFlowSteps(result);
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.industryChatbot.delete({ where: { id } });
    }
}
