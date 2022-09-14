import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserPostInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
