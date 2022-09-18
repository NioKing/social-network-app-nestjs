import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostCommentService } from './post-comment.service';
import { PostComment } from './entities/post-comment.entity';
import { CreatePostCommentInput } from './dto/create-post-comment.input';
import { UpdatePostCommentInput } from './dto/update-post-comment.input';

@Resolver(() => PostComment)
export class PostCommentResolver {
  constructor(private readonly postCommentService: PostCommentService) {}

  @Mutation(() => PostComment)
  createPostComment(@Args('createPostCommentInput') createPostCommentInput: CreatePostCommentInput) {
    return this.postCommentService.create(createPostCommentInput);
  }

  @Query(() => [PostComment], { name: 'postComment' })
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

  @Mutation(() => PostComment)
  removePostComment(@Args('id', { type: () => Int }) id: number) {
    return this.postCommentService.remove(id);
  }
}
