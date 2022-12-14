import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [NotificationsController],
  providers: [PrismaService, NotificationsService],
})
export class AppModule {}
