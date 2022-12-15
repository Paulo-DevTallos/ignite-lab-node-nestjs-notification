/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateNotificationDto } from '../../infra/http/dto/createNotification-dto';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
	constructor(private readonly notificationService: NotificationsService) {}

	@Post()
	async createNotification(@Body() data: CreateNotificationDto) {
		return await this.notificationService.create(data);
	}

	@Get()
	listNotifications() {
		return this.notificationService.list();
	}
}
