import { Injectable } from '@nestjs/common';
import { CreateOpenaiServiceDto } from './dto/create-openai-service.dto';
import { UpdateOpenaiServiceDto } from './dto/update-openai-service.dto';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';

@Injectable()
export class OpenaiServiceService {
  private openai: OpenAI;
  constructor(private readonly configService: ConfigService) {
    this.openai = new OpenAI({
      apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
      baseURL: process.env['OPENAI_PROXY_URL'],
    });
  }
  async create() {
    try {
      const response = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content:
              'You will be provided with a sentence in English, and your task is to translate it into French.',
          },
          {
            role: 'user',
            content: 'My name is Jane. What is yours?',
          },
        ],
        temperature: 0,
        max_tokens: 64,
        top_p: 1,
      });
      console.log('response', response);
      return response;
    } catch (error) {
      console.log('err', error);
    }
  }
  async chatWith3(createTranslatorDto: CreateOpenaiServiceDto) {
    console.log('createTranslatorDto', createTranslatorDto);
    try {
      const runner = await this.openai.beta.chat.completions
        .stream({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'user',
              content:
                "将   \"请输入正确的邮箱格式\"  翻译成中文，韩语，日语，法语，西班牙语，将翻译结果以js数组形式返回,例如['abc', 'bcd']",
            },
          ],
        })
        .on('message', (msg) => console.log(msg))
        .on('content', (diff) => process.stdout.write(diff));

      for await (const chunk of runner) {
        console.log('chunk', chunk);
      }

      const result = await runner.finalChatCompletion();
      console.log(result);
      return result;
    } catch (e) {
      console.error(e);
    }
  }

  findAll() {
    return `This action returns all openaiService`;
  }

  findOne(id: number) {
    return `This action returns a #${id} openaiService`;
  }

  update(id: number, updateOpenaiServiceDto: UpdateOpenaiServiceDto) {
    return `This action updates a #${id} openaiService`;
  }

  remove(id: number) {
    return `This action removes a #${id} openaiService`;
  }
}
