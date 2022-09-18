import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostCommentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
