import { Book } from 'src/book/schemas/book.schema';

export const bookStub = (): Book => {
  return {
    // id: '123456789',
    title: 'title',
    description: 'description',
    authors: 'authors',
    favorite: 'favorite',
    fileCover: 'fileCover',
    fileName: 'fileName',
  };
};
