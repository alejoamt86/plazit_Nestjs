import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value, 10);
    console.log(`entre al parse propiioo  ${value}`);
    
    if (isNaN(val)) {
      console.log('entre al parse propiioo');
      throw new BadRequestException(`${value} is not a number`);
    }
    return value;
  }
}
