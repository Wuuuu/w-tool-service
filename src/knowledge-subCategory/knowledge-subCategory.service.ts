import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKnowledgeSubCategoryDto } from './dto/create-subCategory.dto';
import { UpdateKnowledgeSubCategoryDto } from './dto/update-subCategory.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { KnowledgeSubCategoryDocument } from './schemas/knowledge-subCategory.schema';
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
    const subCategory = new this.knowledgeSubCategoryModel(
      createKnowledgeSubCategoryDto,
    );
    const existSubCategory = await this.knowledgeSubCategoryModel.findOne({
      subCategoryName: subCategory.subCategoryName,
    });
    if (existSubCategory) {
      throw new HttpException('子类别已经存在', HttpStatus.BAD_REQUEST);
    }
    await this.knowledgeSubCategoryModel.create(subCategory);
    return '添加成功';
  }

  async findAll(id: string) {
    // TODO: 由于使用find+populate list一直关联不到数据，则使用aggregate语法实现。后期需优化
    // const subCategoriesList = await this.knowledgeSubCategoryModel
    //   .find({
    //     categoryId: id,
    //   })
    //   .exec();
    const subCategoriesList = await this.knowledgeSubCategoryModel.aggregate([
      {
        $lookup: {
          from: 'subCategory-content',
          localField: 'subCategoryId',
          foreignField: 'subCategoryId',
          as: 'list',
        },
      },
      {
        $match: {
          categoryId: new mongoose.Types.ObjectId(id),
        },
      },
    ]);
    return subCategoriesList;
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
    console.log('id', id);
    const exitSubCategoryData =
      // tips: 当删除id不为_id，是自定义的。 不能使用findByIdxxx
      await this.knowledgeSubCategoryModel.findOneAndRemove({
        subCategoryId: id,
      });
    if (!exitSubCategoryData) {
      throw new HttpException('数据不存在', HttpStatus.BAD_REQUEST);
    }
    return '删除成功';
  }

  async removeItem(_id: string) {
    const exitSubCategoryData =
      await this.knowledgeSubCategoryModel.findByIdAndRemove({ _id });
    if (!exitSubCategoryData) {
      throw new HttpException('数据不存在', HttpStatus.BAD_REQUEST);
    }
    return '删除成功';
  }
}

// const Category = mongoose.model('Category', mongoose.Schema({
//   name: String,
//   id: String,
//   list: [{
//     type: mongoose.ObjectId,
//     ref: 'SubCategory'
//   }]
// }))

// // ref 告诉 Mongoose Populate 要查询的模型
// const SubCategory = mongoose.model('subCategory', mongoose.Schema({
//   title: String,
//   categoryId: Category['id'],
//   subCategoryId: String,
// }))
