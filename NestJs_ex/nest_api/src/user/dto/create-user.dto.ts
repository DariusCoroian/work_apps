import { IsEmail, IsInt, IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    readonly name:string;
    @IsNotEmpty()
    @IsEmail()
    readonly email:string;
}
