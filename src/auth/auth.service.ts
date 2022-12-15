import { HttpStatus, Injectable, UseGuards } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/schemas/user.schema';
import { UsersService } from '../users/users.service';
import { SigninDTO } from './dto/signin-dto';
import { CreateUserDto } from '../users/interfaces/create-user-dto.interface';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  private async generateToken(user: UserDocument) {
    const payload = { email: user.email, id: user.id };
    return {
      token: this.jwtService.sign(payload),
    };
  }
  async validateUser(signinDTO: SigninDTO): Promise<{ token: string } | null> {
    try {
      const user = await this.usersService.getUsersByEmail(signinDTO.email);
      if (user) {
        return this.generateToken(user);
      }
    } catch (error) {
      return error;
    }
  }
  async signup(userDTO: CreateUserDto) {
    const candidate = await this.usersService.getUsersByEmail(userDTO.email);
    if (candidate) {
      throw {
        message: 'Пользователь с таким email уже существует',
        status: HttpStatus.BAD_REQUEST,
      };
    }
    return await this.usersService.createUsers(userDTO);
  }
}
