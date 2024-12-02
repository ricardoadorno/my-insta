import {
  ArgumentMetadata,
  HttpException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    const object = plainToInstance(metatype, value);

    const newObj = typeof object === 'string' ? { surveyCode: object } : object;
    const errors = await validate(newObj);

    if (errors.length > 0) {
      throw new HttpException(
        { message: 'Validation failed', ...handleValidationException(errors) },
        400,
      );
    }

    return value;
  }
}

const handleValidationException = (errors: ValidationError[]) => {
  return errors.map((error) => {
    return {
      property: error.property,
      constraints: error.constraints,
    };
  });
};
