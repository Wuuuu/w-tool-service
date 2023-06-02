import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { KnowledgeSubCategoryService } from './knowledge-subCategory.service';
import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';

@ApiTags('知识合集子类别')
@Controller('knowledge-subCategory')
export class KnowledgeSubCategoryController {
  constructor(
    private readonly knowledgePointsService: KnowledgeSubCategoryService,
  ) {}

  @ApiOperation({ summary: '新增合集子类别' })
  @ApiBearerAuth()
  @Post('create')
  create(@Body() createKnowledgePointDto: CreateKnowledgeSubCategoryDto) {
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
    @Body() updateKnowledgePointDto: UpdateKnowledgeSubCategoryDto,
  ) {
    return this.knowledgePointsService.update(+id, updateKnowledgePointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgePointsService.remove(+id);
  }
}
