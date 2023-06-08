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
    private readonly knowledgeSubCategoryService: KnowledgeSubCategoryService,
  ) {}

  @ApiOperation({ summary: '新增合集子类别' })
  @ApiBearerAuth()
  @Post('create')
  create(@Body() createKnowledgePointDto: CreateKnowledgeSubCategoryDto) {
    return this.knowledgeSubCategoryService.create(createKnowledgePointDto);
  }

  // @ApiOperation({ summary: '新增合集子类别内容' })
  // @ApiBearerAuth()
  // @Post('create-content')
  // createContent(
  //   @Body() createSubCategoryContentDto: CreateSubCategoryContentDto,
  // ) {
  //   return this.knowledgeSubCategoryService.createContent(
  //     createSubCategoryContentDto,
  //   );
  // }

  // @Get('list')
  // findAll() {
  //   return this.knowledgeSubCategoryService.findAll();
  // }

  @ApiOperation({ summary: '获取合集子类别列表' })
  @ApiBearerAuth()
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.knowledgeSubCategoryService.findAll(id);
  }

  @ApiOperation({ summary: '更新合集子类别内容' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKnowledgePointDto: UpdateKnowledgeSubCategoryDto,
  ) {
    return this.knowledgeSubCategoryService.update(id, updateKnowledgePointDto);
  }

  @ApiOperation({ summary: '删除指定合集子类别' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgeSubCategoryService.remove(id);
  }

  // @ApiOperation({ summary: '删除指定合集子类别' })
  // @ApiBearerAuth()
  // @Delete('content-item/:id')
  // removeItem(@Param('id') id: string) {
  //   return this.knowledgeSubCategoryService.remove(id);
  // }
}
