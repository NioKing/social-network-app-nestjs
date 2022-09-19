import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserPost } from '../../user-post/entities/user-post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
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
}
