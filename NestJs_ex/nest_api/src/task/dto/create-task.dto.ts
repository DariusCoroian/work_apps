import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
    @IsNotEmpty()
    id:number;
    @IsNotEmpty()
    title:string;
    @IsNotEmpty()
    description:string;
}
