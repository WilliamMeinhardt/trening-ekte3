import Link from "next/link";

const Header = () => {
    return (
    <header>
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Hjem
            </Link>
            <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Om oss
            </Link>
            <Link href="/booking" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Booking
            </Link>
            <Link href="/shop" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
              Shop
            </Link>
        </div>

        <Link href="/login" className="absolute top-4 right-4 bg-transparent border border-white py-2 px-4 rounded-full text-white z-20">
        Logg inn
        </Link>
      </header>
    );
}
 
export default Header;