import { Controller, Get, Post, Body } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationService: NotificationsService) {}

  @Post()
  async createNotification(@Body() data: object) {
    return await this.notificationService.create(data);
  }

  @Get()
  listNotifications() {
    return this.notificationService.list();
  }
}
