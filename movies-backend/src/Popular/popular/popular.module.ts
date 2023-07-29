import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PopularController } from './popular.controller';
import { PopularService } from './popular.service';
import { PopularMovie,  PopularMovieSchema } from './schemas/popular.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: PopularMovie.name , schema: PopularMovieSchema}])],
  controllers: [PopularController],
  providers: [PopularService]
})
export class PopularModule {}
