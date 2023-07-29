import { Module } from '@nestjs/common';
import { User,userSchema } from './schema/user.schema';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userRepository } from './user.repository';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
  controllers: [UserController],
  providers: [UserService, userRepository],
  exports :[UserService],
})
export class UserModule {}
