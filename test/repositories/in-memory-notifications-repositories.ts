import { Notifications } from '../../src/app/entities/notifications';
import { NotificationRepositoriy } from '../../src/app/repositories/notifications-repositories';

//mock - desimulacao do banco -  desacomplamento de camadas

export class InMemoryNotificationRepository implements NotificationRepositoriy {
	public notifications: Notifications[] = [];

	async create(notification: Notifications) {
		this.notifications.push(notification);
	}
}
