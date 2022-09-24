import { Module } from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { FriendshipResolver } from './friendship.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friendship } from './entities/friendship.entity';

@Module({
  providers: [FriendshipResolver, FriendshipService],
  imports: [TypeOrmModule.forFeature([Friendship])],
  exports: [FriendshipService]
})
export class FriendshipModule {}
