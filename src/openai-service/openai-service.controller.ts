import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OpenaiServiceService } from './openai-service.service';
import { CreateOpenaiServiceDto } from './dto/create-openai-service.dto';
import { UpdateOpenaiServiceDto } from './dto/update-openai-service.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('openai 服务')
@Controller('openai-service')
export class OpenaiServiceController {
  constructor(private readonly openaiServiceService: OpenaiServiceService) {}

  @Post('patch-translation-gpt4')
  @ApiBearerAuth()
  create(@Body() createOpenaiServiceDto: CreateOpenaiServiceDto) {
    return this.openaiServiceService.translateByGPT4(createOpenaiServiceDto);
  }

  @Post('patch-translation-gpt3')
  @ApiBearerAuth()
  chat_3(@Body() createOpenaiServiceDto: CreateOpenaiServiceDto) {
    return this.openaiServiceService.chatWith3(createOpenaiServiceDto);
  }

  @Get('text')
  @ApiBearerAuth()
  findAll() {
    return this.openaiServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.openaiServiceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOpenaiServiceDto: UpdateOpenaiServiceDto,
  ) {
    return this.openaiServiceService.update(+id, updateOpenaiServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.openaiServiceService.remove(id);
  }
}
