import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreateFriendshipInput {
  @Field(() => Int, {nullable: true})
  @IsInt()
  @IsOptional()
  profile_request: number

  @IsInt()
  @IsOptional()
  @Field(() => Int, {nullable: true})
  profile_accept: number
}
