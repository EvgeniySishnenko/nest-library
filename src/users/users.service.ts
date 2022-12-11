import { Model, Connection } from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './interfaces/create-user-dto.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<UserDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  async getUsersByEmail(email: string) {
    const user = await this.UserModel.findOne({ email });
    if (user) return user;
    return null;
  }
  async createUsers(userDTO: CreateUserDto) {
    const newUser = new this.UserModel(userDTO);
    return newUser.save();
  }
}
