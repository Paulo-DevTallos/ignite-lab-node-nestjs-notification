import { Notifications } from '../../../../app/entities/notifications';
import { NotificationRepositoriy } from '../../../../app/repositories/notifications-repositories';
import { PrismaService } from '../prisma.service';

export class PrismaNotificationsRepository implements NotificationRepositoriy {
	constructor(private prismaService: PrismaService) {}

	async create(notification: Notifications): Promise<void> {
		await this.prismaService.notification.create({
			data: {
				id: notification.id,
				category: notification.category,
				content: notification.content.value,
				recipientId: notification.recipientId,
				readAt: notification.readAt,
				createdAt: notification.createdAt,
			},
		});
	}
}
