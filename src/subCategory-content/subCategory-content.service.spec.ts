import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryContentService } from './subCategory-content.service';

describe('SubCategoryContentService', () => {
  let service: SubCategoryContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubCategoryContentService],
    }).compile();

    service = module.get<SubCategoryContentService>(SubCategoryContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
