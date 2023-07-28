import { Model } from 'mongoose';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCollectionTypeDto } from './dto/create-collection-type.dto';
import { UpdateCollectionTypeDto } from './dto/update-collection-type.dto';
import { CollectionType } from './schemas/collection-type.schema';

@Injectable()
export class CollectionTypeService {
  constructor(
    @InjectModel('CollectionType')
    private readonly collectionTypeModel: Model<CollectionType>,
  ) {}

  async create(createCollectionTypeDto: CreateCollectionTypeDto) {
    const { value } = createCollectionTypeDto;
    const existType = await this.collectionTypeModel.findOne({
      value,
    });
    if (existType) {
      throw new HttpException('类型已存在', HttpStatus.BAD_REQUEST);
    }
    const createCollection = await this.collectionTypeModel.create(
      createCollectionTypeDto,
    );
    return createCollection;
  }

  async findAll() {
    const data = await this.collectionTypeModel.find().exec();
    return data;
  }

  update(id: number, updateCollectionTypeDto: UpdateCollectionTypeDto) {
    return `This action updates a #${id} collectionType`;
  }

  remove(id: number) {
    return `This action removes a #${id} collectionType`;
  }
}
