import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFriendshipInput {
  @Field(() => Int)
  profile_request: number

  @Field(() => Int)
  profile_accept: number
}
