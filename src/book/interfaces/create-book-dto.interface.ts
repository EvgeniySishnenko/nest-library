import { IBook } from './book.interface';

export interface CreateBookDto extends Omit<IBook, 'id'> {}
