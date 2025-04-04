/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/


import React, { FC } from 'react'

const UploadError: FC<{ error: string | null | any }> = ({ error }) => {
    if (typeof error === 'string') {
        return (
            <div className="mt-2 text-sm text-red-500">
                {error}
            </div>
        );
    }

    return <></>
}

export default UploadError
