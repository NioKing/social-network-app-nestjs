import { Module } from '@nestjs/common';
import { PostCommentService } from './post-comment.service';
import { PostCommentResolver } from './post-comment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostComment } from './entities/post-comment.entity';

@Module({
  providers: [PostCommentResolver, PostCommentService],
  imports: [TypeOrmModule.forFeature([PostComment])],
  exports: [PostCommentService]
})
export class PostCommentModule {}
