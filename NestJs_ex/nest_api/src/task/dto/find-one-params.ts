import { Transform } from 'class-transformer';
import { IsNotEmpty, IsInt } from 'class-validator';

export class FindOneParams {
    @IsNotEmpty()
    @IsInt()
    @Transform(({ value }) => parseInt(value, 10))
    id: number;
}
