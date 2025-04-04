/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import { PipeTransform, Injectable, ArgumentMetadata } from '@nestjs/common';
import {z} from 'zod'

@Injectable()
export class isEmail implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    let emailSchema = z.string().email();
    let {success} = emailSchema.safeParse(value);
    if (!success) throw new Error("The user email was not valid");
    else return value;
    
  }
}