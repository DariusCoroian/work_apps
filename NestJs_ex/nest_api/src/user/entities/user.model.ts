import { AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Post } from 'src/post/entities/post.model';
@Table
export class User extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column
    id:number;
    @Column
    name:string;
    @Column
    email:string;
    @HasMany(() => Post)
    posts: Post[];
}
