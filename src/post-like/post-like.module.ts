import { Module } from '@nestjs/common';
import { PostLikeService } from './post-like.service';
import { PostLikeResolver } from './post-like.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from './entities/post-like.entity';

@Module({
  providers: [PostLikeResolver, PostLikeService],
  imports: [TypeOrmModule.forFeature([PostLike])],
  exports: [PostLikeService]
})
export class PostLikeModule {}
