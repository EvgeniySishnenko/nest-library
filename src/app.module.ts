import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationService } from './registration/registration.service';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [RegistrationModule],
  controllers: [AppController, BookController, RegistrationController],
  providers: [AppService, BookService, RegistrationService],
})
export class AppModule {}
