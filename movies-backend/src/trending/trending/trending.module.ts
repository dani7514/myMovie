import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TrendingMovie, TrendingMovieSchema } from './schemas/trending.schema';
import { TrendingController } from './trending.controller';
import { TrendingService } from './trending.service';

@Module({
  imports: [MongooseModule.forFeature([{name: TrendingMovie.name, schema: TrendingMovieSchema}])],
  controllers: [TrendingController],
  providers: [TrendingService]
})
export class TrendingModule {}
