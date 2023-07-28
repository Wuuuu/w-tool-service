import { Module } from '@nestjs/common';
import { CollectionTypeService } from './collection-type.service';
import { CollectionTypeController } from './collection-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectionTypeSchema } from './schemas/collection-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'CollectionType', schema: CollectionTypeSchema },
    ]),
  ],
  controllers: [CollectionTypeController],
  providers: [CollectionTypeService],
})
export class CollectionTypeModule {}
