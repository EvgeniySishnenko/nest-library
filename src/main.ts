import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './registration/filter/http.exception.filter';
import { RegistrationLoggerInterceptor } from './registration/registration.logger.interceptor';
import { RegistrationValidationPipe } from './registration/registration.validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalInterceptors(new RegistrationLoggerInterceptor());
  // app.useGlobalPipes(new RegistrationValidationPipe);
  // app.useGlobalFilters(new HttpExceptionFilter);

  await app.listen(3000);
}
bootstrap();
