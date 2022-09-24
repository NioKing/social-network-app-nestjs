import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostLikeService } from './post-like.service';
import { PostLike } from './entities/post-like.entity';
import { CreatePostLikeInput } from './dto/create-post-like.input';
import { UpdatePostLikeInput } from './dto/update-post-like.input';

@Resolver(() => PostLike)
export class PostLikeResolver {
  constructor(private readonly postLikeService: PostLikeService) {}

  @Mutation(() => PostLike)
  createPostLike(@Args('createPostLikeInput') createPostLikeInput: CreatePostLikeInput) {
    return this.postLikeService.create(createPostLikeInput);
  }

  @Query(() => [PostLike], { name: 'likes' })
  findAll() {
    return this.postLikeService.findAll();
  }

  @Query(() => PostLike, { name: 'postLike' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postLikeService.findOne(id);
  }

  @Mutation(() => PostLike)
  updatePostLike(@Args('updatePostLikeInput') updatePostLikeInput: UpdatePostLikeInput) {
    return this.postLikeService.update(updatePostLikeInput.id, updatePostLikeInput);
  }

  @Mutation(() => Boolean)
  async removePostLike(@Args('id', { type: () => Int }) id: number) {
    await this.postLikeService.remove(id);
    return true
  }
}
