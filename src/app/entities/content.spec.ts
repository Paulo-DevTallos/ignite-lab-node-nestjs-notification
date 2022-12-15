import { Content } from './content';

describe('Notification content', () => {
	it('Should be able to create a notification content', () => {
		const content = new Content('Voce recebeu uma solicitacao de amizade');

		expect(content).toBeTruthy();
	});

	it('Should not be able to create a notification content with less than five characters', () => {
		expect(() => new Content('aaa')).toBeTruthy();
	});

	it('Should not be able to create a notification content with more than 240 characters', () => {
		expect(() => new Content('a'.repeat(241))).toBeTruthy();
	});
});
