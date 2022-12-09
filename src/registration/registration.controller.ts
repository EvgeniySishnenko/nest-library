import {
  Body,
  Controller,
  HttpException,
  Post,
  UseFilters,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { CreateRegistrationDTO } from './dto/ceate-registration-dto';
import { HttpExceptionFilter } from './filter/http.exception.filter';
import { RegistrationLoggerInterceptor } from './registration.logger.interceptor';
import { RegistrationService } from './registration.service';
import { RegistrationValidationPipe } from './registration.validation.pipe';

@UseInterceptors(RegistrationLoggerInterceptor)
@Controller('registration')
export class RegistrationController {
  constructor(private readonly registrationController: RegistrationService) {}
  @Post()
  @UsePipes(RegistrationValidationPipe)
  @UseFilters(HttpExceptionFilter)
  async registration(@Body() registrationDTO: CreateRegistrationDTO) {
    return this.registrationController.registration(registrationDTO);
  }
}
