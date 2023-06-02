import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  Req,
} from '@nestjs/common';
import { KnowledgeCategoryService } from './knowledge-category.service';
import { CreateKnowledgeCategoryDto } from './dto/create-knowledge-category.dto';
import { UpdateKnowledgeCategoryDto } from './dto/update-knowledge-category.dto';
import { KnowledgeCateGoryInfoDto } from './dto/knowledge-category-info.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
// import { CreateKnowledgeSubCategoryDto } from '../knowledge-subCategory/dto/create-subCategory.dto';

@ApiTags('知识集合类别')
@Controller('knowledge-category')
export class KnowledgeCategoryController {
  constructor(
    private readonly knowledgeCategoryService: KnowledgeCategoryService,
  ) {}

  @ApiOperation({ summary: '新建知识合集类别' })
  @ApiResponse({ status: 201, type: KnowledgeCateGoryInfoDto })
  @ApiBearerAuth()
  // @Public()
  @Post('create')
  create(@Body() createKnowledgeCategoryDto: CreateKnowledgeCategoryDto) {
    return this.knowledgeCategoryService.create(createKnowledgeCategoryDto);
  }

  @ApiOperation({ summary: '知识所有合集' })
  @ApiBearerAuth() // 在API接口中使用Bearer Token进行身份验证
  @Get('list')
  findAll(
    @Query('current') current: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ) {
    return this.knowledgeCategoryService.findAll(current, pageSize);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.knowledgeCategoryService.findOne(+id);
  }

  @ApiOperation({ summary: '更新某个合集' })
  @ApiBearerAuth()
  @Patch('update/:id') // PUT 方法用于完全替换资源，即将整个资源的内容都替换为请求中提供的内容。而 PATCH 方法则只会更新资源的一部分内容，例如更新某个字段的值，而不需要更新整个资源的所有字段。
  update(
    @Param('id') id: string,
    @Body() updateKnowledgeCategoryDto: UpdateKnowledgeCategoryDto,
  ) {
    return this.knowledgeCategoryService.update(id, updateKnowledgeCategoryDto);
  }

  @ApiOperation({ summary: '删除某个合集' })
  @ApiBearerAuth()
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.knowledgeCategoryService.remove(id);
  }

  // @ApiOperation({ summary: '新增合集下知识点' })
  // @ApiBearerAuth()
  // @Post('/create/sub-knowledge')
  // createSubKnowledeg(
  //   @Body() subKnowledeg: CreateKnowledgeSubCategoryDto,
  //   @Req() req,
  // ) {
  //   console.log('subKnowledeg', subKnowledeg, req);
  // }
}
