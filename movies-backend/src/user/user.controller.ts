import { Body, Controller, Get, Param, Patch, Post,Delete } from '@nestjs/common';
import { User } from './schema/user.schema';
import { UserService } from './user.service';
import { Users } from './userDto/createUser.dto';
import { users } from './userDto/updateUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userservice: UserService){}
    @Get(':username')
    async getUser(@Param('username') username: string): Promise<User>{
        return await this.userservice.getUser(username);
    }

    @Get()
    async getUsers(): Promise<User[]>{
        return await this.userservice.getUsers();
    }

    @Post()
    async create(@Body() user: Users ): Promise<User>{
        console.log(user.name, user.email);
        return await this.userservice.create(user.name, user.username, user.password,);
    }

    @Patch(':userId')
    async update(@Param('userId') userId: string, @Body() updateUser: users ): Promise<User>{
        return await this.userservice.update(userId, updateUser);
    }

    @Delete(':userId')
    async delete(@Param('userId') userId: string): Promise<User>{
        return await this.userservice.removeUser(userId);
    }
}
