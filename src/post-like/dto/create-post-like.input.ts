import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostLikeInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
