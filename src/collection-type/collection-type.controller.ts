import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CollectionTypeService } from './collection-type.service';
import { CreateCollectionTypeDto } from './dto/create-collection-type.dto';
import { UpdateCollectionTypeDto } from './dto/update-collection-type.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('合集类型列表')
@Controller('collection-type')
export class CollectionTypeController {
  constructor(private readonly collectionTypeService: CollectionTypeService) {}

  @ApiOperation({ summary: '类型添加' })
  @Public()
  @Post('create')
  create(@Body() createCollectionTypeDto: CreateCollectionTypeDto) {
    return this.collectionTypeService.create(createCollectionTypeDto);
  }

  @ApiOperation({ summary: '合集所有类型' })
  @Public()
  @Get('list')
  findAll() {
    return this.collectionTypeService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectionTypeDto: UpdateCollectionTypeDto,
  ) {
    return this.collectionTypeService.update(+id, updateCollectionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectionTypeService.remove(+id);
  }
}
