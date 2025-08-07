import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 shadow-lg rounded-b-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Brand/Logo */}
        <Link href="/" className="text-white text-3xl font-extrabold mb-3 md:mb-0 hover:text-blue-200 transition-colors duration-300">
          Teachers Hub
        </Link>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
          <Link href="/" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            Home
          </Link>
          <Link href="/about" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            About
          </Link>
          <Link href="/services" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            Services
          </Link>
          <Link href="/contact" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            Contact
          </Link>
          <Link href="/register" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            Register
          </Link>
          <Link href="/login" className="text-white text-lg font-medium hover:text-blue-200 transition-colors duration-300 px-3 py-1 rounded-md hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}