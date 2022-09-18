import { Injectable } from '@nestjs/common';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { UpdateFriendshipInput } from './dto/update-friendship.input';

@Injectable()
export class FriendshipService {
  create(createFriendshipInput: CreateFriendshipInput) {
    return 'This action adds a new friendship';
  }

  findAll() {
    return `This action returns all friendship`;
  }

  findOne(id: number) {
    return `This action returns a #${id} friendship`;
  }

  update(id: number, updateFriendshipInput: UpdateFriendshipInput) {
    return `This action updates a #${id} friendship`;
  }

  remove(id: number) {
    return `This action removes a #${id} friendship`;
  }
}
