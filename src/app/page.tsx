// app/page.tsx
import { connectMongoDB } from "@/config/db-config";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

connectMongoDB();
export default async function Home() {
  const loggedInUser = await currentUser();

  return (
    <div className='p-10'>
      <div className='flex flex-col gap-1'>
        <UserButton afterSignOutUrl='/sign-in' />
        <div>
          <h1 className='text-2xl font-bold'>Welcome to the Home Page</h1>
          <p className='mt-2 text-gray-600'>
            This is a simple example of a home page using Clerk for
            authentication.
          </p>
          <div className='mt-2 p-4 bg-green-300 rounded-lg'>
            <div>First Name: {loggedInUser?.firstName}</div>
            <div>Last Name: {loggedInUser?.lastName}</div>
            <div>User Name: {loggedInUser?.username}</div>
            <div>Email: {loggedInUser?.emailAddresses[0]?.emailAddress}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
