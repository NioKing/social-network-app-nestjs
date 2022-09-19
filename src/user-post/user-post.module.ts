import { Module } from '@nestjs/common';
import { UserPostService } from './user-post.service';
import { UserPostResolver } from './user-post.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPost } from './entities/user-post.entity';

@Module({
  providers: [UserPostResolver, UserPostService],
  exports: [UserPostService],
  imports: [TypeOrmModule.forFeature([UserPost])]
})
export class UserPostModule {}
