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
import { LanguageConfigService } from './language-config.service';
import { CreateLanguageConfigDto } from './dto/create-language-config.dto';
import { UpdateLanguageConfigDto } from './dto/update-language-config.dto';

@ApiTags('多语言配置项目列表')
@Controller('language-config')
export class LanguageConfigController {
  constructor(private readonly languageConfigService: LanguageConfigService) {}

  @ApiOperation({ summary: '新增多语言配置项目' })
  @ApiBearerAuth()
  @Post('create')
  create(@Body() createLanguageConfigDto: CreateLanguageConfigDto) {
    return this.languageConfigService.create(createLanguageConfigDto);
  }

  @Get()
  findAll() {
    return this.languageConfigService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.languageConfigService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLanguageConfigDto: UpdateLanguageConfigDto,
  ) {
    return this.languageConfigService.update(+id, updateLanguageConfigDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageConfigService.remove(+id);
  }
}
