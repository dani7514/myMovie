import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PopularService } from './popular.service';
import { PopularMovie } from './schemas/popular.schema';
import { Movies } from 'src/Dto/createMovie.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('popular')
export class PopularController {
    constructor(private popularService: PopularService){}

    @Get()
    async getPopular(@Query() query: ExpressQuery ): Promise<PopularMovie[]>{
        return await this.popularService.getPopularMovies(query);
    }

    @Post()
    async create(@Body() popularMovies: Movies): Promise<PopularMovie>{
        return await this.popularService.createPopularMovie(popularMovies);
    }

}
