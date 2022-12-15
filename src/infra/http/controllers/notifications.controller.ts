/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationDto } from '../dto/createNotification-dto';

@Controller('notifications')
export class NotificationsController {
	constructor(private sendNotification: SendNotification) {}

	@Post()
	async createNotification(@Body() data: CreateNotificationDto) {
		const { recipientId, content, category } = data;

		const { notification } = await this.sendNotification.execute({
			content,
			recipientId,
			category,
		});

		console.log(notification);
		return { notification };
	}
}
