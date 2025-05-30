import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";


const Footer = () => {
  return (
    <>
      <div className="bg-gray-50 text-gray-700 pt-10">
        <div className="container mx-auto pb-5 pt-2">
          <div className="grid md:grid-cols-4 lg:gap-6 md:gap-3 gap-5 mx-5">
            {/* Resources */}
            <div>
              <h3 className="text-md font-semibold mb-3">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Home</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">About</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Contact</Link>
                </li>
                <li>
                  <Link href="/add-product" className="hover:underline text-gray-500 hover:text-gray-700">Add Product</Link>
                </li>
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h3 className="text-md font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Support</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Refund & Cancellation</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h3 className="text-md font-semibold mb-3">Contact Us</h3>
              <Link
                href="mailto:rakeshspm2323@gmail.com"
                className="flex space-x-2 items-center text-sm hover:underline text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <p>rakeshspm2323@gmail.com</p>
              </Link>
              <Link
                href="tel:+918084863546"
                className="flex space-x-2 items-center text-sm mt-3 hover:underline text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faPhone} />
                <p>+91 8084863546</p>
              </Link>
              <p className="text-sm flex items-center space-x-2 mt-3 text-gray-500 hover:text-gray-700">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Patna, Bihar, India</span>
              </p>
              <div className="flex space-x-5 mt-2">
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-orange-500 text-[20px]"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Link>
              </div>
            </div>
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/logoCampus.png"
                  width={100}
                  height={100}
                  alt="Logo"
                  className="w-10 h-10"
                />
                <h2 className="text-xl font-bold lg:text-nowrap">
                  Shopping <span className="text-teal-500">Cart</span>
                </h2>
              </div>
              <p className="mt-2 font-semibold xl:text-nowrap md:text-wrap text-nowrap">Seamless Shopping. </p>
              <p className="text-sm mt-1">
                Manage your selected courses and resources with ease. Review, update, 
                and proceed to checkout whenever you are ready to continue your learning journey.                </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <hr />
          <div className="p-2">
            <p className="text-xs">
                *Caution : Beware of Fake Promotions or Offers *Please be cautious and do not engage with any promotional emails, 
                SMS, or web links that ask you to click on a link and provide your personal details. 
                All authorized communications from Shopping Cart Services will come exclusively from our registered domains: 
                @shoppingcart.com, or @shoppingcart.in. For any inquiries, you can also reach us through our official WhatsApp channel at 8084863546. 
                * Shopping Cart Services is not liable for any fraudulent or misleading communications that do not originate from our official domains.
            </p>
          </div>
          <hr />                  
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2 p-2">
            <div className="flex lg:justify-center items-center">
              <span className="dark:text-gray-400 md:text-sm text-xs">
                © 2025 Copyright 1986. All Rights Reserved.
              </span>
              <span className="dark:text-gray-400 md:text-sm text-xs md:block hidden ml-1">
                | Country India
              </span>
              <Image
                src="/assets/indian-circle.png"
                width={100}
                height={100}
                alt="Logo"
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
