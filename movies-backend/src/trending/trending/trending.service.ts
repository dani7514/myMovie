import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrendingMovie, TrendingMovieDocument } from './schemas/trending.schema';
import { Query  } from 'express-serve-static-core';

@Injectable()
export class TrendingService {
    constructor(@InjectModel(TrendingMovie.name) private trendingMovieModel: Model<TrendingMovieDocument>){}

    
    async getPopularMovies(query: Query): Promise<TrendingMovie[]>{
        const pageN=Number(query.page);
        const limit=Number(query.limit);

        const skip=limit*(pageN-1);
        const catagory= query.catagory ? {
            category : {
                $regex : query.catagory,
                $options: 'i',
            }
        } : {}
        return await this.trendingMovieModel.find(catagory).limit(limit).skip(skip);
    }

    async createPopularMovie(popularMovie: TrendingMovie): Promise<TrendingMovie>{
        const popularMovies= new this.trendingMovieModel(popularMovie);
        return popularMovies.save()
    }
}

