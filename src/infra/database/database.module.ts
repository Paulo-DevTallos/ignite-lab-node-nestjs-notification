import { Module } from '@nestjs/common';
import { NotificationRepositoriy } from 'src/app/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notification-repository';

@Module({
	imports: [],
	controllers: [],
	providers: [
		PrismaService,
		{
			provide: NotificationRepositoriy,
			useClass: PrismaNotificationsRepository,
		},
	],
	exports: [NotificationRepositoriy],
})
export class DataBaseModule {}
