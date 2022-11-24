import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class BookService {
  private readonly book: Book[] = [];
  create(book: Omit<Book, 'id'>) {
    const id = uuidv4();
    const newBook: Book = {
      ...book,
      id: String(id),
    };
    this.book.push(newBook);
  }
  findAll(): Book[] {
    return this.book;
  }
}
