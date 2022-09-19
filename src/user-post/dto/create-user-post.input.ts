import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserPostInput {
  @Field(() => Int)
  profile_id: number

  @Field()
  written_text: string

  @Field({nullable: true})
  media_url: string


}
