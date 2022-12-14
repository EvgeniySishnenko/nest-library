import { Test, TestingModule } from '@nestjs/testing';
import { BookController } from './book.controller';
import { BookService } from './book.service';

const mockBook = {
  // id: '123456789',
  title: 'title',
  description: 'description',
  authors: 'authors',
  favorite: 'favorite',
  fileCover: 'fileCover',
  fileName: 'fileName',
};

describe('BookService', () => {
  let controller: BookController;
  const mockBookService = {
    create: jest.fn((dto) => {
      return {
        id: '123456789',
        ...dto,
      };
    }),
    update: jest.fn().mockImplementation((id, dto) => {
      return {
        id,
        ...dto,
      };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookController],
      providers: [BookService],
    })
      .overrideProvider(BookService)
      .useValue(mockBookService)
      .compile();
    controller = module.get<BookController>(BookController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  it('create book', () => {
    expect(controller.create(mockBook)).toEqual({
      id: '123456789',
      ...mockBook,
    });
  });
  it('update book', () => {
    const mockUpdate = { title: 'description', ...mockBook };
    expect(controller.update({ id: '123456789' }, mockUpdate)).toEqual({
      id: '123456789',
      ...mockUpdate,
    });
  });
});
