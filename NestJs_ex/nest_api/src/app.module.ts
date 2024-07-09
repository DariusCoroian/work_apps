import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { User } from './user/entities/user.model';
import {Post} from './post/entities/post.model'
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [TaskModule,
    SequelizeModule.forRoot({
      dialect:'postgres',
      host: 'localhost',
      port: 5432,
      password: 'darius',
      username: 'postgres',
      models: [User,Post],
      database: 'library',
      synchronize: true,
      }),
      UserModule,
      PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
