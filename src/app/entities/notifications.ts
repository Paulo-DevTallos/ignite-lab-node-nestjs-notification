import { randomUUID } from 'crypto';
import { Replace } from 'src/helpers/replace';
import { Content } from './content';

export interface NotificationsProps {
	recipientId: string;
	content: Content;
	category: string;
	readAt?: Date | null;
	createdAt: Date;
}

export class Notifications {
	private _id: string;
	private props: NotificationsProps;

	//utilizando helper para tratamento do createdAt
	constructor(props: Replace<NotificationsProps, { createdAt?: Date }>) {
		this._id = randomUUID();
		this.props = {
			...props,
			createdAt: props.createdAt ?? new Date(), // if ?? else
		};
	}

	public get id() {
		return this._id;
	}

	// setter atualiza algo | getter busca algo
	public set content(content: Content) {
		this.props.content = content;
	}

	public get content(): Content {
		return this.props.content;
	}

	public set recipientId(recipientId: string) {
		this.props.recipientId = recipientId;
	}

	public get recipientId(): string {
		return this.props.recipientId;
	}

	public set category(category: string) {
		this.props.category = category;
	}

	public get category(): string {
		return this.props.category;
	}

	public set readAt(readAt: Date | null | undefined) {
		this.props.readAt = readAt;
	}

	public get readAt(): Date | null | undefined {
		return this.props.readAt;
	}

	public get createdAt(): Date {
		return this.props.createdAt;
	}
}
