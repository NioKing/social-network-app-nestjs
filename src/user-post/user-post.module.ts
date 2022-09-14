import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostResolver } from './user-post.resolver';

@Module({
  providers: [UserPostResolver, UserPostService]
})
export class UserPostModule {}
