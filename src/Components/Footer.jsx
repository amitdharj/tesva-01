import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import indian from "../assets/indian.jpg"
import Ammex from "../assets/Ammex.png";
import Gpay from "../assets/Gpay.png";
import Mastercard from "../assets/Mastercard.svg";
import Visa from "../assets/visa.png";

export default function Footer() {
  return (
    <footer className="bg-[#fbf5e8] text-gray-800">
      {/* Top grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Newsletter */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-2">Join our mailing list</h3>
          <p className="text-sm text-gray-700 mb-4">For updates on new arrivals, offers, and more</p>
          <div className="flex items-center w-full">
            <input
              aria-label="Email"
              placeholder="Enter Email Address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-l-md bg-white text-sm focus:outline-none"
            />
            <button className="px-4 py-3 bg-white border border-l-0 border-gray-200 rounded-r-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Find Stores</a></li>
            <li><a href="#" className="hover:underline">Start a Return</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Kurta for Men</a></li>
            <li><a href="#" className="hover:underline">Kurta Sets for Men</a></li>
            <li><a href="#" className="hover:underline">Kurta Bundi Sets for Men</a></li>
            <li><a href="#" className="hover:underline">Sherwani for Men</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
            <li><a href="#" className="hover:underline">Wedding Wear for Men</a></li>
            <li><a href="#" className="hover:underline">All Products</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">Our Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Shipping Policy</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Return Policy</a></li>
            <li><a href="#" className="hover:underline">Alteration Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* TASVA */}
        <div>
          <h4 className="font-bold mb-3 uppercase text-sm">TASVA</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Our Story</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Middle row: currency + payment icons */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-3 text-sm">
          <img src={indian} alt="India flag" className="h-4 w-6 object-cover rounded-sm" />
          <span className="font-medium">INR (₹)</span>
        </div>

        <div className="flex items-center gap-3">
          <img src={Visa} alt="Visa" className="h-5" />
          <img src={Mastercard} alt="Mastercard" className="h-5" />
          <img src={Ammex} alt="Amex" className="h-5" />
          <img src={Gpay} alt="GPay" className="h-5" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300" />

      {/* Bottom: Aditya Birla logo, social icons, copyright */}
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col items-center gap-6">
        {/* yaha par company ka loga laga sakte hai in future */}

        <div className="flex items-center gap-4 ">
          {/* Facebook */}
          <a href="https://www.facebook.com/"  target="_blank"  aria-label="Facebook" className="text-gray-700 hover:text-gray-900">
            <FaFacebook className="h-5 w-5 text-blue-600" />
          </a>

          {/* X (Twitter/X) */}
          <a href="https://x.com/home"  target="_blank" aria-label="X" className="text-gray-700 hover:text-gray-900">
            <BsTwitterX  className="h-5 w-5 text-gray-700"/>
          </a>

          {/* YouTube */}
          <a href="https://www.youtube.com/"  target="_blank" aria-label="YouTube" className="text-gray-700 hover:text-gray-900">
            <FaYoutube className="h-5 w-5 text-red-600" />
          </a>

          

          {/* Instagram */}
          <a href="https://www.instagram.com/"  target="_blank"   aria-label="Instagram" className="text-gray-700 hover:text-gray-900">
            <BsInstagram className="h-5 w-5 text-pink-600" />
          </a>
        </div>

        <div className="text-xs text-gray-600">© {new Date().getFullYear()} Company name.</div>
      </div>
    </footer>
  );
}