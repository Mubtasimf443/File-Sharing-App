import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=' flex flex-row justify-center items-center w-dvw h-[100vh]'>
          <SignIn />
    </div>

  );
}