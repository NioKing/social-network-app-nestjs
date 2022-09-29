import { InputType, Int, Field } from '@nestjs/graphql';
import { IsInt, IsOptional } from 'class-validator';

@InputType()
export class CreatePostLikeInput {
  @Field(() => Int)
  @IsInt()
  post_id: number

  @Field(() => Int, {nullable: true})
  @IsInt()
  @IsOptional()
  profile_id: number
}
