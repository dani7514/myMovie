import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrendingMovieDocument=TrendingMovie & Document;

@Schema()
export class TrendingMovie{
    @Prop()
    backdrop_path: string;

    @Prop()
    genre_ids: string[];

    @Prop()
    original_language: string;

    @Prop()
    original_title : string;

    @Prop()
    overview: string;

    @Prop()
    poster_path: string;

    @Prop()
    release_date: string;

    @Prop()
    title: string;

    @Prop()
    vote_average: number;

    @Prop()
    category: string;


}

export const TrendingMovieSchema= SchemaFactory.createForClass(TrendingMovie);