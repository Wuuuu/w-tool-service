import { Test, TestingModule } from '@nestjs/testing';
import { SubCategoryContentController } from './subCategory-content.controller';
import { SubCategoryContentService } from './subCategory-content.service';

describe('SubCategoryContentController', () => {
  let controller: SubCategoryContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubCategoryContentController],
      providers: [SubCategoryContentService],
    }).compile();

    controller = module.get<SubCategoryContentController>(
      SubCategoryContentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
