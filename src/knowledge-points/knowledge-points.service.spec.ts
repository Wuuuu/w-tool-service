import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgePointsService } from './knowledge-points.service';

describe('KnowledgePointsService', () => {
  let service: KnowledgePointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowledgePointsService],
    }).compile();

    service = module.get<KnowledgePointsService>(KnowledgePointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
