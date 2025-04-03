/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/


export interface Database {
    public: {
        Tables: {
            files: {
                Row: {               
                  id: number
                  isSecure : boolean,
                  password : string | null,
                  user_id : string
                }
            }
        }
    }
}

