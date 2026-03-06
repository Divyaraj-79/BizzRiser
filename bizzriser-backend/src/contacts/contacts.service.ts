import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ContactsService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) { }

  async create(createContactDto: CreateContactDto) {
    const contact = await this.prisma.contactMessage.create({ data: createContactDto });

    // Send email notification (best-effort, don't fail if email fails)
    try {
      await this.mailerService.sendMail({
        to: process.env.ADMIN_NOTIFY_EMAIL || process.env.SMTP_USER,
        subject: `New Contact Inquiry from ${createContactDto.firstName} ${createContactDto.lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse: collapse; width: 100%;">
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Name</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.firstName} ${createContactDto.lastName}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Email</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.email}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Company</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.company || 'N/A'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Phone</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.phone || 'N/A'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Industry</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.industry || 'N/A'}</td></tr>
            <tr><td style="padding:8px; border:1px solid #ddd;"><strong>Message</strong></td><td style="padding:8px; border:1px solid #ddd;">${createContactDto.message}</td></tr>
          </table>
          <p style="margin-top:16px; color:#999; font-size:12px;">This enquiry was submitted via BizzRiser.com</p>
        `,
      });
    } catch (e) {
      // Log but don't crash the request if email fails
      console.warn('Email notification failed:', e?.message);
    }

    return contact;
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
