import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class Notifications {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create() {
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(), // creating a unique id
        content: 'Você tem uma nova solicitação de amizade',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }

  @Get()
  list() {
    return this.prismaService.notification.findMany();
  }
}
