import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class CreateFriendshipInput {
  @Field(() => Int)
  @IsInt()
  profile_request: number

  @IsInt()
  @Field(() => Int)
  profile_accept: number
}
