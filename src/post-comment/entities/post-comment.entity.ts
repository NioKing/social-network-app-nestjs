import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('post_comment')
@ObjectType()
export class PostComment {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => Int)
  post_id: number

  @Column()
  @Field(() => Int)
  profile_id: number

  @Column()
  @Field()
  comment_text: string

  @Column()
  @Field(() => Date)
  created_time: Date
}
