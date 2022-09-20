import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostResolver } from './user-post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from './entities/user-post.entity';
import { PostCommentModule } from '../post-comment/post-comment.module';

@Module({
  providers: [UserPostResolver, UserPostService],
  exports: [UserPostService],
  imports: [TypeOrmModule.forFeature([UserPost]), PostCommentModule]
})
export class UserPostModule {}
