import { Module } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
@Module({
	imports: [],
	controllers: [NotificationsController],
	providers: [PrismaService, NotificationsService],
})
export class HttpModule {}
