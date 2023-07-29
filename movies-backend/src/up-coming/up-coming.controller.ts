import { Body, Controller, Get, Post } from '@nestjs/common';
import { Movies } from 'src/Dto/createMovie.dto';
import { Movie } from 'src/up-coming/schemas/movie.schema';
import { UpComingService } from './up-coming.service';

@Controller('up-coming')
export class UpComingController {
    constructor(private upService: UpComingService){

    }
    @Get()
    async getUpcoming(): Promise<Movie[]>{
        return await this.upService.getUpComing();
    }

    @Post()
    async createUpcoming(@Body() movie: Movies): Promise<Movie>{
        return await this.upService.createUpComing(movie);
    }
}
