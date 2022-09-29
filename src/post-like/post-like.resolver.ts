import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostLikeService } from './post-like.service';
import { PostLike } from './entities/post-like.entity';
import { CreatePostLikeInput } from './dto/create-post-like.input';
import { UpdatePostLikeInput } from './dto/update-post-like.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { currentUser } from '../auth/current-user.decorator';

@Resolver(() => PostLike)
export class PostLikeResolver {
  constructor(private readonly postLikeService: PostLikeService) {}

  @Mutation(() => PostLike)
  @UseGuards(JwtAuthGuard)
  createPostLike(@Args('createPostLikeInput') createPostLikeInput: CreatePostLikeInput, @currentUser() user: any) {
    return this.postLikeService.create({
      profile_id: user.userId,
      post_id: createPostLikeInput.post_id
    });
  }

  @Query(() => [PostLike], { name: 'likes' })
  findAll() {
    return this.postLikeService.findAll();
  }

  @Query(() => PostLike, { name: 'postLike' })
  @UseGuards(JwtAuthGuard)
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postLikeService.findOne(id);
  }

  @Mutation(() => PostLike)
  @UseGuards(JwtAuthGuard)
  updatePostLike(@Args('updatePostLikeInput') updatePostLikeInput: UpdatePostLikeInput, @currentUser() user: any) {
    return this.postLikeService.update(user.userId, updatePostLikeInput);
  }

  @Mutation(() => Boolean)
  async removePostLike(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    await this.postLikeService.remove(id);
    return true
  }
}
