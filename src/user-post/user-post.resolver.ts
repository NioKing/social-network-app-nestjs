import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { UserPostService } from './user-post.service';
import { UserPost } from './entities/user-post.entity';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';
import { PostComment } from '../post-comment/entities/post-comment.entity';
import { PostLike } from '../post-like/entities/post-like.entity';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { currentUser } from '../auth/current-user.decorator';

@Resolver(() => UserPost)
export class UserPostResolver {
  constructor(private readonly userPostService: UserPostService) {}

  @Mutation(() => UserPost)
  @UseGuards(JwtAuthGuard)
  createUserPost(@Args('createUserPostInput') createUserPostInput: CreateUserPostInput, @currentUser() user: any) {
    return this.userPostService.create({
      media_url: createUserPostInput.media_url,
      written_text: createUserPostInput.written_text,
      profile_id: user.userId
    });
  }

  @Query(() => [UserPost], { name: 'posts' })
  findAll() {
    return this.userPostService.findAll();
  }

  @Query(() => UserPost, { name: 'userPost' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userPostService.findOne(id);
  }

  @Mutation(() => UserPost)
  @UseGuards(JwtAuthGuard)
  updateUserPost(@Args('updateUserPostInput') updateUserPostInput: UpdateUserPostInput) {
    return this.userPostService.update(updateUserPostInput.id, updateUserPostInput);
  }

  @Mutation(() => Boolean)
  async removeUserPost(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    await this.userPostService.remove(id);
    return true
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
