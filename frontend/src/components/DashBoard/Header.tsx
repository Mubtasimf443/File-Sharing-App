/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/


import { UserButton } from '@clerk/nextjs';
import React from 'react'

async function Header({ name }: { name?: string }) {
    if (name === undefined) name = "dashboard";

    return (
        <>
           
                <header className=" bg-white shadow-sm px-4 py-4 flex flex-row justify-between w-full">
                    <h1 className="text-lg font-semibold text-gray-900">{(name?.at(0)?.toUpperCase() || "") + (name?.slice(1, name.length) || "")}</h1>
                    <UserButton />
                </header>
            
        </>
    )
}

export default Header

