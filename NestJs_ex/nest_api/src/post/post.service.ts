import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './entities/post.model';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post)
    private postModel: typeof Post
  ){}
  async create(createPostDto: CreatePostDto):Promise<Post>{
    try{
      const post = await this.postModel.create(createPostDto);
      return post;
    }catch(erorr){
      throw new BadRequestException('Failed to create post!!!');
    }
  }

  findAll():Promise<Post[]> {
    return this.postModel.findAll();
  }

  findOne(id: number):Promise<Post> {
    return this.postModel.findOne({where: {id}})
  }

  async update(id: number, updatePostDto: UpdatePostDto):Promise<Post> {
    const post = await this.postModel.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    await post.update(updatePostDto);
    return post;
  }

  async remove(id: number):Promise<void> {
    const post = await this.postModel.findOne({ where: { id } });
    if (!post) {
      throw new NotFoundException(`Post with id ${id} not found`);
    }
    await post.destroy();
  }
}
