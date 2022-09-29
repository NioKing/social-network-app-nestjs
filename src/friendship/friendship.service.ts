import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFriendshipInput } from './dto/create-friendship.input';
import { Friendship } from './entities/friendship.entity';

@Injectable()
export class FriendshipService {

  constructor(
    @InjectRepository(Friendship) private friendShipRepo: Repository<Friendship>
  ){}
  
  async create(createFriendshipInput: CreateFriendshipInput): Promise<Friendship> {
    if(createFriendshipInput.profile_request === createFriendshipInput.profile_accept) {
      throw new InternalServerErrorException('Failed to create friendship')
    }
    let newFriendShip = this.friendShipRepo.create(createFriendshipInput)
    return this.friendShipRepo.save(newFriendShip)
  }

  async findAll(): Promise<Friendship[]> {
    return this.friendShipRepo.find()
  }

  async findOne(id: number): Promise<Friendship> {
    return this.friendShipRepo.findOneOrFail({where: {id: id}})
  }

  async remove(id: number) {
   return this.friendShipRepo.delete(id)
  }
}
