import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostCommentService } from './post-comment.service';
import { PostComment } from './entities/post-comment.entity';
import { CreatePostCommentInput } from './dto/create-post-comment.input';
import { UpdatePostCommentInput } from './dto/update-post-comment.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { currentUser } from '../auth/current-user.decorator';

@Resolver(() => PostComment)
export class PostCommentResolver {
  constructor(private readonly postCommentService: PostCommentService) {}

  @Mutation(() => PostComment)
  @UseGuards(JwtAuthGuard)
  createPostComment(@Args('createPostCommentInput') createPostCommentInput: CreatePostCommentInput, @currentUser() user: any) {
    return this.postCommentService.create({
      profile_id: user.userId,
      comment_text: createPostCommentInput.comment_text,
      post_id: createPostCommentInput.post_id
    });
  }

  @Query(() => [PostComment], { name: 'comments' })
  findAll() {
    return this.postCommentService.findAll();
  }

  @Query(() => PostComment, { name: 'postComment' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.postCommentService.findOne(id);
  }

  @Mutation(() => PostComment)
  updatePostComment(@Args('updatePostCommentInput') updatePostCommentInput: UpdatePostCommentInput) {
    return this.postCommentService.update(updatePostCommentInput.id, updatePostCommentInput);
  }

  @Mutation(() => Boolean)
  async removePostComment(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    await this.postCommentService.remove(id);
    return true
  }
}
