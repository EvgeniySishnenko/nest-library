import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';
import { BookService } from './book.service';
import { CreateBookDto } from './interfaces/create-book-dto.interface';
import { BookDocument } from './schemas/book.schema';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  public create(@Body() createBookDto: CreateBookDto): Promise<BookDocument> {
    console.log(createBookDto);

    return this.bookService.create(createBookDto);
  }

  @Get()
  public getAll(): Promise<BookDocument[]> {
    return this.bookService.getAll();
  }

  @Put(':id')
  public update(
    @Param() { id }: { id: string },
    @Body() body: CreateBookDto,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  public delete(
    @Param() { id }: { id: string },
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.delete(id);
  }
}
