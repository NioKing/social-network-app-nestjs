import { Injectable } from '@nestjs/common';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';

@Injectable()
export class UserPostService {
  create(createUserPostInput: CreateUserPostInput) {
    return 'This action adds a new userPost';
  }

  findAll() {
    return `This action returns all userPost`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userPost`;
  }

  update(id: number, updateUserPostInput: UpdateUserPostInput) {
    return `This action updates a #${id} userPost`;
  }

  remove(id: number) {
    return `This action removes a #${id} userPost`;
  }
}
