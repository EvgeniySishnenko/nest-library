import { Body, Controller, Get, Param } from '@nestjs/common';
import { CommService } from './book.comments.service';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';
import { BookDocument } from './schemas/book.schema';
import { Comm, CommDocument } from './schemas/comm.schema';

@Controller('comm')
export class CommController {
  constructor(private readonly commService: CommService) {}
  @Get('/:bookId')
  findAllBookComment(
    @Param('bookId') bookId: string,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.commService.findAllBookComment(bookId);
  }
  public addComment(@Body() comm: Comm): Promise<CommDocument> {
    return this.commService.addComment(comm);
  }
}
