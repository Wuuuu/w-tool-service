import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KnowledgeSubCategory } from './schamas/knowledge-subCategory.schema';
import { KnowledgeCategoryDocument } from '../knowledge-category/schemas/knowledge-category.schema';
import { CreateSubCategoryContentDto } from './dto/create-subCategory-content.dto';

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

  async createContent(
    createSubCategoryContentDto: CreateSubCategoryContentDto,
  ) {
    const existSubCategoryContent =
      await this.knowledgeSubCategoryModel.findById({
        _id: createSubCategoryContentDto.subCategoryId,
      });
    const isExist = existSubCategoryContent?.list.some(
      (item) => item.title === createSubCategoryContentDto.title,
    );
    if (isExist) {
      throw new HttpException('子类别内容已经存在', HttpStatus.BAD_REQUEST);
    }
    const res = await this.knowledgeSubCategoryModel
      .findByIdAndUpdate(
        createSubCategoryContentDto.subCategoryId,
        {
          $push: { list: createSubCategoryContentDto },
        },
        { new: true },
      )
      .exec();
    // 将子集类别单独存在knowledge_subCategory表里
    // const res = this.knowledgeSubCategoryModel.createCollection(subcategory);
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

  async update(
    id: string,
    updateKnowledgeSubCategoryDto: UpdateKnowledgeSubCategoryDto,
  ) {
    const updatedSubCategory = await this.knowledgeSubCategoryModel
      .findByIdAndUpdate(id, updateKnowledgeSubCategoryDto, { new: true })
      .exec();
    console.log('updatedSubCategory:', updatedSubCategory);
    return updatedSubCategory;
  }

  async remove(id: string) {
    const exitSubCategoryData =
      await this.knowledgeSubCategoryModel.findByIdAndRemove({ _id: id });
    if (!exitSubCategoryData) {
      throw new HttpException('数据不存在', HttpStatus.BAD_REQUEST);
    }
    return '删除成功';
  }
}
