import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';
import { UserPost } from './entities/user-post.entity';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPost) private userPostRepo: Repository<UserPost>
  ){}

  async create(createUserPostInput: CreateUserPostInput): Promise<UserPost> {
    const newUser = this.userPostRepo.create(createUserPostInput)
    return await this.userPostRepo.save(newUser)
  }

  async findAll() {
    return this.userPostRepo.find()
  }

  async findOne(id: number) {
    return this.userPostRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateUserPostInput: UpdateUserPostInput) {
    return `This action updates a #${id} userPost`;
  }

  async remove(id: number): Promise<String> {
    await this.userPostRepo.delete(id)
    return 'Post deleted'
  }
}
