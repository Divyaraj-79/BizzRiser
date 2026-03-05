import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateNewsletterDto } from './dto/create-newsletter.dto';
import { UpdateNewsletterDto } from './dto/update-newsletter.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NewslettersService {
  constructor(private prisma: PrismaService) { }

  async create(createNewsletterDto: CreateNewsletterDto) {
    const existing = await this.prisma.newsletterSubscriber.findUnique({
      where: { email: createNewsletterDto.email },
    });

    if (existing) {
      if (existing.status === 'UNSUBSCRIBED') {
        return this.prisma.newsletterSubscriber.update({
          where: { email: existing.email },
          data: { status: 'SUBSCRIBED' }
        });
      }
      throw new ConflictException('Email is already subscribed');
    }

    return this.prisma.newsletterSubscriber.create({
      data: createNewsletterDto,
    });
  }

  findAll() {
    return this.prisma.newsletterSubscriber.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const subscriber = await this.prisma.newsletterSubscriber.findUnique({ where: { id } });
    if (!subscriber) throw new NotFoundException(`Subscriber with ID ${id} not found`);
    return subscriber;
  }

  async update(id: string, updateNewsletterDto: UpdateNewsletterDto) {
    await this.findOne(id);
    return this.prisma.newsletterSubscriber.update({ where: { id }, data: updateNewsletterDto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.newsletterSubscriber.delete({ where: { id } });
  }
}
