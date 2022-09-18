import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('post_like')
@ObjectType()
export class PostLike {
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
  @Field(() => Date)
  created_time: Date
}
