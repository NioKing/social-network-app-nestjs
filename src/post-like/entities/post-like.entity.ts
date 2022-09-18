import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from '../../user-post/entities/user-post.entity';


@Entity('post_like')
@ObjectType()
export class PostLike {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @JoinColumn({name: 'post_id'})
  @ManyToOne(() => UserPost,
    UserPost => UserPost.id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  post_id: number

  @JoinColumn({name: 'profile_id'})
  @ManyToOne(
    () => User,
    User => User.id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  profile_id: number

  @CreateDateColumn({type: 'date'})
  @Field(() => Date)
  created_time: Date
}
