import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class RegistrationValidationPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata) {
    const obj = plainToClass(metadata.metatype, value);
    const errors = await validate(obj);
    if (errors.length) {
      /**
       * нужно нормализовать отсылаемые данные на клиент
       * просто массив не подходит, т.к не понятно какая ошибка к какому полю относится
       */
      const message = errors.map((err) => {
        return {
          [err.property]: Object.values(err.constraints).join(', '),
        };
      });
      return message;
    }
    return value;
  }
}
