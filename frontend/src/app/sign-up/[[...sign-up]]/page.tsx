

import { SignUp } from "@clerk/nextjs";
import React from "react";

const Page :React.FC=() => {
    return (
         <div className=' flex flex-row justify-center items-center w-dvw h-[100vh]'>
                  <SignUp />
            </div>
    )
  }

  export default Page