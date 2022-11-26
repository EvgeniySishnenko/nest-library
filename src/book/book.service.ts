import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { BookDocument } from './schemas/book.schema';
@Injectable()
export class BookService {
  constructor(
    @InjectModel('Book') private BookModel: Model<BookDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  create(book: Omit<Book, 'id'>): Promise<BookDocument> {
    const newBook = new this.BookModel(book);
    return newBook.save();
  }
  // findAll(): Book[] {
  //   return this.book;
  // }
}
