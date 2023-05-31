import { Test, TestingModule } from '@nestjs/testing';
import { KnowledgePointsController } from './knowledge-points.controller';
import { KnowledgePointsService } from './knowledge-points.service';

describe('KnowledgePointsController', () => {
  let controller: KnowledgePointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgePointsController],
      providers: [KnowledgePointsService],
    }).compile();

    controller = module.get<KnowledgePointsController>(KnowledgePointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
