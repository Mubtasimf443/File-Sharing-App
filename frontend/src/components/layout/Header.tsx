/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import Link from 'next/link'
import React from 'react'
import Logo from '../element/Logo'
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/nextjs'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo size='small' />
          <h1 className="text-2xl font-bold" style={{ color: '#0AAF60' }}>ShareFiles</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#" className="hover:text-green-500 font-medium">Home</Link></li>
            <li><Link href="#" className="hover:text-green-500 font-medium">About</Link></li>
            <li><Link href="#" className="hover:text-green-500 font-medium">Contact</Link></li>
            <li>
              <SignedOut >
                {/* <Link
                  href="/auth/sign-in"
                  className="px-4 py-2 rounded-md font-medium text-white"
                  style={{ backgroundColor: '#0AAF60' }}
                >
                  Login
                </Link> */}
                <SignInButton ></SignInButton>

              </SignedOut>
              <SignedIn>
                <Link href={"/dashboard"} className="hover:text-green-500 font-medium">Dashboard</Link>
                {/* <UserButton /> */}
              </SignedIn>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

