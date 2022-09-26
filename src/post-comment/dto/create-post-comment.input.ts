import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreatePostCommentInput {
  @Field(() => Int)
  @IsInt()
  post_id: number
  
  @Field(() => Int)
  @IsInt()
  profile_id: number
  
  @Field()
  @IsString()
  @MaxLength(500, {message: 'Maximum 500 characters'})
  comment_text: string
}
