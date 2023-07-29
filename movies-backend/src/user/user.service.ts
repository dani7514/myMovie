import { Injectable } from '@nestjs/common';
import { User } from './schema/user.schema';
import { userRepository } from './user.repository';
import { users } from './userDto/updateUser.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
    constructor(private readonly userrepository: userRepository){}
    
    async getUser(username: string): Promise<User>{
        return await this.userrepository.findone({username});
    }
    async getUsers(): Promise<User[]>{
        return await this.userrepository.find({});
    }

    async create(name: string, username: string, password: string): Promise<User>{
        return this.userrepository.create({
            userId: uuidv4(),
            name,
            username,
            password,
        })
    }

    async update(userId: string, user: users): Promise<User>{
        return this.userrepository.findoneAndUpdate({userId}, user);
    }

    async removeUser(userId: string): Promise<User>{
        return await this.userrepository.delete({userId});
    }
}


