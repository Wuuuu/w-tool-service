import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageConfigDto } from './dto/create-language-config.dto';
import { UpdateLanguageConfigDto } from './dto/update-language-config.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { LanguageConfig } from './schemas/language-config.schema';
import { ListItem } from './schemas/list-item.schema';
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

  async addToList(projectId: string, listItem: any): Promise<LanguageConfig> {
    listItem.id = new mongoose.Types.ObjectId().toHexString();
    listItem.create_time = new Date();
    listItem.updated_time = new Date();
    const updatedConfig = await this.languaConfigModel.findByIdAndUpdate(
      projectId,
      { $push: { list: listItem } },
      { new: true },
    );

    return updatedConfig;
  }

  findAll() {
    return `This action returns all languageConfig`;
  }

  async findOne(id: string) {
    return await this.languaConfigModel.findById(id);
  }

  update(id: number, updateLanguageConfigDto: UpdateLanguageConfigDto) {
    return `This action updates a #${id} languageConfig`;
  }

  remove(id: number) {
    return `This action removes a #${id} languageConfig`;
  }
}
