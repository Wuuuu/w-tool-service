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

  async addToList(id: string, listItem: any) {
    const currentData = await this.languaConfigModel.findById(id);
    let list = currentData.list;
    listItem.updated_time = new Date();
    if (listItem._id) {
      listItem.create_time = new Date();
      list = list.map((element) => {
        if (listItem._id === element._id) {
          return { ...element, ...listItem };
        }
        return element;
      });
    } else {
      listItem._id = new mongoose.Types.ObjectId().toHexString();
      list.unshift(listItem);
    }
    const updatedConfig = await this.languaConfigModel.findByIdAndUpdate(
      id,
      { list },
      { new: true },
    );
    return {};
  }

  async findAll() {
    return await this.languaConfigModel.find();
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
