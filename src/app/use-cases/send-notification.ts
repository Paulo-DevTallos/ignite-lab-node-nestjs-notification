import { Content } from '../entities/content';
import { Notifications } from '../entities/notifications';

interface SendNotificationRequest {
	recipientId: string;
	content: string;
	category: string;
}

interface SendNotificationResponse {
	notification: Notifications;
}

export class SendNotification {
	async execute(
		request: SendNotificationRequest,
	): Promise<SendNotificationResponse> {
		const { recipientId, content, category } = request;

		const notification = new Notifications({
			recipientId,
			content: new Content(content),
			category,
		});

		//persistir dados no banco

		return {
			notification,
		};
	}
}
