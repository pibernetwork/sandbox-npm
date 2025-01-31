import { Controller, Get } from '@nestjs/common';
import { InternalImport, Library } from '@npm/library';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('library')
  getLibrary() {
    return `${Library()} - ${InternalImport()}`;
  }
}
