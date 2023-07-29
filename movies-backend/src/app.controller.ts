import { Controller, Get,Post,Req, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}

 
}
