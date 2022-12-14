import { Module } from '@nestjs/common';
import { Notifications } from './notifications.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [Notifications],
  providers: [PrismaService],
})
export class AppModule {}
