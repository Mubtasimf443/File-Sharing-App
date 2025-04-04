/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Injectable } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  constructor() {
    // Create uploads directory if it doesn't exist
    const uploadPath = join(process.cwd(), 'uploads');
    if (!existsSync(uploadPath)) {
      mkdirSync(uploadPath, { recursive: true });
    }
  }

  getDestinationPath() {
    return join(process.cwd(), 'uploads');
  }

  getFileUrl(filename: string): string {
    return `/uploads/${filename}`;
  }
}