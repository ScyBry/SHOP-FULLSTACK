import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserEntity)
    private userModel: typeof UserEntity,
  ) {}

  findOne(filter: {
    where: { id?: string; username?: string; email?: string };
  }): Promise<UserEntity> {
    return this.userModel.findOne({ ...filter });
  }

  async create(
    createUserDto: CreateUserDto,
  ): Promise<UserEntity | { warningMessage: string }> {
    const user = new UserEntity();

    const existingByUsername = await this.findOne({
      where: { username: createUserDto.username },
    });

    const existingByEmail = await this.findOne({
      where: { email: createUserDto.email },
    });

    if (existingByUsername) {
      return { warningMessage: 'Пользователь с таким именем уже существует' };
    }

    if (existingByEmail) {
      return { warningMessage: 'Пользователь с такой почтой уже существует' };
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    user.username = createUserDto.username;
    user.password = hashedPassword;
    user.email = createUserDto.email;

    return user.save();
  }
}
