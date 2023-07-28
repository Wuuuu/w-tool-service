import { Test, TestingModule } from '@nestjs/testing';
import { CollectionTypeController } from './collection-type.controller';
import { CollectionTypeService } from './collection-type.service';

describe('CollectionTypeController', () => {
  let controller: CollectionTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectionTypeController],
      providers: [CollectionTypeService],
    }).compile();

    controller = module.get<CollectionTypeController>(CollectionTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
