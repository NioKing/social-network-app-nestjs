import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';


@Entity('friendship')
@ObjectType()
export class Friendship {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field(() => Int)
  profile_request: number

  @Column()
  @Field(() => Int)
  profile_accept: number
}
