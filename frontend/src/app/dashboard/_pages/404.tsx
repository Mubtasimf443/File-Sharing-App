
/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ   InshaAllah
*/
// /Dashboard/components/UnderConstruction.tsx
import React from 'react';

interface UnderConstructionProps {
  title?: string;
  description?: string;
}

const UnderConstruction: React.FC<UnderConstructionProps> = ({
  title = "Feature Under Construction",
  description = "We're working hard to bring you this feature soon. Please check back later."
}) => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-md shadow-sm">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <svg className="h-12 w-12 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-medium text-amber-800">{title}</h3>
          <p className="mt-1 text-sm text-amber-700">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="w-full max-w-md">
          <div className="relative pt-4">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                  In Progress
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-amber-600">
                  60%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
              <div style={{ width: "60%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <svg className="h-24 w-24 text-amber-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 21.5V18.5C9.5 17.5 10 16.5 11.5 16.5H14.5C15.5 16.5 16.5 17 16.5 18.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 10L5 9.5V7L3 6.5L2.5 8.5L3 10Z" fill="currentColor"/>
          <path d="M21 10L19 9.5V7L21 6.5L21.5 8.5L21 10Z" fill="currentColor"/>
          <path d="M2.5 18L1 16L2 13.5H4L5 16L2.5 18Z" fill="currentColor"/>
          <path d="M21.5 18L23 16L22 13.5H20L19 16L21.5 18Z" fill="currentColor"/>
          <path d="M13 11.5C13 12.6046 12.1046 13.5 11 13.5C9.89543 13.5 9 12.6046 9 11.5C9 10.3954 9.89543 9.5 11 9.5C12.1046 9.5 13 10.3954 13 11.5Z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 4.5H18L17.5 2H6.5L6 4.5Z" fill="currentColor"/>
          <path d="M19 8.5V4.5H5V8.5C5 12.5 7.5 16.5 12 16.5C16.5 16.5 19 12.5 19 8.5Z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
    </div>
  );
};

export default UnderConstruction;