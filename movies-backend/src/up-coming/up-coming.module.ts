import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { UpComingService } from './up-coming.service';
import { Movie, MovieSchema } from 'src/up-coming/schemas/movie.schema';
import { UpComingController } from './up-coming.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  controllers: [UpComingController],
  providers: [UpComingService],
})
export class UpComingModule {}
