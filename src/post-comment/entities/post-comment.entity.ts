import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from '../../user-post/entities/user-post.entity';


@Entity('post_comment')
@ObjectType()
export class PostComment {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column({name: 'post_id'})
  @ManyToOne(() => UserPost,
    UserPost => UserPost.id,
    {onDelete: 'CASCADE'}
  )
  @JoinColumn({name: 'post_id'})
  @Field(() => Int)
  post_id: number

  @Column({type: 'int'})
  @JoinColumn({ name: 'profile_id'})
  @ManyToOne(
    () => User,
    User => User.id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  profile_id: number

  @Column({length: 500, type: 'varchar'})
  @Field()
  comment_text: string

  @CreateDateColumn({type: 'date'})
  @Field(() => String)
  created_time: Date
}
