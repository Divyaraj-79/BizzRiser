import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { CaseStudiesService } from './case-studies.service';
import { CreateCaseStudyDto } from './dto/create-case-study.dto';
import { UpdateCaseStudyDto } from './dto/update-case-study.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('case-studies')
export class CaseStudiesController {
  constructor(private readonly caseStudiesService: CaseStudiesService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCaseStudyDto: CreateCaseStudyDto) {
    return this.caseStudiesService.create(createCaseStudyDto);
  }

  // Public endpoint - optional query param for admin to see all
  @Get()
  findAll(@Query('all') all?: boolean) {
    const publishedOnly = all ? false : true;
    return this.caseStudiesService.findAll(publishedOnly);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caseStudiesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaseStudyDto: UpdateCaseStudyDto) {
    return this.caseStudiesService.update(id, updateCaseStudyDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caseStudiesService.remove(id);
  }
}
