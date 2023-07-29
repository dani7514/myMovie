import { Controller, Post, UseGuards,Request, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
    constructor(private readonly authservice: AuthService){}
    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req: any): Promise<any>{
        return await this.authservice.login(req.user._doc);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    async getProfile(@Request() req: any): Promise<any>{
        return  await req.user;
    }
    
}
