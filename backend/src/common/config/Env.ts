/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import { config } from "dotenv";

config();


class ENV {
    public SUPABASE_URL?: string;
    public SUPABASE_ANON_KEY?: string;
    public DB_PASSWORD?: string;
    constructor() {
        this.SUPABASE_URL = process.env.SUPABASE_URL;
        this.SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;
        this.DB_PASSWORD = process.env.DB_PASSWORD;

    }
}

const env = new ENV();
export default env;