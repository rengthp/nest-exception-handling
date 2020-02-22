import { Controller, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './http-exception.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('findAll')
  async findAll() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Access to this site is forbidden',
    }, 403);
  }

  @Get('findOne')
  @UseFilters(new HttpExceptionFilter())
  async findOne() {
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'Access to this site is forbidden',
    }, 403);
  }
}
