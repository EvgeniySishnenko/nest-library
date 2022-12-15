import { Book, BookDocument } from './schemas/book.schema';
import { Injectable } from '@nestjs/common';
import {
  Model,
  Connection,
  QueryWithHelpers,
  HydratedDocument,
} from 'mongoose';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Comm, CommDocument } from './schemas/comm.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private BookModel: Model<BookDocument>,
    @InjectModel(Comm.name) private CommModel: Model<CommDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public create(book: Omit<Book, 'id'>): Promise<BookDocument> {
    const newBook = new this.BookModel(book);
    return newBook.save();
  }

  public getAll(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  public update(
    id: string,
    data: Omit<Book, 'id'>,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  public delete(
    id: string,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.BookModel.findOneAndRemove({ _id: id });
  }
}
