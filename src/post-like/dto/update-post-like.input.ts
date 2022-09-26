import { CreatePostLikeInput } from './create-post-like.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class UpdatePostLikeInput extends PartialType(CreatePostLikeInput) {
  @Field(() => Int)
  @IsInt()
  id: number;
}
