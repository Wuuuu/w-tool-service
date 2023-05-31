import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KnowledgePointsService } from './knowledge-points.service';
import { CreateKnowledgePointDto } from './dto/create-knowledge-point.dto';
import { UpdateKnowledgePointDto } from './dto/update-knowledge-point.dto';

@ApiTags('知识类别知识点')
@Controller('knowledge-points')
export class KnowledgePointsController {
  constructor(
    private readonly knowledgePointsService: KnowledgePointsService,
  ) {}

  @Post()
  create(@Body() createKnowledgePointDto: CreateKnowledgePointDto) {
    return this.knowledgePointsService.create(createKnowledgePointDto);
  }

  @Get()
  findAll() {
    return this.knowledgePointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.knowledgePointsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKnowledgePointDto: UpdateKnowledgePointDto,
  ) {
    return this.knowledgePointsService.update(+id, updateKnowledgePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgePointsService.remove(+id);
  }
}
