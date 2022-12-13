import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../test-utils/mongo/MongooseTestModule';
import { BookService } from './book.service';
import { Book, BookDocument, BookSchema } from './schemas/book.schema';
import { Model } from 'mongoose';
import { IBook } from './interfaces/book.interface';
const mockBook: IBook = {
  id: '123456789',
  title: 'title',
  description: 'description',
  authors: 'authors',
  favorite: 'favorite',
  fileCover: 'fileCover',
  fileName: 'fileName',
};

describe('BookService', () => {
  let service: BookService;
  let model: Model<BookDocument>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
      ],
      providers: [
        BookService,
        {
          provide: getModelToken(Book.name),
          useValue: {
            update: jest.fn(),
            create: jest.fn(),
            getAll: jest.fn(),
            delete: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<BookService>(BookService);
    model = module.get<Model<BookDocument>>(getModelToken(Book.name));
  });

  it('create book', async () => {
    // jest.spyOn(model, 'create').mockImplementation(() => mockBook);
    // const result = await service.create(mockBook);
    // console.log(result);
    // expect(result).toEqual(mockBook);
  });

  // it('find all books', async () => {
  //   const mockBooks = [mockBook, mockBook];
  //   jest.spyOn(model, 'find').mockReturnValue({
  //     exec: jest.fn().mockResolvedValueOnce(mockBooks),
  //   } as any);

  //   const result = await service.getAll();

  //   expect(result).toEqual(mockBooks);
  // });

  // it('find one book', async () => {
  //   jest.spyOn(model, 'findById').mockReturnValue({
  //     exec: jest.fn().mockResolvedValueOnce(mockBook),
  //   } as any);
  //   const result = await service.findOne(mockBook._id);

  //   expect(result).toEqual(mockBook);
  // });

  // it('update book', async () => {
  //   jest.spyOn(model, 'update').mockReturnValueOnce({
  //     exec: jest.fn().mockResolvedValueOnce(mockBook),
  //   } as any);

  //   const result = await service.update(mockBook.id, mockBook);

  //   expect(result).toEqual(mockBook);
  // });
});
