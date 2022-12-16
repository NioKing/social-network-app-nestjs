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
    return this.postCommentRepo.save(newComment)
  }

  async findAll(): Promise<PostComment[]> {
    return this.postCommentRepo.find()
  }

  async findCommentsByUser(id: number): Promise<PostComment[]> {
    return this.postCommentRepo.find({where: {profile_id: id}})
  }

  async findOne(id: number): Promise<PostComment> {
    return this.postCommentRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updatePostCommentInput: UpdatePostCommentInput): Promise<PostComment> {
    let comment = await this.postCommentRepo.findOneOrFail({where: {id: id}})
    comment.comment_text = updatePostCommentInput.comment_text
    return this.postCommentRepo.save(comment)
  }

  async remove(id: number) {
    return this.postCommentRepo.delete(id)
  }
}
