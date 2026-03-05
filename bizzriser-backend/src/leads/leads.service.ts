import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) { }

  create(createLeadDto: CreateLeadDto) {
    return this.prisma.lead.create({
      data: {
        ...createLeadDto,
        metadata: createLeadDto.metadata ? createLeadDto.metadata : undefined,
      },
    });
  }

  findAll() {
    return this.prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const lead = await this.prisma.lead.findUnique({ where: { id } });
    if (!lead) throw new NotFoundException(`Lead with ID ${id} not found`);
    return lead;
  }

  async update(id: string, updateLeadDto: UpdateLeadDto) {
    await this.findOne(id);
    return this.prisma.lead.update({
      where: { id },
      data: {
        ...updateLeadDto,
        metadata: updateLeadDto.metadata ? updateLeadDto.metadata : undefined,
      },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.lead.delete({ where: { id } });
  }
}
