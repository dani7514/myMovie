import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/schema/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private readonly userservice: UserService
        , private readonly jwtservice: JwtService){}

    async validateUser(username: string, password:string): Promise<any>{
        const user= await this.userservice.getUser(username);
        if(user && user.username===username && user.password===password){
            const {password, ...result}=user;
            return result;
        }
        return null;
    }

    async login(user: any){
        const payload={username: user.username ,sub: user.userId};
        return await {
            message: 'login Successfull',
            access_token: this.jwtservice.sign(payload)
        };
    }
    
}
