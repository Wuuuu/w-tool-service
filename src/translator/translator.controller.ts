import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TranslatorService } from './translator.service';
import { CreateTranslatorDto } from './dto/create-translator.dto';
import { UpdateTranslatorDto } from './dto/update-translator.dto';
import { Public } from '../auth/decorators/public.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('翻译模块')
@Controller('translator')
export class TranslatorController {
  constructor(private readonly translatorService: TranslatorService) {}

  @Post()
  @Public()
  @ApiOperation({ summary: '文案翻译' })
  create(@Body() createTranslatorDto: CreateTranslatorDto) {
    return this.translatorService.create(createTranslatorDto);
  }

  @Get()
  findAll() {
    return this.translatorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.translatorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTranslatorDto: UpdateTranslatorDto,
  ) {
    return this.translatorService.update(+id, updateTranslatorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.translatorService.remove(+id);
  }
}
