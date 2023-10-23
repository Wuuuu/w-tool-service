import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubCategoryContentService } from './subCategory-content.service';
import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-subCategory-content.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('子类别里问答展示列表')
@Controller('subCategory-list')
export class SubCategoryContentController {
  constructor(
    private readonly subCategoryContentService: SubCategoryContentService,
  ) {}

  @ApiOperation({ summary: '新增问答' })
  @ApiBearerAuth()
  @Post('create')
  create(@Body() createSubCategoryContentDto: CreateSubCategoryContentDto) {
    return this.subCategoryContentService.create(createSubCategoryContentDto);
  }

  @ApiOperation({ summary: '合集子类别问答列表数据' })
  @Get(':id')
  findAll(@Param('id') id: string) {
    return this.subCategoryContentService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategoryContentService.findOne(+id);
  }

  @ApiOperation({ summary: '更新问答列表项' })
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubCategoryContentDto: UpdateSubCategoryContentDto,
  ) {
    return this.subCategoryContentService.update(
      id,
      updateSubCategoryContentDto,
    );
  }

  @ApiOperation({ summary: '删除问答列表项' })
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoryContentService.remove(+id);
  }
}
