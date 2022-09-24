import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserPostService } from './user-post.service';
import { UserPost } from './entities/user-post.entity';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';
import { PostComment } from '../post-comment/entities/post-comment.entity';
import { PostLike } from '../post-like/entities/post-like.entity';

@Resolver(() => UserPost)
export class UserPostResolver {
  constructor(private readonly userPostService: UserPostService) {}

  @Mutation(() => UserPost)
  async createUserPost(@Args('createUserPostInput') createUserPostInput: CreateUserPostInput) {
    return this.userPostService.create(createUserPostInput);
  }

  @Query(() => [UserPost], { name: 'posts' })
  async findAll() {
    return this.userPostService.findAll();
  }

  @Query(() => UserPost, { name: 'userPost' })
  async findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userPostService.findOne(id);
  }

  @Mutation(() => UserPost)
  async updateUserPost(@Args('updateUserPostInput') updateUserPostInput: UpdateUserPostInput) {
    return this.userPostService.update(updateUserPostInput.id, updateUserPostInput);
  }

  @Mutation(() => UserPost)
  async removeUserPost(@Args('id', { type: () => Int }) id: number) {
    await this.userPostService.remove(id);
  }

  @ResolveField(() => [PostComment])
  comments(@Parent() userPost: UserPost) {
    return this.userPostService.getComments(userPost.id)
  }

  @ResolveField(() => [PostLike])
  likes(@Parent() userPost: UserPost) {
    return this.userPostService.getLikes(userPost.id)
  }

}
