import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/docs', 302)
  getHello(): string {
    return 'Hello World';
  }
}
