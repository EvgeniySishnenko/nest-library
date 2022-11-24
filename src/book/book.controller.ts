import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './interfaces/create-book-dto.interface';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    this.bookService.create(createBookDto);
  }
  @Get()
  findAll(): Book[] {
    return this.bookService.findAll();
  }
}
