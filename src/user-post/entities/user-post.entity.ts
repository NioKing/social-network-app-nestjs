import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('user_post')
@ObjectType()
export class UserPost {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => Int)
  profile_id: number

  @Column()
  @Field()
  written_text: string

  @Column()
  @Field()
  media_url: string

  @Column()
  @Field(() => Date)
  created_at: Date
}
