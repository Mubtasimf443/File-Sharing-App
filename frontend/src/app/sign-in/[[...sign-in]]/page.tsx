import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=' flex flex-row justify-center items-center h-[100vh] w-dvh'>
          <SignIn />
    </div>

  );
}