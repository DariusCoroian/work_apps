import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  tasks = [
    {
      id:1,
      title:'title1',
      description:'desc1',
      status:'done'
    },
    {
      id:2,
      title:'title2',
      description:'desc2',
      status:'pending'
    },
    {
      id:3,
      title:'title3',
      description:'desc3',
      status:'pending'
    }
]
  constructor(){
  }
  create(createTaskDto: CreateTaskDto) {
    const taskDto = new Task(createTaskDto.id,createTaskDto.title,createTaskDto.description);
    taskDto.status='pending';
    this.tasks.push(taskDto);
  }

  findAll() {
    return this.tasks
  }

  findOne(id: number) {
    const task = this.tasks.filter(task => task.id==id)
    if(task.length == 0){
      throw new Error('there is no task with this id!!!');
    }
    return task;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex(task => task.id==id);
    if(taskIndex == -1){
      throw Error('didnt find the task you re asking for')
    }
    this.tasks[taskIndex]=updateTaskDto;
    return 'task updated';
  }

  remove(id: number) {
    const taskIndex = this.tasks.findIndex(task => task.id==id);
    if(taskIndex == -1){
      throw Error('didnt find the task you re asking for')
    }
    this.tasks.splice(taskIndex,1);
    return 'task deleted succesfully';
  }
}
