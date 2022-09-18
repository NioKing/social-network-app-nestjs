import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number

  @Column()
  @Field()
  email: string

  @Column()
  @Field()
  password: string

  @Column()
  @Field()
  country: string

  @Column(() => Date)
  @Field()
  date_of_birth: Date
}
