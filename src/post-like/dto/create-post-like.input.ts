import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostLikeInput {
  @Field(() => Int)
  post_id: number

  @Field(() => Int)
  profile_id: number
}
