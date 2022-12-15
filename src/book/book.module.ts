import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema';
import { Comm, CommSchema } from './schemas/comm.schema';
import { CommService } from './book.comments.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: Comm.name, schema: CommSchema }]),
  ],
  controllers: [BookController],
  providers: [BookService, CommService],
  exports: [BookService, CommService],
})
export class BookModule {}
