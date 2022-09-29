import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCommentService } from '../post-comment/post-comment.service';
import { Repository } from 'typeorm';
import { CreateUserPostInput } from './dto/create-user-post.input';
import { UpdateUserPostInput } from './dto/update-user-post.input';
import { UserPost } from './entities/user-post.entity';
import { PostComment } from '../post-comment/entities/post-comment.entity';
import { PostLike } from '../post-like/entities/post-like.entity';
import { PostLikeService } from '../post-like/post-like.service';

@Injectable()
export class UserPostService {
  constructor(
    @InjectRepository(UserPost) private userPostRepo: Repository<UserPost>,
    private readonly postCommentService: PostCommentService,
    private readonly postLikeService: PostLikeService
  ){}

  async create(createUserPostInput: CreateUserPostInput): Promise<UserPost> {
    let newUser = this.userPostRepo.create(createUserPostInput)
    return this.userPostRepo.save(newUser)
  }

  async findAll(): Promise<UserPost[]> {
    return this.userPostRepo.find()
  }

  async findOne(id: number): Promise<UserPost> {
    return this.userPostRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateUserPostInput: UpdateUserPostInput): Promise<UserPost> {
    let post: UserPost = await this.userPostRepo.findOneOrFail({where: {id: id}})
    post.written_text = updateUserPostInput.written_text
    post.media_url = updateUserPostInput.media_url
    return this.userPostRepo.save(post)
  }

  async remove(id: number): Promise<string> {
    await this.userPostRepo.delete(id)
    return 'Post deleted'
  }

  async getComments(postId: number): Promise<PostComment[]> {
    let comments = await this.postCommentService.findAll()
    return comments.filter(comment => comment.post_id === postId)
  }

  async getLikes(postId: number): Promise<PostLike[]> {
    let likes = await this.postLikeService.findAll()
    return likes.filter(like => like.post_id === postId)
  }
}
