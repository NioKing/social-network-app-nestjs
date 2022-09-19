import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  email: string

  @Field()
  password: string

  @Field()
  country: string

  @Field(() => Date, {nullable: true})
  date_of_birth: Date
}
