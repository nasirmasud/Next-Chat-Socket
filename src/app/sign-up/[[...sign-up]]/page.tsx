import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='bg-gray-800 h-screen flex items-center justify-center'>
      <SignUp />
    </div>
  );
}
