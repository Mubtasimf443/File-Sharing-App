/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
"use client"
import CompleteUploadFile from '@/components/DashBoard/upload_files/CompleteUploadFile';
import GiveFileIcon from '@/components/DashBoard/upload_files/GiveFileIcon';
import SelectFile from '@/components/DashBoard/upload_files/SelectFile';
import UploadButton from '@/components/DashBoard/upload_files/UploadButton';
import UploadError from '@/components/DashBoard/upload_files/UploadError';
import { useUser } from '@clerk/nextjs';
import React, { useState, useRef, ChangeEvent, FormEvent, useEffect, useMemo } from 'react';
import toast from 'react-hot-toast';

interface FileUploadFormProps {
  maxFileSize?: number; // in MB
  allowedFileTypes?: string[];

  className?: string;
}

const UploadFile: React.FC<FileUploadFormProps> = ({
  maxFileSize = 10, // Default max size: 10MB
  allowedFileTypes = ['image/*', 'application/pdf', '.docx', '.xlsx', '.csv'],
  className = '',
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [user,setUser] = useState<string | null >(null)
  const inputRef = useRef<HTMLInputElement>(null);

 
  const clerkResponse = useUser();
 
 
  // Format file size
  const formatFileSize = (size: number): string => {
    if (size < 1024) {
      return size + ' bytes';
    } else if (size < 1024 * 1024) {
      return (size / 1024).toFixed(2) + ' KB';
    } else {
      return (size / (1024 * 1024)).toFixed(2) + ' MB';
    }
  };

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    validateAndSetFile(file);
  };

  // Validate file
  const validateAndSetFile = (file?: File) => {
    setError(null);
    setUploadSuccess(false);

    if (!file) return;

    if (file.size > maxFileSize * 1024 * 1024) {
      setError(`File size exceeds maximum limit of ${maxFileSize}MB`);
      return;
    }

    // Check file type if allowedFileTypes is provided
    if (allowedFileTypes.length > 0) {
      const fileExtension = '.' + file.name.split('.').pop();
      const fileType = file.type;

      const isAllowed = allowedFileTypes.some(type => {
        // Check if it's a MIME type with wildcard
        if (type.includes('*')) {
          const typePart = type.split('/')[0];
          return fileType.startsWith(typePart);
        }
        // Check if it's a specific extension
        if (type.startsWith('.')) {
          return fileExtension.toLowerCase() === type.toLowerCase();
        }
        // Check exact MIME type
        return fileType === type;
      });

      if (!isAllowed) {
        setError('File type not allowed');
        return;
      }
    }

    setSelectedFile(file);
  };

  // Handle drag events
  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // Handle drop event
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    validateAndSetFile(file);
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!selectedFile) return;

    try {
      setIsUploading(true);
      setError(null);

      let form = new FormData();
      form.append("file", selectedFile);

      if (!process.env.NEXT_PUBLIC_API_URL) {
       throw "Can not resolve server url"
      }
      let url = new URL(process.env.NEXT_PUBLIC_API_URL + '/files');
       
      
       url.searchParams.append("email" , clerkResponse.user?.primaryEmailAddress?.emailAddress || "")
      let response = await fetch(url.toString(), {
        method: "post",
        body: form
      });
      if (response.status !== 200) {
        console.log((await response.json()));
        
        throw "Unknow server error";
      }
      setIsUploading(false);
      setUploadSuccess(true);
      // Clear selected file after 2 seconds
      setTimeout(() => {
        setSelectedFile(null);
        setUploadSuccess(false);
      }, 2000);
    } catch (err) {
      setError('Upload failed. Please try again.');
      console.error('Upload error:', err);
    } finally {
      setIsUploading(false);
    }
  };

  // Open file dialog
  const onButtonClick = () => {
    inputRef.current?.click();
    return;
  };

  // Remove selected file
  const removeFile = () => {
    setSelectedFile(null);
    setError(null);
    setUploadSuccess(false);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <form
        className="flex flex-col"
        onDragEnter={handleDrag}
        onSubmit={handleSubmit}
      >
        <div
          className={`
            relative flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg
            ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'}
            ${selectedFile ? 'border-green-200' : ''}
            ${error ? 'border-red-200' : ''}
            transition-colors duration-200
          `}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            accept={allowedFileTypes.join(',')}
          />

          {!selectedFile ? 
          (
            <SelectFile onButtonClick={onButtonClick} allowedFileTypes={allowedFileTypes} maxFileSize={maxFileSize} />
          ) : 
          (
            <CompleteUploadFile
              selectedFile={selectedFile}
              isUploading={isUploading}
              uploadSuccess={uploadSuccess}
              removeFile={removeFile}
              formatFileSize={formatFileSize}
            />
          )

          }
        </div>

        <UploadError error={error} />
      </form>


    </div>
  );
};

export default UploadFile;