import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from 'src/users/interfaces/create-user-dto.interface';
import { AuthService } from './auth.service';
import { SigninDTO } from './dto/signin-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signin')
  signin(@Body() signinDTO: SigninDTO) {
    return this.authService.validateUser(signinDTO);
  }
  @Post('/signup')
  async signup(@Body() signupDTO: CreateUserDto) {
    return this.authService.signup(signupDTO);
  }
}
