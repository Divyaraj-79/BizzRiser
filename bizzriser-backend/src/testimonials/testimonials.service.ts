import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma';

@Injectable()
export class TestimonialsService {
    constructor(private prisma: PrismaService) { }

    async create(data: Prisma.TestimonialCreateInput) {
        return this.prisma.testimonial.create({ data });
    }

    async findAll() {
        return this.prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' },
        });
    }

    async findPublished() {
        return this.prisma.testimonial.findMany({
            where: { published: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const testimonial = await this.prisma.testimonial.findUnique({ where: { id } });
        if (!testimonial) throw new NotFoundException(`Testimonial with ID ${id} not found`);
        return testimonial;
    }

    async update(id: string, data: Prisma.TestimonialUpdateInput) {
        await this.findOne(id);
        return this.prisma.testimonial.update({ where: { id }, data });
    }

    async remove(id: string) {
        await this.findOne(id);
        return this.prisma.testimonial.delete({ where: { id } });
    }
}
