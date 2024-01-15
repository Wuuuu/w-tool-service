import { Test, TestingModule } from '@nestjs/testing';
import { OpenaiServiceController } from './openai-service.controller';
import { OpenaiServiceService } from './openai-service.service';

describe('OpenaiServiceController', () => {
  let controller: OpenaiServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OpenaiServiceController],
      providers: [OpenaiServiceService],
    }).compile();

    controller = module.get<OpenaiServiceController>(OpenaiServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
