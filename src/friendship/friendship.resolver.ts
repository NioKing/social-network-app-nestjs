import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FriendshipService } from './friendship.service';
import { Friendship } from './entities/friendship.entity';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { currentUser } from '../auth/current-user.decorator';

@Resolver(() => Friendship)
export class FriendshipResolver {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Mutation(() => Friendship)
  @UseGuards(JwtAuthGuard)
  acceptFriendship(@Args('createFriendshipInput') createFriendshipInput: CreateFriendshipInput, @currentUser() user: any) {
    return this.friendshipService.create({
      profile_accept: user.userId,
      profile_request: createFriendshipInput.profile_request
    });
  }

  @Mutation(() => Friendship)
  @UseGuards(JwtAuthGuard)
  requestFriendsip(@Args('createFriendshipInput') createFriendshipInput: CreateFriendshipInput, @currentUser() user: any) {
    return this.friendshipService.create({
      profile_accept: createFriendshipInput.profile_accept,
      profile_request: user.userId
    })
  }

  @Query(() => [Friendship], { name: 'friends' })
  findAll() {
    return this.friendshipService.findAll();
  }

  @Query(() => Friendship, { name: 'friendship' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.friendshipService.findOne(id);
  }

  @Mutation(() => Boolean)
  async removeFriendship(@Args('id', { type: () => Int }) id: number): Promise<Boolean> {
    await this.friendshipService.remove(id);
    return true
  }
}
