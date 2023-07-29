import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from "mongoose";
import { User, userDocument } from "./schema/user.schema";

@Injectable()
export class userRepository{
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>){}
     
    async findone(userFilterQuery: FilterQuery<User>): Promise<User>{
        return await this.userModel.findOne(userFilterQuery);
    }
    async find(userFilterQuery: FilterQuery<User>): Promise<User[]>{
        return  await  this.userModel.find(userFilterQuery);
    }

    async create(user: User): Promise<User>{
        const userCreate= new this.userModel(user);
        return await userCreate.save() 
    }

    async findoneAndUpdate(userFilterQuery: FilterQuery<User>, user:Partial<User>): Promise<User>{
        return await this.userModel.findOneAndUpdate(userFilterQuery,user);
    }

    async delete(userFilterQuery: FilterQuery<User>) : Promise<User>{
        return await this.userModel.findOneAndDelete(userFilterQuery);
    }


}
