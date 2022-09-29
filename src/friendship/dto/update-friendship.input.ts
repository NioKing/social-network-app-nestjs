import { CreateFriendshipInput } from './create-friendship.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFriendshipInput extends PartialType(CreateFriendshipInput) {
  @Field(() => Int)
  id: number;
}
