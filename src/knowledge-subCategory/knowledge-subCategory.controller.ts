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
import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';

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

  @ApiOperation({ summary: '新增合集子类别内容' })
  @ApiBearerAuth()
  @Post('create-content')
  createContent(
    @Body() createSubCategoryContentDto: CreateSubCategoryContentDto,
  ) {
    return this.knowledgePointsService.createContent(
      createSubCategoryContentDto,
    );
  }

  // @Get('list')
  // findAll() {
  //   return this.knowledgePointsService.findAll();
  // }

  @ApiOperation({ summary: '获取合集子类别列表' })
  @ApiBearerAuth()
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.knowledgePointsService.findAll(id);
  }

  @ApiOperation({ summary: '更新合集子类别内容' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKnowledgePointDto: UpdateKnowledgeSubCategoryDto,
  ) {
    return this.knowledgePointsService.update(id, updateKnowledgePointDto);
  }

  @ApiOperation({ summary: '删除指定合集子类别' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgePointsService.remove(id);
  }
}
