import { PartialType } from '@nestjs/swagger';
import { CreateLanguageConfigDto } from './create-language-config.dto';

export class UpdateLanguageConfigDto extends PartialType(
  CreateLanguageConfigDto,
) {}
