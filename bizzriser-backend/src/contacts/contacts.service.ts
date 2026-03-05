import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) { }

  create(createContactDto: CreateContactDto) {
    return this.prisma.contactMessage.create({ data: createContactDto });
  }

  findAll() {
    return this.prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const contact = await this.prisma.contactMessage.findUnique({ where: { id } });
    if (!contact) throw new NotFoundException(`Contact with ID ${id} not found`);
    return contact;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    await this.findOne(id);
    return this.prisma.contactMessage.update({ where: { id }, data: updateContactDto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}
