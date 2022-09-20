import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostComment } from '../../post-comment/entities/post-comment.entity';


@Entity('user_post')
@ObjectType()
export class UserPost {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  @OneToMany(() => PostComment,
    PostComment => PostComment.post_id
  )
  id: number

  @ManyToOne(
    () => User,
    User => User.id,
    {onDelete: 'CASCADE'}
  )
  @Column({name: 'profile_id'})
  @Field(() => Int)
  profile_id: number

  @Column({length: 500, type: 'varchar'})
  @Field()
  written_text: string

  @Column({nullable: true, type: 'varchar'})
  @Field({nullable: true})
  media_url: string

  @CreateDateColumn({type: 'date'})
  @Field(() => Date)
  created_at: Date
}
