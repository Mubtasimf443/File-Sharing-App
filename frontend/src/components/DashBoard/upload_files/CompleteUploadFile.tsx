/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import React, { FC } from 'react'
import UploadButton from './UploadButton'
import GiveFileIcon from './GiveFileIcon';

interface P {
    selectedFile: File;
    formatFileSize: (size: number) => any,
    isUploading: boolean;
    uploadSuccess: boolean;
    removeFile: () => any
}

const CompleteUploadFile: FC<P> = ({ selectedFile, formatFileSize, removeFile, isUploading, uploadSuccess }) => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div className="flex items-center space-x-2">
                    {GiveFileIcon(selectedFile)}
                    <div className="flex flex-col">
                        <span className="text-sm font-medium truncate max-w-xs">
                            {selectedFile.name}
                        </span>
                        <span className="text-xs text-gray-500">
                            {formatFileSize(selectedFile.size)}
                        </span>
                    </div>
                </div>
                <button
                    type="button"
                    onClick={removeFile}
                    className="p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                    {/* X Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
            </div>

            <UploadButton isUploading={isUploading} uploadSuccess={uploadSuccess} />
        </div>
    )
}

export default CompleteUploadFile
