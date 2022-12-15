import { Content } from './content';
import { Notifications } from './notifications';

describe('Notification', () => {
	it('Should be able to create a notification', () => {
		const notification = new Notifications({
			content: new Content('Nova solicitacao de amizade'),
			category: 'social',
			recipientId: '125sdff-sasddsds-sdddf25',
		});

		expect(notification).toBeTruthy();
	});
});
