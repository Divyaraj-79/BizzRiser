import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCaseStudyDto } from './dto/create-case-study.dto';
import { UpdateCaseStudyDto } from './dto/update-case-study.dto';

@Injectable()
export class CaseStudiesService {
  constructor(private prisma: PrismaService) { }

  async create(createCaseStudyDto: CreateCaseStudyDto) {
    return this.prisma.caseStudy.create({
      data: createCaseStudyDto,
    });
  }

  async findAll(publishedOnly: boolean = false) {
    const where = publishedOnly ? { published: true } : {};
    return this.prisma.caseStudy.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const caseStudy = await this.prisma.caseStudy.findUnique({
      where: { id },
    });
    if (!caseStudy) {
      throw new NotFoundException(`Case study with ID ${id} not found`);
    }
    return caseStudy;
  }

  async update(id: string, updateCaseStudyDto: UpdateCaseStudyDto) {
    await this.findOne(id); // Ensure it exists
    return this.prisma.caseStudy.update({
      where: { id },
      data: updateCaseStudyDto,
    });
  }

  async remove(id: string) {
    await this.findOne(id); // Ensure it exists
    return this.prisma.caseStudy.delete({
      where: { id },
    });
  }
}
