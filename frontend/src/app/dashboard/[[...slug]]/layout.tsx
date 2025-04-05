/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
import React from 'react';
import Link from 'next/link';
import SideBar from '@/components/DashBoard/Sidebar';
import Header from "@/components/DashBoard/Header"
import { Toaster } from 'react-hot-toast';
type Params = {
  slug?: string[];
};

export default async function DashboardLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<Params> | any;
}) {
  let tab = (await params).slug;
  if (Array.isArray(tab) === false) (tab = undefined);
  else tab = tab[0];
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        {/* Sidebar */}

        <SideBar />
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          {/* Top Header */}
          <Header name={tab} />

          {/* Page Content */}
          <main className="p-6">
            {children}
          </main>
        </div>
      </div>
      <Toaster />
    </>

  );
  // return <></>
}