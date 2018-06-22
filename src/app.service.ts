import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): string {
    return `<h2>Welcome to NestJS CRUD demo</h2>
    <h3>See readme.md for more</h3>`;
  }
}