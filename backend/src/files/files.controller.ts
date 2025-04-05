/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Controller, FileTypeValidator, Get, HttpException, HttpStatus, InternalServerErrorException, MaxFileSizeValidator, Param, ParseFilePipe, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { response, Response } from 'express';
import { diskStorage } from 'multer';
import path, { join } from 'path';
import supabase from 'src/common/config/supabase';
import { isEmail } from 'src/common/pipe/validation.pipe';
import { FileService } from './files.service';
import { ApiErrorHandle } from 'src/common/core/ApiErrorHandle';
import { EmailPipe } from './validation.pipe';
import env from 'src/common/config/Env';



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
    @Get("path/standard/:path")
    async getbyPathStandard(@Param("path", isEmail) path: string) {
        let response = await supabase.storage.from("file-sharing-app").createSignedUrl(`public/${path}`, 3600, { download : true});
        if (response.error) {
            console.error(response.error);
            throw new InternalServerErrorException("Unknown error")
        }
        if (response.data?.signedUrl) {
            return ({ 
                success : true ,
                data :{
                    url : response.data.signedUrl
                },
                error : null
            });
        }
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
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // 5MB
                    new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif|pdf|doc|docx)$/ }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Query("email", EmailPipe) email :string,
    ) {
        try {
            if (!file || !email) {
                throw new HttpException('No file uploaded', HttpStatus.BAD_REQUEST);
            }

            let storageResponse =await supabase.storage.from('file-sharing-app').upload(`public/${file.filename}`, file.buffer, { cacheControl: "3600" });
            
            if (storageResponse.error) {
                console.error( storageResponse.error);
                throw new HttpException("Failed to Upload File in our external service" , 500)
            }


            let insertionFile :IFileModels = {
                name : file.filename ,
                file_size :String(file.size) ,
                created_at : new Date(),
                isStarred : false ,
                isSecure : false,
                path :`private/${file.filename}`,
                user_email : email,
                shared_with :[]
            }
            let databaseResponse = await supabase.from("files").insert(insertionFile);

            if (databaseResponse.status !== 201) {
                console.error(databaseResponse.error);
                throw new InternalServerErrorException("Unknow server error")
            }

            return ({
                success : true ,
                data : { 
                    url : env.ORIGIN + `/files/path/standard/${file.filename}`,
                    fileName : file.filename
                },
                error : null
            });

        } catch (error) {
            console.error(error);
            throw new HttpException("Unknown server error" , 500);
        }
    }

}
