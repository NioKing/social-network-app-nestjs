import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class CreatePostLikeInput {
  @Field(() => Int)
  @IsInt()
  post_id: number

  @Field(() => Int)
  @IsInt()
  profile_id: number
}
