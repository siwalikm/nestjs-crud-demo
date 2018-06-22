import { AppService } from './app.service';
import {
  Get,
  Controller,
  Param,
  HttpCode,
  Post,
  Body,
  Req,
  Header } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  returnServiceText() {
    return this.appService.root();
  }
}

@Controller('post')
export class FakePostsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  returnGet() {
    return [{id: 1, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores'},
            {id: 2, postTitle: 'Ipsum', postDescription: 'Ipsum Lorem Dores'}];
  }

  @Get(':id')
  returnGetwithId(@Param() blogparameter) {
    return {id: `${blogparameter.id}`, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores'};
  }

  @Post()
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  create() { // note: these function names can be anything
    // return await this.appService.create(createCatDto);
    return {id: 3, postTitle: 'Lorem', postDescription: 'Lorem Ipsum Dores'};
  }
}