import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity('friendship')
@ObjectType()
export class Friendship {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @JoinColumn({name: 'profile_request'})
  @ManyToOne(
    () => User,
    User => User.id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  profile_request: number

  @JoinColumn({name: 'profile_accept'})
  @ManyToOne(
    () => User,
    User => User.id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  profile_accept: number
}
