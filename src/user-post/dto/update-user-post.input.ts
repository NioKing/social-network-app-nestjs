import { CreateUserPostInput } from './create-user-post.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserPostInput extends PartialType(CreateUserPostInput) {
  @Field(() => Int)
  id: number;

  @Field({nullable: true})
  written_text: string;

  @Field({nullable: true})
  media_url: string;
}
