import { Test, TestingModule } from '@nestjs/testing';
import { CollectionTypeService } from './collection-type.service';

describe('CollectionTypeService', () => {
  let service: CollectionTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectionTypeService],
    }).compile();

    service = module.get<CollectionTypeService>(CollectionTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
