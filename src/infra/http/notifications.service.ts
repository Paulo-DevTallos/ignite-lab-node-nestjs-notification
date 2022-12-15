import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from '../../infra/http/dto/createNotification-dto';
import { PrismaService } from '../database/prisma/prisma.service';

@Injectable()
export class NotificationsService {
	constructor(private readonly prismaModel: PrismaService) {}

	async create(data: CreateNotificationDto) {
		const existsNotification = await this.prismaModel.notification.findFirst({
			where: {
				id: data.id,
			},
		});

		if (existsNotification)
			throw new Error('Notificacao precisa ter o id único!');

		const newNotification = await this.prismaModel.notification.create({
			data,
		});

		console.log(newNotification);
		return newNotification;
	}

	list() {
		return this.prismaModel.notification.findMany();
	}
}

/*
another approach

create(data: CreateNotificationDto) {
	const { recipientId, content, category } = data

	await this.prismaModel.notification.create({
		data: {
			id: randonUUID(),
			content: 'Voce possui uma nova notificacao',
			category: 'Social',
			recipientId: randomUUID()
		}
	})
}

*/
