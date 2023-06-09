import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-subCategory-content.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SubCategoryContent } from './schemas/subCategory-content.schema';
import { Model } from 'mongoose';

@Injectable()
export class SubCategoryContentService {
  constructor(
    @InjectModel('SubCategoryContent')
    private readonly subCategoryContentModel: Model<SubCategoryContent>,
  ) {}

  async create(createSubCategoryContentDto: CreateSubCategoryContentDto) {
    const subCategoryItem = new this.subCategoryContentModel(
      createSubCategoryContentDto,
    );
    console.log('subCategory', subCategoryItem);
    const existSubCategory = await this.subCategoryContentModel.findOne({
      title: subCategoryItem.title,
    });
    if (existSubCategory) {
      throw new HttpException('问答项已经存在', HttpStatus.BAD_REQUEST);
    }
    await this.subCategoryContentModel.create(subCategoryItem);
    return '新增成功';
  }

  findAll() {
    return `This action returns all subCategoryContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategoryContent`;
  }

  async update(
    id: string,
    updateSubCategoryContentDto: UpdateSubCategoryContentDto,
  ) {
    const res = await this.subCategoryContentModel
      .findByIdAndUpdate(
        id,
        {
          $set: updateSubCategoryContentDto,
        },
        { new: true },
      )
      .exec();
    return '更新成功';
  }

  remove(id: number) {
    return `This action removes a #${id} subCategoryContent`;
  }
}
