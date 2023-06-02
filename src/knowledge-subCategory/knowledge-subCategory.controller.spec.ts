import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgeSubCategoryController } from './knowledge-subCategory.controller';
import { KnowledgeSubCategoryService } from './knowledge-subCategory.service';

describe('KnowledgePointsController', () => {
  let controller: KnowledgeSubCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeSubCategoryController],
      providers: [KnowledgeSubCategoryService],
    }).compile();

    controller = module.get<KnowledgeSubCategoryController>(
      KnowledgeSubCategoryController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
