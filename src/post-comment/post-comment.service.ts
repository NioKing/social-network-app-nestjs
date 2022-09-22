import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostCommentInput } from './dto/create-post-comment.input';
import { UpdatePostCommentInput } from './dto/update-post-comment.input';
import { PostComment } from './entities/post-comment.entity';

@Injectable()
export class PostCommentService {

  constructor(
    @InjectRepository(PostComment) private postCommentRepo: Repository<PostComment>
  ){}

  async create(createPostCommentInput: CreatePostCommentInput): Promise<PostComment> {
    let newComment: PostComment = this.postCommentRepo.create(createPostCommentInput)
    return await this.postCommentRepo.save(newComment)
  }

  async findAll(): Promise<PostComment[]> {
    return await this.postCommentRepo.find()
  }

  async findOne(id: number): Promise<PostComment> {
    return await this.postCommentRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updatePostCommentInput: UpdatePostCommentInput): Promise<PostComment> {
    let comment = await this.postCommentRepo.findOneOrFail({where: {id: id}})
    comment.comment_text = updatePostCommentInput.comment_text
    return await this.postCommentRepo.save(comment)
  }

  async remove(id: number) {
    return await this.postCommentRepo.delete(id)
  }
}
