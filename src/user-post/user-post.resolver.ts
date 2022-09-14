import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserPostService } from './user-post.service';
import { UserPost } from './entities/user-post.entity';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';

@Resolver(() => UserPost)
export class UserPostResolver {
  constructor(private readonly userPostService: UserPostService) {}

  @Mutation(() => UserPost)
  createUserPost(@Args('createUserPostInput') createUserPostInput: CreateUserPostInput) {
    return this.userPostService.create(createUserPostInput);
  }

  @Query(() => [UserPost], { name: 'userPost' })
  findAll() {
    return this.userPostService.findAll();
  }

  @Query(() => UserPost, { name: 'userPost' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userPostService.findOne(id);
  }

  @Mutation(() => UserPost)
  updateUserPost(@Args('updateUserPostInput') updateUserPostInput: UpdateUserPostInput) {
    return this.userPostService.update(updateUserPostInput.id, updateUserPostInput);
  }

  @Mutation(() => UserPost)
  removeUserPost(@Args('id', { type: () => Int }) id: number) {
    return this.userPostService.remove(id);
  }
}
