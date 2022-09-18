import { Injectable } from '@nestjs/common';
import { CreatePostLikeInput } from './dto/create-post-like.input';
import { UpdatePostLikeInput } from './dto/update-post-like.input';

@Injectable()
export class PostLikeService {
  create(createPostLikeInput: CreatePostLikeInput) {
    return 'This action adds a new postLike';
  }

  findAll() {
    return `This action returns all postLike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postLike`;
  }

  update(id: number, updatePostLikeInput: UpdatePostLikeInput) {
    return `This action updates a #${id} postLike`;
  }

  remove(id: number) {
    return `This action removes a #${id} postLike`;
  }
}
