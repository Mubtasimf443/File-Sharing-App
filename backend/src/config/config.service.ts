/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { config } from 'dotenv';
import { Database } from 'src/common/schema/db.schema';
import { IEnv } from 'src/common/schema/env.schema';

config();
let env :IEnv= {
    SUPABASE_ANON_KEY : process.env.SUPABASE_ANON_KEY,
    SUPABASE_URL :process.env.SUPABASE_URL,
    DB_PASSWORD : process.env.DB_PASSWORD
}

let supabase = createClient<Database>(env.SUPABASE_URL , env.SUPABASE_ANON_KEY)

@Injectable()
export class ConfigService {
    public Env: IEnv;
    constructor() {
        this.Env= env;
    }
    async getFiles() : Promise<any> {
        try {
            let rows = supabase.from("files").select();
            return rows;
        } catch (error) {
            console.error(error);
        }
    }

}
