import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { FindOneParams } from 'src/task/dto/find-one-params';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return this.postService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params: FindOneParams, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(params.id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param() params: FindOneParams) {
    return this.postService.remove(params.id);
  }
}
