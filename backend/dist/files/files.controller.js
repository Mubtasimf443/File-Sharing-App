"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const supabase_1 = require("../common/config/supabase");
const validation_pipe_1 = require("../common/pipe/validation.pipe");
const files_service_1 = require("./files.service");
const validation_pipe_2 = require("./validation.pipe");
const Env_1 = require("../common/config/Env");
let FilesController = class FilesController {
    fileService;
    constructor(fileService) {
        this.fileService = fileService;
    }
    async getbyUser(email) {
        let response = await supabase_1.default.from('files').select().eq("user_email", email);
        if (response.status !== 200)
            throw new common_1.HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" };
    }
    async getbyMostDownloaded(email) {
        let response = await supabase_1.default.from('files').select().eq("user_email", email).order("downloaded", { ascending: false, nullsFirst: false });
        if (response.status !== 200)
            throw new common_1.HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" };
    }
    async getbyLatest(email) {
        let response = await supabase_1.default.from('files').select().eq("user_email", email).order("created_at", { ascending: true, nullsFirst: false });
        if (response.status !== 200)
            throw new common_1.HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" };
    }
    async getbyStared(email) {
        let response = await supabase_1.default
            .from('files').select()
            .eq("user_email", email)
            .eq("isStarred", true)
            .order("created_at", { ascending: true, nullsFirst: false });
        if (response.status !== 200)
            throw new common_1.HttpException("Unknown Server error", 400);
        delete response.status;
        delete response.statusText;
        delete response.error;
        return { success: true, data: response, message: "OK" };
    }
    async getbyPathStandard(path) {
        let response = await supabase_1.default.storage.from("file-sharing-app").createSignedUrl(`public/${path}`, 3600, { download: true });
        if (response.error) {
            console.error(response.error);
            throw new common_1.InternalServerErrorException("Unknown error");
        }
        if (response.data?.signedUrl) {
            return ({
                success: true,
                data: {
                    url: response.data.signedUrl
                },
                error: null
            });
        }
    }
    async uploadFile(file, email) {
        try {
            if (!file || !email) {
                throw new common_1.HttpException('No file uploaded', common_1.HttpStatus.BAD_REQUEST);
            }
            let storageResponse = await supabase_1.default.storage.from('file-sharing-app').upload(`public/${file.filename}`, file.buffer, { cacheControl: "3600" });
            if (storageResponse.error) {
                console.error(storageResponse.error);
                throw new common_1.HttpException("Failed to Upload File in our external service", 500);
            }
            let insertionFile = {
                name: file.filename,
                file_size: String(file.size),
                created_at: new Date(),
                isStarred: false,
                isSecure: false,
                path: `private/${file.filename}`,
                user_email: email,
                shared_with: []
            };
            let databaseResponse = await supabase_1.default.from("files").insert(insertionFile);
            if (databaseResponse.status !== 201) {
                console.error(databaseResponse.error);
                throw new common_1.InternalServerErrorException("Unknow server error");
            }
            return ({
                success: true,
                data: { url: Env_1.default.ORIGIN + `/files/path/standard/${file.filename}` },
                error: null
            });
        }
        catch (error) {
            console.error(error);
            throw new common_1.HttpException("Unknown server error", 500);
        }
    }
};
exports.FilesController = FilesController;
__decorate([
    (0, common_1.Get)("user/:email"),
    __param(0, (0, common_1.Param)("email", validation_pipe_1.isEmail)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getbyUser", null);
__decorate([
    (0, common_1.Get)("user/:email/most-downloaded"),
    __param(0, (0, common_1.Param)("email", validation_pipe_1.isEmail)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getbyMostDownloaded", null);
__decorate([
    (0, common_1.Get)("user/:email/latest"),
    __param(0, (0, common_1.Param)("email", validation_pipe_1.isEmail)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getbyLatest", null);
__decorate([
    (0, common_1.Get)("user/:email/stared"),
    __param(0, (0, common_1.Param)("email", validation_pipe_1.isEmail)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getbyStared", null);
__decorate([
    (0, common_1.Get)("path/standard/:path"),
    __param(0, (0, common_1.Param)("path", validation_pipe_1.isEmail)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "getbyPathStandard", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const extension = file.originalname.split('.').pop();
                cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)(new common_1.ParseFilePipe({
        validators: [
            new common_1.MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }),
            new common_1.FileTypeValidator({ fileType: /(jpg|jpeg|png|gif|pdf|doc|docx)$/ }),
        ],
    }))),
    __param(1, (0, common_1.Query)("email", validation_pipe_2.EmailPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FilesController.prototype, "uploadFile", null);
exports.FilesController = FilesController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [files_service_1.FileService])
], FilesController);
//# sourceMappingURL=files.controller.js.map