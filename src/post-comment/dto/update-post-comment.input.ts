import { CreatePostCommentInput } from './create-post-comment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';

@InputType()
export class UpdatePostCommentInput extends PartialType(CreatePostCommentInput) {
  @Field(() => Int)
  @IsInt()
  id: number;

  @Field()
  @IsString()
  comment_text: string;
}
