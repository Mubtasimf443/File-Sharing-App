import { FileService } from './files.service';
export declare class FilesController {
    private readonly fileService;
    constructor(fileService: FileService);
    getbyUser(email: string): Promise<{
        success: boolean;
        data: import("@supabase/postgrest-js").PostgrestSingleResponse<any[]>;
        message: string;
    }>;
    getbyMostDownloaded(email: string): Promise<{
        success: boolean;
        data: import("@supabase/postgrest-js").PostgrestSingleResponse<any[]>;
        message: string;
    }>;
    getbyLatest(email: string): Promise<{
        success: boolean;
        data: import("@supabase/postgrest-js").PostgrestSingleResponse<any[]>;
        message: string;
    }>;
    getbyStared(email: string): Promise<{
        success: boolean;
        data: import("@supabase/postgrest-js").PostgrestSingleResponse<any[]>;
        message: string;
    }>;
    getbyPathStandard(path: string): Promise<{
        success: boolean;
        data: {
            url: string;
        };
        error: any;
    }>;
    uploadFile(file: Express.Multer.File, email: string): Promise<{
        success: boolean;
        data: {
            url: string;
        };
        error: any;
    }>;
}
