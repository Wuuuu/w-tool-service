import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  KnowledgeSubCategory,
  KnowledgeSubCategoryDocument,
} from './schamas/knowledge-subCategory.schema';
import { KnowledgeCategoryDocument } from '../knowledge-category/schemas/knowledge-category.schema';

@Injectable()
export class KnowledgeSubCategoryService {
  constructor(
    @InjectModel('KnowledgeSubCategory')
    private readonly knowledgeSubCategoryModel: Model<KnowledgeSubCategory>,
    @InjectModel('KnowledgeCategory')
    private readonly knowledgeCategory: Model<KnowledgeCategoryDocument>,
  ) {}

  async create(createKnowledgeSubCategoryDto: CreateKnowledgeSubCategoryDto) {
    const { categoryId } = createKnowledgeSubCategoryDto;
    const subcategory = new this.knowledgeSubCategoryModel(
      createKnowledgeSubCategoryDto,
    );
    // await this.knowledgeCategory
    //   .findByIdAndUpdate(
    //     categoryId,
    //     {
    //       $push: { subCategories: subcategory },
    //     },
    //     { new: true },
    //   )
    //   .exec();
    const existSubCategory = await this.knowledgeSubCategoryModel.findOne({
      subCategoryName: subcategory.subCategoryName,
    });
    if (existSubCategory) {
      throw new HttpException('子类别已经存在', HttpStatus.BAD_REQUEST);
    }
    // 将子集类别单独存在knowledge_subCategory表里
    const res = this.knowledgeSubCategoryModel.create(subcategory);
    console.log('res', res);
    return '添加成功';
  }

  async findAll(id: string) {
    const subCategories = await this.knowledgeSubCategoryModel
      .find({ categoryId: id })
      .exec();
    return subCategories;
  }

  findOne() {
    return 'findOne';
  }

  update(
    id: number,
    updateKnowledgeSubCategoryDto: UpdateKnowledgeSubCategoryDto,
  ) {
    return `This action updates a #${id} knowledgePoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} knowledgePoint`;
  }
}
