import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserPost } from '../../user-post/entities/user-post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostComment } from '../../post-comment/entities/post-comment.entity';

@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn({type: 'int'})
  @OneToMany(
    () => UserPost,
    UserPost => UserPost.profile_id,
    {onDelete: 'CASCADE'}
  )
  @Field(() => Int)
  id: number

  @Column({unique: true, type: 'varchar'})
  @Field()
  email: string

  @Column({length: 25, type: 'varchar'})
  password: string

  @Column({type: 'varchar'})
  @Field()
  country: string

  @Column({type: 'date', nullable: true})
  @Field(() => Date)
  date_of_birth: Date

  @Field(() => [UserPost], {nullable: true})
  posts: UserPost[]

  @Field(() => [PostComment], {nullable: true})
  user_comments: PostComment[]
}
