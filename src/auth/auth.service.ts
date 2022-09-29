import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { UserService } from '../user/user.service';


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async validateUser(email: string, password: string) {
        const user = await this.userService.findUserByEmail(email)
        if(user && user.password === password) {
            const {password, ...result} = user
            return result
        }
        return null
    }

    async login(user: User) {
        const { password, ...result } = user
        return {
            access_token: this.jwtService.sign({emal: user.email, sub: user.id})
        }
    }

}
