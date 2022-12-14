import { Content } from './content';

test('it should be able to create a notification content', () => {
	const content = new Content('Voce recebeu uma solicitacao de amizade');

	expect(content).toBeTruthy();
});

test('it should not be able to create a notification content with less than five characters', () => {
	expect(() => new Content('aaa')).toBeTruthy();
});

test('it should not be able to create a notification content with more than 240 characters', () => {
	expect(() => new Content('a'.repeat(241))).toBeTruthy();
});
