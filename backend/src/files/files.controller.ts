/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { ApiErrorHandle } from 'src/common/core/ApiErrorHandle';
import { IResponse } from 'src/common/schema/response.schema';
import { ConfigService } from 'src/config/config.service';

@Controller('files')
export class FilesController {
    constructor(private config : ConfigService){}
    @Get("user/:id")
    async get (@Param("id") id :string) {
        
    }
}
