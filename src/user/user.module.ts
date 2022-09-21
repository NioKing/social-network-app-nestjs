import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserPostModule } from '../user-post/user-post.module';
import { PostCommentModule } from '../post-comment/post-comment.module';

@Module({
  providers: [UserResolver, UserService],
  imports: [TypeOrmModule.forFeature([User]), UserPostModule, PostCommentModule]
})
export class UserModule {}
