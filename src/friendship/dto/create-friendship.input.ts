import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFriendshipInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
