import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UpComingModule } from './up-coming/up-coming.module';
import { PopularModule } from './popular/popular/popular.module';
import { TrendingModule } from './trending/trending/trending.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/nest',{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'images'),
    }),
    UserModule,
    AuthModule,
    UpComingModule,
    PopularModule,
    TrendingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
