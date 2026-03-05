import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) { }

  async create(createBlogDto: CreateBlogDto) {
    return this.prisma.blog.create({
      data: createBlogDto,
    });
  }

  async findAll(publishedOnly: boolean = false) {
    const where = publishedOnly ? { published: true } : {};
    return this.prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(slug: string) {
    const blog = await this.prisma.blog.findUnique({
      where: { slug },
    });
    if (!blog) {
      throw new NotFoundException(`Blog with slug ${slug} not found`);
    }
    return blog;
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  async remove(id: string) {
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}
