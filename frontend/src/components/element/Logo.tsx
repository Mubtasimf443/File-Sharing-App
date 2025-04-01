/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
"use client"
import Image from 'next/image'
import React from 'react'

const Logo: React.FC<{ size: string }> = ({ size }) => {
    let sizeList = new Map([
        ["small","w-12"],
        ["medium","w-22"],
        ["large","w-32"],
    ])
    return (
        <Image src="/logo.png" width={200} height={200} alt='Logo' className={sizeList.get(size) ?? sizeList.get("small")}/>
    )
}

export default Logo
