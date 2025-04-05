/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

export function ApiErrorHandle(error:any) : object{
    console.error(error);
    if (typeof error === "string") return ({ message: error, success: false, data: null });
    else if (typeof error === "object") return ({ message: "UnKnown error Object", success: false, data: null, ...error });
    else return ({ message: "UnKnown error Object", success: false, data: null}) ;
}

