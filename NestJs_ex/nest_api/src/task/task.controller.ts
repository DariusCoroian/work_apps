import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, HttpStatus } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { FindOneParams } from './dto/find-one-params';
import { Response } from 'express';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findOne(@Res()response:Response, @Param() params: FindOneParams) {
    try{
      response.status(HttpStatus.OK).send(this.taskService.findOne(params.id));
    }catch(Error){
      //  response.status(404).send({status:404, message: 'there is no task with that id !!!'});
      response.status(HttpStatus.BAD_REQUEST).send();
    }
    
  }

  @Put(':id')
  update(@Param() params: FindOneParams, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(params.id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param() params: FindOneParams) {
    return this.taskService.remove(params.id);
  }
}
