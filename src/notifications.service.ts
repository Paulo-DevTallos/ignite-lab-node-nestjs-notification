import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/createNotification-dto';
import { PrismaService } from './prisma.service';
//import { randomUUID } from 'node:crypto';

@Injectable()
export class NotificationsService {
  constructor(private readonly prismaModel: PrismaService) {}

  async create(data: CreateNotificationDto) {
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
