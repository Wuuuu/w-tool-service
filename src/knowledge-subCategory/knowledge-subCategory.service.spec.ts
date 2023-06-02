import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeSubCategoryService } from './knowledge-subCategory.service';

describe('KnowledgeSubCategoryService', () => {
  let service: KnowledgeSubCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowledgeSubCategoryService],
    }).compile();

    service = module.get<KnowledgeSubCategoryService>(
      KnowledgeSubCategoryService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
