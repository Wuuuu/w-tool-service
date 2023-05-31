import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateKnowledgeCategoryDto } from './dto/create-knowledge-category.dto';
import { UpdateKnowledgeCategoryDto } from './dto/update-knowledge-category.dto';
import { KnowledgeCategory } from './schemas/knowledge-category.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class KnowledgeCategoryService {
  constructor(
    @InjectModel('KnowledgeCategory')
    private readonly knowledgeCategoryModel: Model<KnowledgeCategory>,
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

  async findAll() {
    return await this.knowledgeCategoryModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} knowledgeCategory`;
  }

  update(id: number, updateKnowledgeCategoryDto: UpdateKnowledgeCategoryDto) {
    return `This action updates a #${id} knowledgeCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} knowledgeCategory`;
  }
}
