import { Test, TestingModule } from '@nestjs/testing';
import { LanguageConfigController } from './language-config.controller';
import { LanguageConfigService } from './language-config.service';

describe('LanguageConfigController', () => {
  let controller: LanguageConfigController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LanguageConfigController],
      providers: [LanguageConfigService],
    }).compile();

    controller = module.get<LanguageConfigController>(LanguageConfigController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
