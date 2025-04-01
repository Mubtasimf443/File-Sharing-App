/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import React from 'react'
import Home from '../_pages/home';
import UnderConstruction from '@/app/404';
import Files from '../_pages/Files';
import Shared from '../_pages/Sharred';
import Trash from '../_pages/Trash';
import Starred from '../_pages/Starred';
import UploadFile from '../_pages/UploadFile';
import SecureUpload from '../_pages/SecureUpload';
import Settings from '../_pages/Settings';


// Define the type for the params
type Params = {
    slug?: string[];
  };

  
export default async function page({params} : {params :Promise<Params> }) {
    let paramsInfo : undefined | string[] =(await params).slug;
    let tab ;
    if (paramsInfo) {
        tab = paramsInfo[0].toLowerCase()
    } else {
        return <Home />
    }

    
    if (tab === "home") return <Home />;
    else if (tab === "files") return <Files />;
    else if (tab ===   "starred") return <Starred />;
    else if (tab ===   "shared") return <Shared />;
    else  if (tab ===   "trash") return <Trash />;
    else  if (tab ===   "trash") return <Trash />;
    else  if (tab ===   "upload") return <UploadFile />;
    else  if (tab ===   "secure-upload") return <SecureUpload />;
    else  if (tab ===   "settings") return <Settings />;
    else return <UnderConstruction />
}
