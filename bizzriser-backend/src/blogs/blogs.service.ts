import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from '../prisma/prisma.service';

function parseBlog(blog: any) {
  if (!blog) return blog;
  return {
    ...blog,
    tags: typeof blog.tags === 'string' ? JSON.parse(blog.tags) : (blog.tags ?? []),
  };
}

@Injectable()
export class BlogsService {
  constructor(private prisma: PrismaService) { }

  async create(createBlogDto: CreateBlogDto) {
    const data: any = { ...createBlogDto };
    if (Array.isArray(data.tags)) {
      data.tags = JSON.stringify(data.tags);
    }
    const result = await this.prisma.blog.create({ data });
    return parseBlog(result);
  }

  async findAll(publishedOnly: boolean = false) {
    const where = publishedOnly ? { published: true } : {};
    const results = await this.prisma.blog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    return results.map(parseBlog);
  }

  async findFeatured() {
    const results = await this.prisma.blog.findMany({
      where: { published: true, featured: true },
      orderBy: { createdAt: 'desc' },
      take: 3,
    });
    return results.map(parseBlog);
  }

  async findOne(slug: string) {
    const blog = await this.prisma.blog.findUnique({ where: { slug } });
    if (!blog) throw new NotFoundException(`Blog with slug '${slug}' not found`);
    return parseBlog(blog);
  }

  async findById(id: string) {
    const blog = await this.prisma.blog.findUnique({ where: { id } });
    if (!blog) throw new NotFoundException(`Blog with id '${id}' not found`);
    return parseBlog(blog);
  }

  async update(id: string, updateBlogDto: UpdateBlogDto) {
    const data: any = { ...updateBlogDto };
    if (Array.isArray(data.tags)) {
      data.tags = JSON.stringify(data.tags);
    }
    const result = await this.prisma.blog.update({ where: { id }, data });
    return parseBlog(result);
  }

  async remove(id: string) {
    return this.prisma.blog.delete({ where: { id } });
  }
}
