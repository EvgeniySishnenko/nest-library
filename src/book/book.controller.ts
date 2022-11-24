import { Body, Controller, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './interfaces/create-book-dto.interface';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    this.bookService.create(createBookDto);
  }
}
