import { PartialType } from '@nestjs/swagger';
import { CreateOpenaiServiceDto } from './create-openai-service.dto';

export class UpdateOpenaiServiceDto extends PartialType(CreateOpenaiServiceDto) {}
