import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeResolver } from './post-like.resolver';

@Module({
  providers: [PostLikeResolver, PostLikeService]
})
export class PostLikeModule {}
