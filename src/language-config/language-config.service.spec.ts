import { Test, TestingModule } from '@nestjs/testing';
import { LanguageConfigService } from './language-config.service';

describe('LanguageConfigService', () => {
  let service: LanguageConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LanguageConfigService],
    }).compile();

    service = module.get<LanguageConfigService>(LanguageConfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
