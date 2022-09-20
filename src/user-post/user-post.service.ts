import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCommentService } from '../post-comment/post-comment.service';
import { Repository } from 'typeorm';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';
import { UserPost } from './entities/user-post.entity';
import { PostComment } from '../post-comment/entities/post-comment.entity';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPost) private userPostRepo: Repository<UserPost>,
    private readonly postCommentService: PostCommentService
  ){}

  async create(createUserPostInput: CreateUserPostInput): Promise<UserPost> {
    let newUser = this.userPostRepo.create(createUserPostInput)
    return await this.userPostRepo.save(newUser)
  }

  async findAll(): Promise<UserPost[]> {
    return await this.userPostRepo.find()
  }

  async findOne(id: number) {
    return await this.userPostRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateUserPostInput: UpdateUserPostInput) {
    return `This action updates a #${id} userPost`;
  }

  async remove(id: number): Promise<string> {
    await this.userPostRepo.delete(id)
    return 'Post deleted'
  }

  async getComments(postId: number): Promise<PostComment[]> {
    let comments = await this.postCommentService.findAll()
    let filteredComments = comments.filter(comment => comment.post_id === postId)
    return filteredComments
  }
}
