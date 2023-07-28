import { PartialType } from '@nestjs/swagger';
import { CreateCollectionTypeDto } from './create-collection-type.dto';

export class UpdateCollectionTypeDto extends PartialType(CreateCollectionTypeDto) {}
