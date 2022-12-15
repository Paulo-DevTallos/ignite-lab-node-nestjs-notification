import { Notifications } from '../entities/notifications';
//inversao de dependencias
export abstract class NotificationRepositoriy {
	abstract create(notification: Notifications): Promise<void>;
}
