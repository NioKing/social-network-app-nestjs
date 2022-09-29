import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostLikeInput } from './dto/create-post-like.input';
import { UpdatePostLikeInput } from './dto/update-post-like.input';
import { PostLike } from './entities/post-like.entity';

@Injectable()
export class PostLikeService {

  constructor(
    @InjectRepository(PostLike) private postLikeRepo: Repository<PostLike>
  ){}

  async create(createPostLikeInput: CreatePostLikeInput): Promise<PostLike> {
    let newLike = this.postLikeRepo.create(createPostLikeInput)
    return this.postLikeRepo.save(newLike)
  }

  async findAll(): Promise<PostLike[]> {
    return this.postLikeRepo.find()
  }

  async findOne(id: number): Promise<PostLike> {
    return this.postLikeRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updatePostLikeInput: UpdatePostLikeInput) {
    return `This action updates a #${id} postLike`;
  }

  async remove(id: number) {
    return this.postLikeRepo.delete(id)
  }
}
