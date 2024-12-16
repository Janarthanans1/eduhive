"use client";
import { useState } from "react";
import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { push } = useRouter();
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  if (pathname === "/pages/login") {
    return null;
  }

  return (
    <nav className="bg-blue-800 px-6 sm:px-14 py-4 border-b-2 border-white text-white flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <GraduationCap className="w-10 h-10 sm:w-14 sm:h-14" />
        <h1 className="font-black tracking-widest text-lg sm:text-2xl">EDUHIVE</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center gap-6">
          <Link href="/">
            <li className="hover:underline cursor-pointer">Home</li>
          </Link>
          <Link href="/pages/courses">
            <li className="hover:underline cursor-pointer">Courses</li>
          </Link>
          <Link href="/pages/about">
            <li className="hover:underline cursor-pointer">About</li>
          </Link>
          <Link href="/pages/contact">
            <li className="hover:underline cursor-pointer">Contact</li>
          </Link>
          <Link href="/pages/profile">
            <li className="hover:underline cursor-pointer">Profile</li>
          </Link>
          {/* Dashboard Button */}
          <li>
            <button
              type="button"
              onClick={() => push("/pages/admin_dashboard")}
              className="bg-white px-5 py-2 rounded text-blue-800 font-bold"
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden p-2" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && pathname !== "/pages/login" && (
        <div className="absolute top-16 left-0 w-full bg-blue-800 lg:hidden">
          <ul className="flex flex-col items-center gap-4 py-4">
            <Link href="/">
              <li className="hover:underline cursor-pointer">Home</li>
            </Link>
            <Link href="/pages/courses">
              <li className="hover:underline cursor-pointer">Courses</li>
            </Link>
            <Link href="/pages/about">
              <li className="hover:underline cursor-pointer">About</li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:underline cursor-pointer">Contact</li>
            </Link>
            <Link href="/pages/profile">
              <li className="hover:underline cursor-pointer">Profile</li>
            </Link>
            {/* Dashboard Button in Mobile Menu */}
            <li>
              <button
                type="button"
                onClick={() => push("/pages/admin_dashboard")}
                className="hover:underline cursor-pointer"
              >
                Dashboard
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
