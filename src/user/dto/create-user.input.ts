import { InputType, Int, Field } from '@nestjs/graphql';
import { IsDateString, IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString({message: 'Check if email is correct'})
  @IsEmail()
  email: string

  @Field()
  @IsString()
  @MinLength(6, {message: 'Minimum 6 characters'})
  @MaxLength(30, {message: 'Maximum 30 characters'})
  password: string

  @Field()
  @IsString()
  country: string

  @Field(() => String, {nullable: true})
  @IsDateString()
  @IsOptional()
  date_of_birth: Date
}
