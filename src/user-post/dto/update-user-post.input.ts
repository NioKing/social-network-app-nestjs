import { CreateUserPostInput } from './create-user-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserPostInput extends PartialType(CreateUserPostInput) {
  @Field(() => Int)
  @IsInt()
  @IsOptional()
  id: number;

  @Field({nullable: true})
  @IsString()
  written_text: string;

  @Field({nullable: true})
  @IsString()
  media_url: string;
}
