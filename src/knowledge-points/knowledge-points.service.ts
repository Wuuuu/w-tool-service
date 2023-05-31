import { Injectable } from '@nestjs/common';
import { CreateKnowledgePointDto } from './dto/create-knowledge-point.dto';
import { UpdateKnowledgePointDto } from './dto/update-knowledge-point.dto';

@Injectable()
export class KnowledgePointsService {
  create(createKnowledgePointDto: CreateKnowledgePointDto) {
    return 'This action adds a new knowledgePoint';
  }

  findAll() {
    return `This action returns all knowledgePoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} knowledgePoint`;
  }

  update(id: number, updateKnowledgePointDto: UpdateKnowledgePointDto) {
    return `This action updates a #${id} knowledgePoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} knowledgePoint`;
  }
}
