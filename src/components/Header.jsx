import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/context/CartContext";

const Header = ({setQuery}) => {
  const [isOpen, setIsOpen] = useState(false);
    const { cartItems, loginPopup, setLoginPopup} = useCart();
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  console.log("cartItems header",cartItems);

  return (
    <header >
      <div className="bg-white shadow-md w-full">
        <div className="lg:px-10 px-5 py-3 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2">
            {/* Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={handleToggle}
                className="text-gray-700 focus:outline-none cursor-pointer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={
                      !isOpen ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"
                    }
                  />
                </svg>
              </button>
            </div>
            <Image
              src="/assets/logoCampus.png"
              className="object-cover"
              alt="logo"
              width={35}
              height={35}
            />
            <p className="md:text-2xl text-md font-bold text-black text-nowrap">
              Shopping <span className="text-teal-500">Cart</span>
            </p>
          </div>
          <div className="md:hidden">
            <div className="flex justify-end items-center gap-5 text-lg font-semibold">
              <div onClick={()=>setLoginPopup(true)} className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} className="mr-0.5" />
              </div>
              <Link href="/cart" className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="mr-0.5"/>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
          <div className="md:block hidden">
            <div className="flex justify-center items-center gap-10 text-lg font-semibold">
              <div onClick={()=>setLoginPopup(true)} className="cursor-pointer">
                <FontAwesomeIcon icon={faUser} className="mr-0.5" /> Login
              </div>
              <Link href="/cart" className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="mr-0.5"/> Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute z-50 w-full left-0 lg:hidden md:px-10 px-4 py-4 bg-gray-100 h-96 max-h-96">
            <nav className="flex flex-col space-y-4">
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Home
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  About
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Contact
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  General Query
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Support
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Terms & Conditions
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Privacy Policy
              </Link>
              <Link href="/" 
                className="text-sm font-medium text-gray-700 hover:text-blue-500 hover:underline underline-offset-2"
              >
                  Refund & Cancellation
              </Link>
              <button onClick={()=>setLoginPopup(true)}
                className="text-center text-white bg-teal-500 hover:bg-teal-400 px-7 py-2 text-sm font-medium rounded-md shadow-md transition ease-in-out"
              >
                <FontAwesomeIcon icon={faUser} className="mr-0.5" /> Login 
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
