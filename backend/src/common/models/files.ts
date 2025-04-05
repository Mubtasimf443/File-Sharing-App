/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

interface IFileModels {
    id ?: number;
    name : string;
    isSecure : boolean;
    password ?: string;
    user_email : string;
    created_at : Date;
    file_size : string;
    downloaded ?: string;
    isStarred : boolean
    path : string,
    shared_with : string[]
}