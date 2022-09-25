import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FriendshipService } from './friendship.service';
import { Friendship } from './entities/friendship.entity';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { UpdateFriendshipInput } from './dto/update-friendship.input';

@Resolver(() => Friendship)
export class FriendshipResolver {
  constructor(private readonly friendshipService: FriendshipService) {}

  @Mutation(() => Friendship)
  createFriendship(@Args('createFriendshipInput') createFriendshipInput: CreateFriendshipInput) {
    return this.friendshipService.create(createFriendshipInput);
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
