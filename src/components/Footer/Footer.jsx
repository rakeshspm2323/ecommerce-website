import Link from "next/link";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faSquareWhatsapp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      {/* Upper Footer */}
      <div className="bg-gray-100 text-gray-700 py-5">
        <div className="container-wrapper pb-5 pt-5">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-6 mx-5">
            <div>
              <h3 className="text-md font-semibold mb-3">Popular Tours</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Bodhgaya</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rajgir</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rohtas</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Valmiki</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Kakolat</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-3">Popular Tours</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Bodhgaya</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rajgir</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rohtas</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Valmiki</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Kakolat</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-3">Popular Tours</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Bodhgaya</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rajgir</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rohtas</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Valmiki</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Kakolat</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-3">Popular Tours</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Bodhgaya</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rajgir</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Rohtas</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Valmiki</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Tour to Kakolat</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Footer */}
      <div className="bg-gray-50 text-gray-700 pt-5">
        <div className="container-wrapper pb-10 pt-5">
          <div className="grid md:grid-cols-4 lg:gap-6 md:gap-3 gap-5 mx-5">
            {/* Logo & Description */}
            {/* <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/sarthi.png"
                  width={100}
                  height={100}
                  alt="Apna Sarthi Logo"
                  className="w-12 h-12"
                />
                <h2 className="text-xl font-bold text-blue-950">
                  Apka Sarthi
                </h2>
              </div>
              <p className="mt-2 font-medium">Keep travelling all year round!</p>
              <p className="text-xs">
                Your trusted travel companion for exploring the rich cultural
                heritage and spiritual destinations of Bihar.
              </p>
              <div className="flex space-x-5 mt-4">
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
            </div> */}
            {/* Resources */}
            <div>
              <h3 className="text-md font-semibold mb-3">Resources</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="hover:underline text-gray-500 hover:text-gray-700">Home</Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:underline text-gray-500 hover:text-gray-700">About</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline text-gray-500 hover:text-gray-700">Contact</Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:underline text-gray-500 hover:text-gray-700">Blog</Link>
                </li>
                <li>
                  <Link href="/review" className="hover:underline text-gray-500 hover:text-gray-700">Review</Link>
                </li>
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h3 className="text-md font-semibold mb-3">Useful Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Support</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Query</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Cancel Booking</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline text-gray-500 hover:text-gray-700">Terms & Conditions</Link>
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
            </div>
            {/* Logo & Description */}
            <div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/assets/sarthi.png"
                  width={100}
                  height={100}
                  alt="Apna Sarthi Logo"
                  className="w-12 h-12"
                />
                <h2 className="text-xl font-bold text-blue-950">
                  Apka Sarthi
                </h2>
              </div>
              <p className="mt-2 font-medium">Keep travelling all year round!</p>
              <p className="text-xs">
                Your trusted travel companion for exploring the rich cultural
                heritage and spiritual destinations of Bihar.
              </p>
              <div className="flex space-x-5 mt-4">
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
          </div>
        </div>
        <div className="container-wrapper">
          <hr />
          <div className="py-2">
            <p className="text-xs">
                *Caution: Beware of Fake Promotions or Offers *Please be cautious and do not engage with any promotional emails, 
                SMS, or web links that ask you to click on a link and provide your personal details. 
                All authorized communications from Apka Sarthi Services will come exclusively from our registered domains: 
                @apkasarthi.com, @apkasarthi.online, or @apkasarthi.in. For any inquiries, you can also reach us through our official WhatsApp channel at 8084863546. 
                * Apka Sarthi Services is not liable for any fraudulent or misleading communications that do not originate from our official domains.
            </p>
          </div>
          <hr />                  
          <div className="flex lg:flex-row flex-col lg:items-center justify-between gap-2 py-1.5">
            <div className="flex lg:justify-center items-center">
              <span className="dark:text-gray-400 md:text-sm text-xs">
                © 2025 Copyright 1986. All Rights Reserved.
              </span>
              <span className="dark:text-gray-400 md:text-sm text-xs md:block hidden ml-1">
                | Country India
              </span>
              <Image
                width={80}
                height={80}
                src="/assets/indian-circle.png"
                className="h-6 w-6 object-cover ml-2"
                alt="indian flag"
              />
              <Image
                width={80}
                height={80}
                src="/assets/swastik.png"
                className="h-6 w-6 object-contain ml-2"
                alt="swastik"
              />
            </div>
            <div className="flex lg:justify-center items-center md:gap-2 gap-3">
              <Image
                src="/assets/Affiliation 1.png"
                width={80}
                height={80}
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 1"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 2.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 2"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 3.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 3"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 4.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 4"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 5.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 5"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 6.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 6"
              />
              <Image
                width={80}
                height={80}
                src="/assets/Affiliation 1.png"
                className="md:h-10 md:w-10 w-8 h-8 object-contain"
                alt="Affiliation 1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
