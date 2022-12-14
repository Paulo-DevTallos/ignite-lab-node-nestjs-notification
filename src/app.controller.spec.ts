import { Test, TestingModule } from '@nestjs/testing';
import { Notifications } from './notifications.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: Notifications;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [Notifications],
      providers: [AppService],
    }).compile();

    appController = app.get<Notifications>(Notifications);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
