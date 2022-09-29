import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

@InputType()
export class CreateUserPostInput {
  @Field(() => Int, {nullable: true})
  @IsInt()
  @IsOptional()
  profile_id: number

  @Field()
  @IsString()
  @MaxLength(500, {message: 'Maximum 500 characters'})
  written_text: string

  @Field({nullable: true})
  @IsUrl()
  @IsOptional()
  media_url: string


}
