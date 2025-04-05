/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class EmailPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    let emailSchema = z.string().email().max(100);
    let {error} = emailSchema.safeParse(value);
    if (error) {
        throw new BadRequestException("Please enter a Valid max 100 cr Email")
    }
    return value;
  }
}