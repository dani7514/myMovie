import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PopularMovieDocument=PopularMovie & Document;

@Schema()
export class PopularMovie{
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


}

export const PopularMovieSchema= SchemaFactory.createForClass(PopularMovie);