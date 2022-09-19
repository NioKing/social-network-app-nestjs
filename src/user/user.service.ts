import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPost } from '../user-post/entities/user-post.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserPostService } from '../user-post/user-post.service';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
    private userPostService: UserPostService
  ){}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepo.create(createUserInput)
    return this.userRepo.save(newUser)
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find()
  }

  async findOne(id: number): Promise<User> {
    return this.userRepo.findOneOrFail({where: {id: id}})
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    // let user = await this.userRepo.find({where: {id: id}})
    return `User ${id} has been updated!` 
  }

  async remove(id: number) {
    return this.userRepo.delete(id)
  }

  async getPosts(profile_id: number): Promise<UserPost[]> {
    let posts = await this.userPostService.findAll()
    let filteredPosts = posts.filter(post => post.profile_id === profile_id)
    return filteredPosts
  }
}
