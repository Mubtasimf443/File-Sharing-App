/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";



export default function Home() {
  return (
    <>
    <Header />
    <main className="flex-grow">
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
          <div 
            className="w-24 h-24 mb-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: '#BFF033' }}
          >
            <svg 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M18 15V18H6V15H4V18C4 19.1 4.9 20 6 20H18C19.1 20 20 19.1 20 18V15H18ZM17 11L15.59 9.59L13 12.17V4H11V12.17L8.41 9.59L7 11L12 16L17 11Z" 
                fill="#0AAF60"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#0AAF60' }}>
            Share Files Effortlessly
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            Join us today and experience the simplest way to share your files with friends, family, and colleagues.
          </p>
          <div className="flex space-x-4">
            <Link 
              href={"/sign-up"}
              className="px-8 py-3 rounded-md text-lg font-medium text-white"
              style={{ backgroundColor: '#0AAF60' }}
            >
              Sign Up Now
            </Link>
            <button 
              className="px-8 py-3 rounded-md text-lg font-medium border-2"
              style={{ borderColor: '#BFF033', color: '#0AAF60' }}
            >
              Learn More
            </button>
          </div>
        </div>
      </main>
    <Footer />
    </>
  );
}
