import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number

  @Field({nullable: true})
  email: string;

  @Field({nullable: true})
  password: string;

  @Field({nullable: true})
  country: string;
}
