/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/


import React, { FC } from 'react'

interface Props{
    allowedFileTypes : string[] ;
    maxFileSize : number;
    onButtonClick : () => void
}

const SelectFile: FC<Props> = ({allowedFileTypes , maxFileSize , onButtonClick}) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 mb-3 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <p className="mb-2 text-sm text-gray-600">
                <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">
                {allowedFileTypes.join(', ')} (Max: {maxFileSize}MB)
            </p>
            <button
                type="button"
                onClick={onButtonClick}
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Select File
            </button>
        </>
    )
}

export default SelectFile
