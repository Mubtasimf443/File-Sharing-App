/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
"use client"
import React, { useState } from 'react';
import { FileIcon, TrashIcon, ShareIcon, UploadedFilesIcon, StorageIcon, UsersIcon, TableFileIcon } from '../_svg/home'
import FileTable from '@/components/DashBoard/FileTable';
import IconBox from '@/components/DashBoard/IconBox';


export default function Home() {
  const [sortOrder, setSortOrder] = useState('latest'); // Default sort order

  const handleSortChange = (order: string) => {
    setSortOrder(order);
  };

  
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <IconBox
          title='Total Files'
          value='128'
          Icon={<FileIcon />}
        />

        <IconBox
          title='Storage Used'
          value='2.4 GB'
          Icon={<StorageIcon />}
          bg='bg-green-600'
        />
        <IconBox
          title='Uploads (This Month)'
          value='45'
          Icon={<UploadedFilesIcon />}
          bg='bg-fuchsia-600'
        />
        <IconBox
          title='Shared With'
          value='43'
          Icon={<UsersIcon />}
          bg='bg-orange-600'
        />



      </div>

      {/* Recent Files */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Files</h3>
          <div className="flex items-center">
            <div className="mr-4">
              <select
                className="border rounded px-2 py-1 text-sm"
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="latest">Latest First</option>
                <option value="oldest">Oldest First</option>
              </select>
            </div>
          </div>

        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-hidden">
            <FileTable files={[
              { name: 'Project Proposal.pdf', size: '2.4 MB', modified: '1 hour ago', secure: true },
              { name: 'Company Logo.png', size: '1.2 MB', modified: 'Yesterday', secure: false },
              { name: 'Financial Report.xlsx', size: '3.7 MB', modified: '2 days ago', secure: true },
              { name: 'Meeting Notes.docx', size: '840 KB', modified: '3 days ago', secure: false },
              { name: 'Product Images.zip', size: '14.2 MB', modified: '1 week ago', secure: false },
            ]} />

          </div>
        </div>
      </div>
    </div>
  );
}