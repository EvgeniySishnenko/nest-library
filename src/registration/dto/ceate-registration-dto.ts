import { IsEmail, IsString, Length } from 'class-validator';

export class CreateRegistrationDTO {
  @IsString({ message: 'Должно быть строкой' })
  @Length(2, 20, { message: 'Не меньше 2 и не больше 20' })
  readonly firstName: string;
  @IsString({ message: 'Должно быть строкой' })
  @Length(2, 20, { message: 'Не меньше 2 и не больше 20' })
  readonly lastName: string;
  @IsEmail({}, { message: 'Некорректный Email' })
  readonly email: string;
  @IsString({ message: 'Должно быть строкой' })
  @Length(6, 16, { message: 'Не меньше 6 и не больше 16' })
  readonly password: string;
}
