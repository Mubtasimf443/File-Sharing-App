/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import React, { FC } from 'react'


interface P {
    isUploading : boolean;
    uploadSuccess  : boolean;
}

const UploadButton: FC<P> = ({isUploading , uploadSuccess}) => {
    return (
        <>
            <button
                type="submit"
                disabled={isUploading || uploadSuccess}
                className={`
                  mt-4 w-full px-4 py-2 text-sm font-medium text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
                  ${isUploading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}
                  ${uploadSuccess ? 'bg-green-500 cursor-default' : ''}
                `}
            >
                {isUploading ? (
                    <span className="flex items-center justify-center">
                        <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Uploading...
                    </span>
                ) : uploadSuccess ? (
                    <span className="flex items-center justify-center">
                        {/* Check Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Upload Complete
                    </span>
                ) : (
                    'Upload File'
                )}
            </button>
        </>
    )
}

export default UploadButton
