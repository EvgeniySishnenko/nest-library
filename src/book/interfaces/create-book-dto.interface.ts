import { Book } from './book.interface';

export interface CreateBookDto extends Omit<Book, 'id'> {}
