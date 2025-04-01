/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import Link from 'next/link'
import React from 'react'
import {SettingsIcon , FileIcon, FileUploadIcon, HomeIcon, SecurityIcon, ShareIcon, StarIcon, TrashIcon } from '@/components/svg/dashboard';



export default function SideBar() {
    return (
        <>
            <div className="w-64 bg-white shadow-lg">
                {/* Logo */}
                <div className="flex items-center justify-center h-16 border-b">
                    <Link href="/dashboard" className="flex items-center">
                        <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                            <polyline points="16 6 12 2 8 6" />
                            <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                        <span className="ml-2 text-xl font-bold text-gray-900">FileShare</span>
                    </Link>
                </div>

                {/* Navigation Menu */}
                <nav className="mt-6">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase">Main</div>

                    <Link href="/dashboard" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <HomeIcon />
                        <span>Dashboard</span>
                    </Link>

                    <Link href="/dashboard/files" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <FileIcon ></FileIcon>
                        <span>All Files</span>
                    </Link>

                    <Link href="/dashboard/starred" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <StarIcon ></StarIcon>
                        <span>Starred</span>
                    </Link>

                    <Link href="/dashboard/shared" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <ShareIcon ></ShareIcon>
                        <span>Shared</span>
                    </Link>

                    <Link href="/dashboard/trash" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <TrashIcon />
                        <span>Trash</span>
                    </Link>

                    <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase">Actions</div>

                    <Link href="/dashboard/upload" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <FileUploadIcon />
                        <span>Upload Files</span>
                    </Link>

                    <Link href="/dashboard/secure-upload" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <SecurityIcon />

                        <span>Secure Upload</span>
                    </Link>

                    <div className="px-4 py-2 mt-6 text-xs font-semibold text-gray-400 uppercase">Settings</div>

                    <Link href="/dashboard/security" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span>Security</span>
                    </Link>

                    <Link href="/dashboard/settings" className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        <SettingsIcon />
                        <span>Settings</span>
                    </Link>
                </nav>

                {/* User Profile */}
                {/* <div className="absolute bottom-0 w-64 border-t">
                    <div className="flex items-center p-4">
                        <div className="flex-shrink-0">
                            <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                    <circle cx="12" cy="7" r="4" />
                                </svg>
                            </div>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">User Name</p>
                            <p className="text-xs text-gray-500 truncate">user@example.com</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    )
}
