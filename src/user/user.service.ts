import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from '../user-post/entities/user-post.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserPostService } from '../user-post/user-post.service';
import { PostComment } from '../post-comment/entities/post-comment.entity';
import { PostCommentService } from '../post-comment/post-comment.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private userPostService: UserPostService,
    private userCommentService: PostCommentService
  ){}

  async create(createUserInput: CreateUserInput): Promise<User> {
    let newUser = this.userRepo.create(createUserInput)
    return await this.userRepo.save(newUser)
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find()
  }

  async findOne(id: number): Promise<User> {
    return this.userRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    let user: User = await this.userRepo.findOneOrFail({where: {id: id}})
    user.email = updateUserInput.email
    user.password = updateUserInput.password
    return this.userRepo.save(user)
  }

  async remove(id: number) {
    return this.userRepo.delete(id)
  }

  async getPosts(profile_id: number): Promise<UserPost[]> {
    let posts = await this.userPostService.findAll()
    let filteredPosts = posts.filter(post => post.profile_id === profile_id)
    return filteredPosts
  }

  async getComments(profile_id: number): Promise<PostComment[]> {
    let comments = await this.userCommentService.findAll()
    let filteredPosts = comments.filter(comment => comment.profile_id === profile_id)
    return filteredPosts
  }
}
