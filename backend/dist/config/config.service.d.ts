import { IEnv } from 'src/common/schema/env.schema';
export declare class ConfigService {
    Env: IEnv;
    constructor();
    getFiles(): Promise<any>;
}
