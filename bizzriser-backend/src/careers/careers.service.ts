import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CareersService {
  constructor(private prisma: PrismaService) { }

  create(createCareerDto: CreateCareerDto) {
    return this.prisma.career.create({ data: createCareerDto });
  }

  findAll(activeOnly: boolean = false) {
    const where = activeOnly ? { active: true } : {};
    return this.prisma.career.findMany({ where, orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const career = await this.prisma.career.findUnique({ where: { id } });
    if (!career) throw new NotFoundException(`Career with ID ${id} not found`);
    return career;
  }

  async update(id: string, updateCareerDto: UpdateCareerDto) {
    await this.findOne(id);
    return this.prisma.career.update({ where: { id }, data: updateCareerDto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.career.delete({ where: { id } });
  }
}
