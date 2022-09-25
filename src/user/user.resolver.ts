import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserPost } from '../user-post/entities/user-post.entity';
import { PostComment } from '../post-comment/entities/post-comment.entity';
import { PostLike } from '../post-like/entities/post-like.entity';
import { Friendship } from '../friendship/entities/friendship.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => Boolean)
  async removeUser(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    await this.userService.remove(id);
    return true
  }

  @ResolveField(() => [UserPost])
  posts(@Parent() user: User) {
    return this.userService.getPosts(user.id)
  }

  @ResolveField(() => [PostComment])
  user_comments(@Parent() user: User) {
    return this.userService.getComments(user.id)
  }

  @ResolveField(() => [PostLike])
  user_likes(@Parent() user: User) {
    return this.userService.getUserLikes(user.id)
  }

  @ResolveField(() => [Friendship])
  friends(@Parent() user: User) {
    return this.userService.getFriends(user.id)
  }

}
