import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { PrismaService } from './infra/prisma.service';
import { HttpModule } from './infra/http.module';

@Module({
  imports: [HttpModule],
  controllers: [NotificationsController],
  providers: [PrismaService, NotificationsService],
})
export class NotificationsModule {}
