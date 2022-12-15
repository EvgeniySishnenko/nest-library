import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
// import { Book, BookSchema } from '../schemas/book.schema';
import { INestApplication } from '@nestjs/common';
import { BookModule } from './book.module';
import * as request from 'supertest';
import { Book, BookSchema } from './schemas/book.schema';
import { BookController } from './book.controller';

describe('Book', () => {
  let app: INestApplication;
  const mockBookService = {
    getAll: () => ['test'],
    create: (f) => f,
    update: (f) => f,
    delete: (id) => id,
  };
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    })
      .overrideProvider(BookService)
      .useValue(mockBookService)
      .compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });
  it('/GET book', () => {
    return request(app.getHttpServer())
      .get('/book')
      .expect(200)
      .expect(mockBookService.getAll());
  });
  it('/POST book', (f) => {
    return request(app.getHttpServer())
      .post('/book')
      .expect(200)
      .expect(mockBookService.create(f));
  }, 10000);
  it('/PUT book', (f) => {
    return request(app.getHttpServer())
      .put('/book')
      .expect(200)
      .expect(mockBookService.update(f));
  });

  it('/delete book', (id) => {
    return request(app.getHttpServer())
      .delete('/book')
      .expect(200)
      .expect(mockBookService.delete(id));
  });
  afterAll(async () => {
    await app.close();
  });
});
