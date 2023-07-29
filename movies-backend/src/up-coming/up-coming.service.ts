import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { Movie, movieDocument } from 'src/up-coming/schemas/movie.schema';

@Injectable()
export class UpComingService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<movieDocument>){

    }
    async createUpComing(movies: Movie): Promise<Movie>{
        const movie= new this.movieModel(movies);
        return movie.save()
    }
     async getUpComing(): Promise<Movie[]>{
        return await this.movieModel.find();
     }
}
