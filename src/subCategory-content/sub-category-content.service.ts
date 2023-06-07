import { Injectable } from '@nestjs/common';
import { CreateSubCategoryContentDto } from './dto/create-sub-category-content.dto';
import { UpdateSubCategoryContentDto } from './dto/update-sub-category-content.dto';

@Injectable()
export class SubCategoryContentService {
  create(createSubCategoryContentDto: CreateSubCategoryContentDto) {
    return 'This action adds a new subCategoryContent';
  }

  findAll() {
    return `This action returns all subCategoryContent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subCategoryContent`;
  }

  update(id: number, updateSubCategoryContentDto: UpdateSubCategoryContentDto) {
    return `This action updates a #${id} subCategoryContent`;
  }

  remove(id: number) {
    return `This action removes a #${id} subCategoryContent`;
  }
}
