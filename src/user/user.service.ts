import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { username } = createUserDto;
    const existUser = await this.userModel.findOne({
      username,
    });
    if (existUser) {
      throw new HttpException('用户名已存在', HttpStatus.BAD_REQUEST);
    }

    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  // async findAll(createUserDto: CreateUserDto) {
  //   return `This action returns all user`;
  // }

  async findOne(id: string) {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async findUser(username: string) {
    return await this.userModel.findOne({ username }).exec();
  }
  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
