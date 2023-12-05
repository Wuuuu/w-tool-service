import { Injectable } from '@nestjs/common';
import { CreateTranslatorDto } from './dto/create-translator.dto';
import { UpdateTranslatorDto } from './dto/update-translator.dto';
import * as deepl from 'deepl-node';
import * as dotenv from 'dotenv';

async function sendRequests(translatText, detectedSourceLang, targetLang) {
  const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY;
  const translator = new deepl.Translator(DEEPL_AUTH_KEY);

  const results = [];
  for (const lang of targetLang) {
    try {
      const result = await translator.translateText(
        translatText,
        detectedSourceLang,
        lang,
      );
      console.log('result', result);
      results.push({ ...result, targetLang: lang });
    } catch (error) {
      console.log('error', error);
    }
    await new Promise((resolve) => setTimeout(resolve, 300)); // 等待300毫秒
  }
  return results;
}

@Injectable()
export class TranslatorService {
  constructor() {
    dotenv.config();
  }
  async create(createTranslatorDto: CreateTranslatorDto) {
    const { translatText, targetLang, detectedSourceLang } =
      createTranslatorDto || {};
    try {
      const results = await sendRequests(
        translatText,
        detectedSourceLang,
        targetLang,
      );
      return results;
    } catch (error) {
      return error;
    }
    // Promise.all(translatePromise)
    //   .then((result) => {
    //     return result;
    //   })
    //   .catch((err) => err);
  }

  findAll() {
    return `This action returns all translator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} translator`;
  }

  update(id: number, updateTranslatorDto: UpdateTranslatorDto) {
    return `This action updates a #${id} translator`;
  }

  remove(id: number) {
    return `This action removes a #${id} translator`;
  }
}
