import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { LanguageConfigService } from './language-config.service';
import { LanguageConfigController } from './language-config.controller';

import { LanguageConfigSchema } from './schemas/language-config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'LanguageConfig', schema: LanguageConfigSchema },
    ]),
  ],
  controllers: [LanguageConfigController],
  providers: [LanguageConfigService],
  exports: [LanguageConfigService],
})
export class LanguageConfigModule {}
