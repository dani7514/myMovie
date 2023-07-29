import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PopularMovie,PopularMovieDocument } from './schemas/popular.schema';
import { Query  } from 'express-serve-static-core';

@Injectable()
export class PopularService {
    constructor(@InjectModel(PopularMovie.name) private movieModel: Model<PopularMovieDocument>){}

    async getPopularMovies(query: Query): Promise<PopularMovie[]>{
        const page=Number(query.page);
        const limit=Number(query.limit);

        const skip=limit*(page-1);

        const gener= query.gener ? {
            genre_ids : {
                $regex : query.gener,
                $options: 'i',
            }
        } : {};
        
        return await this.movieModel.find(gener).limit(limit).skip(skip);
    }

    async createPopularMovie(popularMovie: PopularMovie): Promise<PopularMovie>{
        const popularMovies= new this.movieModel(popularMovie);
        return popularMovies.save()
    }
}
