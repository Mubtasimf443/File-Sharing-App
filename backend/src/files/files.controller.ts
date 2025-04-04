/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Controller, FileTypeValidator, Get, HttpException, HttpStatus, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { diskStorage } from 'multer';
import path, { join } from 'path';
import supabase from 'src/common/config/supabase';
import { isEmail } from 'src/common/pipe/validation.pipe';
import { FileService } from './files.service';



@Controller('files')
export class FilesController {
    constructor(private readonly fileService: FileService) {

    }
    @Get("user/:email")
    async getbyUser(@Param("email", isEmail) email: string) {
        let response = await supabase.from('files').select().eq("user_email", email);
        if (response.status !== 200) throw new HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" }
    }
    @Get("user/:email/most-downloaded")
    async getbyMostDownloaded(@Param("email", isEmail) email: string) {
        let response = await supabase.from('files').select().eq("user_email", email).order("downloaded", { ascending: false, nullsFirst: false });
        if (response.status !== 200) throw new HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" }
    }
    @Get("user/:email/latest")
    async getbyLatest(@Param("email", isEmail) email: string) {
        let response = await supabase.from('files').select().eq("user_email", email).order("created_at", { ascending: true, nullsFirst: false });
        if (response.status !== 200) throw new HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" }
    }
    @Get("user/:email/stared")
    async getbyStared(@Param("email", isEmail) email: string) {
        let response = await supabase
            .from('files').select()
            .eq("user_email", email)
            .eq("isStarred", true)
            .order("created_at", { ascending: true, nullsFirst: false });

        if (response.status !== 200) throw new HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;


        return { success: true, data: response, message: "OK" }
    }

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    // Generate unique filename
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const extension = file.originalname.split('.').pop();
                    cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
                },
            }),
        }),
    )
    uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
                    new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif|pdf|doc|docx)$/ }),
                ],
            }),
        )
        file: Express.Multer.File,
    ) {
        if (!file) {
            throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
        }

        return {
            filename: file.filename,
            originalname: file.originalname,
            path: this.fileService.getFileUrl(file.filename),
            size: file.size,
        };
    }

}
