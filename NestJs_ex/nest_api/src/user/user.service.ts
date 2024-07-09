import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.model';
import { Post } from '../post/entities/post.model'
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ){}
  async create(createUserDto: CreateUserDto):Promise<User>{
    try{
      console.log(createUserDto);
      const user = await this.userModel.create({...createUserDto});
      return user;
    }catch(erorr){
      throw new BadRequestException('Failed to create user!!!');
    }
  }

  findAll():Promise<User[]> {
    return this.userModel.findAll();
  }

  findOne(id: number):Promise<User> {
    return this.userModel.findOne({where: {id},include:[Post]})
  }

  async update(id: number, updateUserDto: UpdateUserDto):Promise<User> {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await user.update(updateUserDto);
    return user;
  }

  async remove(id: number):Promise<void> {
    const user = await this.userModel.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    await user.destroy();
  }
}
