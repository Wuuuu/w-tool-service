import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKnowledgeCategoryDto } from './dto/create-knowledge-category.dto';
import { UpdateKnowledgeCategoryDto } from './dto/update-knowledge-category.dto';
import {
  KnowledgeCategory,
  KnowledgeCategoryDocument,
} from './schemas/knowledge-category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  KnowledgeSubCategory,
  KnowledgeSubCategoryDocument,
} from 'src/knowledge-subCategory/schamas/knowledge-subCategory.schema';

@Injectable()
export class KnowledgeCategoryService {
  constructor(
    @InjectModel('KnowledgeCategory')
    private readonly knowledgeCategoryModel: Model<KnowledgeCategoryDocument>,
    @InjectModel('KnowledgeSubCategory')
    private knowledgeSubCategoryModel: Model<KnowledgeSubCategoryDocument>,
  ) {}

  async create(createKnowledgeCategoryDto: CreateKnowledgeCategoryDto) {
    const { collectionName } = createKnowledgeCategoryDto;
    const currentCollection = await this.knowledgeCategoryModel.findOne({
      collectionName,
    });
    if (currentCollection) {
      throw new HttpException('知识合集已存在', HttpStatus.BAD_REQUEST);
    }
    const createCollection = await this.knowledgeCategoryModel.create(
      createKnowledgeCategoryDto,
    );
    return createCollection;
  }

  async findAll(page: number, limit: number) {
    const selectStr =
      'collectionName coverUrl createdTime updatedTime likeCount summary _id';

    const data = await this.knowledgeCategoryModel
      .find()
      // .select(selectStr)
      .populate('subCategories')
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();

    console.log('data', data);
    const total = await this.knowledgeCategoryModel.countDocuments().exec();
    return {
      data,
      current: page,
      pageSize: limit,
      total,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} knowledgeCategory`;
  }

  async update(
    id: string,
    updateKnowledgeCategoryDto: UpdateKnowledgeCategoryDto,
  ) {
    await this.knowledgeCategoryModel.findByIdAndUpdate(
      id,
      {
        $set: updateKnowledgeCategoryDto,
      },
      {
        new: true,
      },
    );
    return '更新成功';
  }

  async remove(id: string) {
    const delObj = await this.knowledgeCategoryModel.findByIdAndRemove({
      _id: id,
    });
    if (!delObj) {
      throw new HttpException('数据不存在', HttpStatus.BAD_REQUEST);
    }
    return '删除成功';
  }
}
