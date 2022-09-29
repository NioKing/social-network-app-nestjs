import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, {nullable: true})
  @IsInt()
  @IsOptional()
  id: number

  @Field({nullable: true})
  @IsEmail()
  email: string;

  @Field({nullable: true})
  @IsString()
  @MinLength(6, {message: 'Minimum 6 characters'})
  @MaxLength(30, {message: 'Maximum 30 characters'})
  password: string;
}
