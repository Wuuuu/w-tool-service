import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
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
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('知识类别集合')
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
  @ApiBearerAuth()
  @Get('list')
  findAll() {
    return this.knowledgeCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.knowledgeCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKnowledgeCategoryDto: UpdateKnowledgeCategoryDto,
  ) {
    return this.knowledgeCategoryService.update(
      +id,
      updateKnowledgeCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.knowledgeCategoryService.remove(+id);
  }
}
