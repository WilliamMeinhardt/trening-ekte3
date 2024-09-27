import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import Link from "next/link";

const Header = () => {
    return (
      <header>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Hjem
            </Link>
            <Link href="/om-oss" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Om oss
            </Link>
            <Link href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Booking
            </Link>
            <Link href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Medlemskap
            </Link>
        </div>

        <div className="absolute top-4 right-4 py-2 px-4 z-20">
          <SignedOut>
            <SignInButton mode='modal' signUpFallbackRedirectUrl='/'>
                <div className=''>
                    <h1 className='text-white'>Logg inn</h1>
                </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
         </div>
      </header>
    );
}
 
export default Header;