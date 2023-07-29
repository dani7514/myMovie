import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userDocument=User & Document;

@Schema()
export class User{
    @Prop()
    userId: string;

    @Prop()
    name: string;

    @Prop()
    password: string;

    @Prop()
    username: string


}

export const userSchema= SchemaFactory.createForClass(User);