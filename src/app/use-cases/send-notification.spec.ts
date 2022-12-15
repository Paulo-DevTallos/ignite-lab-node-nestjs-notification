import { SendNotification } from './send-notification';

describe('Send notification', () => {
	it('Should be able to send notification', async () => {
		const sendNotification = new SendNotification();

		const { notification } = await sendNotification.execute({
			content: 'This is a notification',
			category: 'social',
			recipientId: 'sdfsdf55-sdfsd2f5-dfggf178',
		});

		expect(notification).toBeTruthy();
	});
});
