import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Movies } from 'src/Dto/createMovie.dto';
import { TrendingMovie } from './schemas/trending.schema';
import { TrendingService } from './trending.service';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('trending')
export class TrendingController {
    constructor( private trendingService: TrendingService){}

    @Get()
    async getPopular(@Query() query: ExpressQuery): Promise<TrendingMovie[]>{
        return await this.trendingService.getPopularMovies(query);
    }

    @Post()
    async create(@Body() popularMovies: TrendingMovie): Promise<TrendingMovie>{
        return await this.trendingService.createPopularMovie(popularMovies);
    }
}
