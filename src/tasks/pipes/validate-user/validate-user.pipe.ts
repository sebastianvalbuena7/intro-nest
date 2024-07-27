import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    let ageNumber = 0;

    try {
      ageNumber = parseInt(value.age.toString(), 10);
    } catch(error) {
      ageNumber = 0;
    }

    if (isNaN(ageNumber))
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);

    return value;
  }
}
