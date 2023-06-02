import { Injectable } from '@nestjs/common';
import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KnowledgeSubCategoryDocument } from './schamas/knowledge-subCategory.schema';
import { KnowledgeCategoryDocument } from '../knowledge-category/schemas/knowledge-category.schema';

@Injectable()
export class KnowledgeSubCategoryService {
  constructor(
    @InjectModel('KnowledgeSubCategory')
    private readonly knowledgeSubCategoryModel: Model<KnowledgeSubCategoryDocument>,
    @InjectModel('KnowledgeCategory')
    private readonly knowledgeCategory: Model<KnowledgeCategoryDocument>,
  ) {}

  async create(createKnowledgeSubCategoryDto: CreateKnowledgeSubCategoryDto) {
    const { categoryId } = createKnowledgeSubCategoryDto;
    const subcategory = new this.knowledgeSubCategoryModel(
      createKnowledgeSubCategoryDto,
    );
    await this.knowledgeCategory
      .findByIdAndUpdate(
        categoryId,
        {
          $push: { subCategories: subcategory },
        },
        { new: true },
      )
      .exec();
    return '添加成功';
  }

  findAll() {
    return `This action returns all knowledgePoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} knowledgePoint`;
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
