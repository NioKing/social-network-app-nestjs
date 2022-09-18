import { Module } from '@nestjs/common';
import { FriendshipService } from './friendship.service';
import { FriendshipResolver } from './friendship.resolver';

@Module({
  providers: [FriendshipResolver, FriendshipService]
})
export class FriendshipModule {}
