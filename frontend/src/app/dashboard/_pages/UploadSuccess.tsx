/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ ﷺ InshaAllah
*/
"use client"
import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useParams } from 'next/navigation';


const UploadSuccess = () => {
    // const router = useRouter();
    const {  fileName , isSecure } = useParams();
    const [copied, setCopied] = useState(false);

    if (!fileName || !isSecure) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-xl font-bold text-red-600 mb-4">Error</h1>
                    <p className="text-gray-700 mb-6">No file information found. Please try uploading again.</p>
                    <Link href="/" className="block w-full text-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                        Return to Upload
                    </Link>
                </div>
            </div>
        );
    }

    let fileUrl = process.env.NEXT_PUBLIC_ORIGIN + "/uploads/standard/" + fileName;
    

    
    const handleCopyLink = () => {
      if (typeof fileUrl === 'string') {
        navigator.clipboard.writeText(fileUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    };
 
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <div className="mb-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-2xl font-bold text-gray-900">Upload Successful!</h1>
                        <p className="mt-2 text-gray-600">Your file has been uploaded successfully.</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-2">File Details</h2>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-700 mb-1">
                                <span className="font-semibold">File Name:</span> {fileName}
                            </p>
                           
                        </div>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-2">Share your file</h2>
                        <div className="relative">
                            <input
                                type="text"
                                value={typeof fileUrl === 'string' ? fileUrl : ''}
                                readOnly
                                className="w-full pr-16 py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                onClick={handleCopyLink}
                                className="absolute right-1 top-1 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                {copied ? 'Copied!' : 'Copy'}
                            </button>
                        </div>
                    </div>

                    <div className="flex space-x-4">
                        <Link
                            href="/"
                            className="flex-1 px-4 py-2 bg-gray-200 text-gray-800 text-center rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                        >
                            Upload Another
                        </Link>
                        <a
                            href={typeof fileUrl === 'string' ? fileUrl : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-4 py-2 bg-blue-500 text-white text-center rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            View File
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UploadSuccess;