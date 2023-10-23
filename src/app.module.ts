import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { KnowledgeCategoryModule } from './knowledge-category/knowledge-category.module';
import { KnowledgeSubCategryModule } from './knowledge-subCategory/knowledge-subCategory.module';
import { SubCategoryContentModule } from './subCategory-content/subCategory-content.module';
import { UploadModule } from './upload/upload.module';
import { CollectionTypeModule } from './collection-type/collection-type.module';
import { LanguageConfigModule } from './language-config/language-config.module';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('MONGODB_DATABASE_URL'),
        dbName: 'w-tool-service',
      }),
    }),
    AuthModule,
    KnowledgeCategoryModule,
    KnowledgeSubCategryModule,
    SubCategoryContentModule,
    CollectionTypeModule,
    UploadModule,
    LanguageConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
