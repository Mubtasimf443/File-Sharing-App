import { ConfigService } from 'src/config/config.service';
export declare class FilesController {
    private config;
    constructor(config: ConfigService);
    get(id: string): Promise<void>;
}
