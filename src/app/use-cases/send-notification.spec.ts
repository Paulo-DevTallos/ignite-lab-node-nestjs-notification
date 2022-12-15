import { InMemoryNotificationRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
	it('Should be able to send notification', async () => {
		const notificationsRepository = new InMemoryNotificationRepository();
		const sendNotification = new SendNotification(notificationsRepository);

		const { notification } = await sendNotification.execute({
			content: 'This is a notification',
			category: 'social',
			recipientId: 'sdfsdf55-sdfsd2f5-dfggf178',
		});

		expect(notificationsRepository.notifications).toHaveLength(1);
		expect(notificationsRepository.notifications[0]).toEqual(notification);
	});
});
