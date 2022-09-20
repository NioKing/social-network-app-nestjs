import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostCommentInput {
  @Field(() => Int)
  post_id: number

  @Field(() => Int)
  profile_id: number

  @Field()
  comment_text: string
}
