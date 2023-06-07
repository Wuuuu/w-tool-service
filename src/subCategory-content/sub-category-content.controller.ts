import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SubCategoryContentService } from './sub-category-content.service';
import { CreateSubCategoryContentDto } from './dto/create-sub-category-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-sub-category-content.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('问答展示列表')
@Controller('subCategory-content')
export class SubCategoryContentController {
  constructor(
    private readonly subCategoryContentService: SubCategoryContentService,
  ) {}

  @Post()
  create(@Body() createSubCategoryContentDto: CreateSubCategoryContentDto) {
    return this.subCategoryContentService.create(createSubCategoryContentDto);
  }

  @Get()
  findAll() {
    return this.subCategoryContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subCategoryContentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSubCategoryContentDto: UpdateSubCategoryContentDto,
  ) {
    return this.subCategoryContentService.update(
      +id,
      updateSubCategoryContentDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subCategoryContentService.remove(+id);
  }
}
