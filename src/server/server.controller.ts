import { Controller, Get, Post, Body } from '@nestjs/common';
import { generateDocumentation } from '../core/index';

@Controller('converter')
export class ServerController {
  @Get()
  getHello(): string {
    return 'Hello world';
  }

  @Post('/generate')
  generate(@Body() body: any) {
    return generateDocumentation(body);
  }
}
