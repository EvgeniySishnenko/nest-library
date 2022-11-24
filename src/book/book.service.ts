import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BookService {
  private readonly book: Omit<Book, 'id'>[] = [];
  create(book: Omit<Book, 'id'>) {
    this.book.push(book);
  }
}
