import { Column, ForeignKey, Model, Table, BelongsTo, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { User } from 'src/user/entities/user.model';

@Table
export class Post extends Model<Post> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  title: string;

  @Column
  content: string;

  @ForeignKey(() => User)
  @Column
  UserId: number;

  @BelongsTo(() => User)
  user: User;
}
