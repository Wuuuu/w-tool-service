import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateLanguageConfigDto } from './dto/create-language-config.dto';
import { UpdateLanguageConfigDto } from './dto/update-language-config.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { LanguageConfig } from './schemas/language-config.schema';
import { isEmpty } from 'class-validator';
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
    await this.languaConfigModel.findByIdAndUpdate(id, { list }, { new: true });
    return listItem;
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

  async remove({ parentId, id }: { parentId: string; id: string }) {
    const { list = [] } =
      (await this.languaConfigModel.findById(parentId)) || {};
    const currentData = list.find((i) => i._id === id);
    if (!currentData) {
      throw new HttpException('数据不存在', HttpStatus.BAD_REQUEST);
    }
    const filterList = list.filter((i) => i._id !== id);
    console.log('filterList', filterList);
    await this.languaConfigModel.findByIdAndUpdate(
      parentId,
      { list: filterList },
      { new: true },
    );
    return true;
  }
}
