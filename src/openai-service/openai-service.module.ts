import { Module } from '@nestjs/common';
import { OpenaiServiceService } from './openai-service.service';
import { OpenaiServiceController } from './openai-service.controller';

@Module({
  controllers: [OpenaiServiceController],
  providers: [OpenaiServiceService],
})
export class OpenaiServiceModule {}
