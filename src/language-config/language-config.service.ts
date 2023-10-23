import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageConfigDto } from './dto/create-language-config.dto';
import { UpdateLanguageConfigDto } from './dto/update-language-config.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LanguageConfig } from './schemas/language-config.schema';

@Injectable()
export class LanguageConfigService {
  constructor(
    @InjectModel('LanguageConfig')
    private readonly languaConfigModel: Model<LanguageConfig>,
  ) {}

  async create(createLanguageConfigDto: CreateLanguageConfigDto) {
    const languageConfig = new this.languaConfigModel(createLanguageConfigDto);
    const existLanguageConfig = await this.languaConfigModel.findOne({
      projectName: languageConfig.projectName,
    });
    if (existLanguageConfig) {
      throw new HttpException('项目已存在已经存在', HttpStatus.BAD_REQUEST);
    }
    await this.languaConfigModel.create(languageConfig);
    return '新增成功';
  }

  findAll() {
    return `This action returns all languageConfig`;
  }

  findOne(id: number) {
    return `This action returns a #${id} languageConfig`;
  }

  update(id: number, updateLanguageConfigDto: UpdateLanguageConfigDto) {
    return `This action updates a #${id} languageConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageConfig`;
  }
}
