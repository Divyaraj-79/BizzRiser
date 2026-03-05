import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.adminUser.findUnique({ where: { email } });
    if (user && await bcrypt.compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async seedAdmin() {
    const adminEmail = 'admin@bizzriser.com';
    const existingAdmin = await this.prisma.adminUser.findUnique({ where: { email: adminEmail } });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      return await this.prisma.adminUser.create({
        data: { email: adminEmail, password: hashedPassword, name: 'Super Admin', role: 'ADMIN' }
      });
    }
    return existingAdmin;
  }
}
