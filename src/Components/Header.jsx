import { useRef, useState, useEffect } from "react";
import {
    Search,
    Heart,
    User,
    ShoppingBag,
    ChevronDown,
    ChevronLeft,
    ChevronRight,
    Menu,
    X,
} from "lucide-react";
import indian from "../assets/indian.jpg";
import FriendsFamily from "../assets/Friends&Family.jpg";
import HaldiMales from "../assets/HaldiMale.jpeg";

// ...existing code...
// small local data so the menu can render (replace with imported data if you have it)
const weddingOccasions = [
  { id: 1, title: "Haldi" },
  { id: 2, title: "Mehendi" },
  { id: 3, title: "Sangeet" },
  { id: 4, title: "Cocktail" },
  { id: 5, title: "Wedding" },
  { id: 6, title: "Reception" },
];

// ----- Header with Mega Menu -----
function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white/95 backdrop-blur shadow-sm">
      {/* Top Bar */}
      <div className="bg-yellow-100 text-sm flex justify-end items-center px-6 py-2 gap-4">
        <div className="flex items-center gap-2">
          <img src={indian} alt="India Flag" className="h-4 w-6 object-cover rounded-[2px]" />
          <span className="font-semibold text-xs">INR (₹)</span>
        </div>
        <button className="hover:underline text-xs font-semibold">Find Stores</button>
        <button className="hover:underline text-xs font-semibold">Track Orders</button>
      </div>

      {/* Main Bar */}
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <div className="flex items-center gap-2">
          <img src="/tasva-logo.png" alt="TASVA" className="h-8" />
          <span className="text-xl font-semibold text-yellow-700 tracking-wide">TASVA</span>
        </div>

        {/* keep top nav visually for reference but hide on desktop in favor of right sidebar if needed
            (desktop sidebar will show the lists). This nav remains for small screens >= md if you want. */}
        <nav className="hidden md:flex gap-8 text-sm font-medium relative">
          <a className="hover:text-yellow-700" href="#">New Arrival</a>

          {/* wrapper handles hover + click toggle and keeps menu open while pointer is inside */}
          <div
            className="relative"
            tabIndex={0}
            onClick={() => setOpenMenu(openMenu === "wedding" ? null : "wedding")} // toggle on click
            onMouseEnter={() => setOpenMenu("wedding")}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu("wedding")}
            onBlur={() => setOpenMenu(null)}
            aria-haspopup="menu"
            aria-expanded={openMenu === "wedding"}
          >
            <button className="hover:text-yellow-700 border-b-2 border-transparent  group-hover:border-yellow-700 pb-1">Wedding</button>

            {openMenu === "wedding" && (
              <div
                className="absolute left-0 top-full mt-1 w-[865px] bg-white shadow-xl p-8 grid grid-cols-3 gap-4 z-10 rounded-3xl"
                onMouseEnter={() => setOpenMenu("wedding")} // keep open when hovering dropdown
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="space-y-4 text-sm">
                  <h4 className="font-bold">FOR GROOMS</h4>
                  <h4 className="font-bold">FOR FRIENDS & FAMILY</h4>
                  <h4 className="font-bold">SHOP BY OCCASION</h4>
                  <ul className="space-y-1 text-gray-700">
                    {weddingOccasions.map(o => (
                      <li key={o.id}><a href="#" className="hover:text-yellow-700">{o.title}</a></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <img src= {FriendsFamily} alt="Friends & Family" className="w-full h-72 object-cover rounded-xl" />
                  <p className="text-center mt-3 text-sm">For Friends & Family</p>
                </div>
                <div>
                  <img src={HaldiMales} alt="Haldi" className="w-full h-72 object-cover rounded-xl" />
                  <p className="text-center mt-3 text-sm">Haldi</p>
                </div>
              </div>
            )}
          </div>

          {/* Clothing: full-screen width dropdown that stays while mouse is inside */}
          <div
            className="relative"
            tabIndex={0}
            onClick={() => setOpenMenu(openMenu === "clothing" ? null : "clothing")}
            onMouseEnter={() => setOpenMenu("clothing")}
            onMouseLeave={() => setOpenMenu(null)}
            onFocus={() => setOpenMenu("clothing")}
            onBlur={() => setOpenMenu(null)}
            aria-haspopup="menu"
            aria-expanded={openMenu === "clothing"}
          >
            <button className="hover:text-yellow-700 border-b-2 border-transparent pb-1">Clothing</button>

            {openMenu === "clothing" && (
              <div
                className="absolute left-0 top-full mt-0 w-screen bg-white shadow-xl z-50"
                onMouseEnter={() => setOpenMenu("clothing")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <div className="max-w-7xl mx-auto px-2 py-8 grid grid-cols-4 gap-8">
                  {/* Left: categories list */}
                  <div>
                    <h4 className="font-semibold mb-4">KURTAS & BUNDIS</h4>
                    <ul className="space-y-3 text-sm text-gray-800">
                      <li><a href="#" className="hover:underline">Single Kurtas</a></li>
                      <li><a href="#" className="hover:underline">Kurta Sets</a></li>
                      <li><a href="#" className="hover:underline">Kurta Bundi Sets</a></li>
                      <li><a href="#" className="hover:underline">Bundis & Nehru Jackets</a></li>
                      <li><a href="#" className="hover:underline">Shirts</a></li>
                      <li><a href="#" className="hover:underline">Bottoms</a></li>
                    </ul>
                  </div>

                  {/* Middle: large promo images */}
                  <div className="col-span-2 grid grid-cols-2 gap-6 items-start">
                    <a href="#" className="block">
                      <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                        <img src={FriendsFamily} alt="Kurta Sets" className="w-full h-full object-cover" />
                      </div>
                      <p className="mt-3 text-sm text-gray-800">Kurta Sets</p>
                    </a>

                    <a href="#" className="block">
                      <div className="aspect-[3/4] overflow-hidden rounded-md bg-gray-100">
                        <img src={HaldiMales} alt="Sherwanis" className="w-full h-full object-cover" />
                      </div>
                      <p className="mt-3 text-sm text-gray-800">Sherwanis</p>
                    </a>
                  </div>

                  {/* Right: additional links */}
                  <div>
                    <h4 className="font-semibold mb-4">BANDHGALA & DINNER JACKET</h4>
                    <ul className="space-y-3 text-sm text-gray-800">
                      <li><a href="#" className="hover:underline">Bandhgala Suit for Men</a></li>
                      <li><a href="#" className="hover:underline">Dinner Jackets</a></li>
                      <li className="mt-6 font-semibold">PATU PANCHA</li>
                      <li><a href="#" className="hover:underline">Accessories</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a className="hover:text-yellow-700" href="#">Accessories</a>
          <a className="hover:text-yellow-700" href="#">Blog</a>
        </nav>

        <div className="flex items-center gap-5">
          <Search className="w-5 h-5" />
          <Heart className="w-5 h-5" />
          <User className="w-5 h-5" />
          <ShoppingBag className="w-5 h-5" />
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 right-0 w-[80%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        md:hidden
      `}>
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 flex justify-between items-center border-b">
            <span className="font-semibold">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex-1 overflow-y-auto">
            <div className="flex flex-col py-2">
              <a href="#" className="px-6 py-4 hover:bg-gray-50 text-sm font-medium">
                New Arrival
              </a>
              <button 
                className="px-6 py-4 hover:bg-gray-50 text-sm font-medium text-left flex justify-between items-center"
                onClick={() => setOpenMenu(openMenu === "mobile-wedding" ? null : "mobile-wedding")}
              >
                Wedding
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openMenu === "mobile-wedding" ? "rotate-180" : ""}`} />
              </button>
              {openMenu === "mobile-wedding" && (
                <div className="bg-gray-50 py-2">
                  {weddingOccasions.map(o => (
                    <a
                      key={o.id}
                      href="#"
                      className="px-8 py-3 hover:bg-gray-100 text-sm block"
                    >
                      {o.title}
                    </a>
                  ))}
                </div>
              )}
              <a href="#" className="px-6 py-4 hover:bg-gray-50 text-sm font-medium">
                Clothing
              </a>
              <a href="#" className="px-6 py-4 hover:bg-gray-50 text-sm font-medium">
                Accessories
              </a>
              <a href="#" className="px-6 py-4 hover:bg-gray-50 text-sm font-medium">
                Blog
              </a>
            </div>
          </nav>

          {/* Sidebar Footer */}
          <div className="border-t p-4">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-sm font-medium hover:text-yellow-700">Find Stores</a>
              <a href="#" className="text-sm font-medium hover:text-yellow-700">Track Orders</a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Right Sidebar (lists shown here on PC) */}
      <div className="hidden md:flex flex-col fixed right-0 top-[116px] h-[calc(100vh-116px)] w-72 bg-white border-l shadow-sm p-4 z-40">
        <nav className="flex-1 overflow-y-auto">
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm font-medium">New Arrival</a>

          <div className="mt-2">
            <button
              className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 flex justify-between items-center"
              onClick={() => setOpenMenu(openMenu === "sidebar-wedding" ? null : "sidebar-wedding")}
            >
              Wedding
              <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === "sidebar-wedding" ? "rotate-180" : ""}`} />
            </button>

            {openMenu === "sidebar-wedding" && (
              <div className="mt-2">
                <ul className="space-y-1">
                  {weddingOccasions.map(o => (
                    <li key={o.id}>
                      <a href="#" className="block px-4 py-2 text-sm rounded hover:bg-gray-100">{o.title}</a>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 grid grid-cols-1 gap-2">
                  <img src={FriendsFamily} alt="Friends & Family" className="w-full h-28 object-cover rounded" />
                  <img src={HaldiMales} alt="Haldi" className="w-full h-28 object-cover rounded" />
                </div>
              </div>
            )}
          </div>

          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm font-medium mt-3">Clothing</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm font-medium mt-1">Accessories</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-gray-50 text-sm font-medium mt-1">Blog</a>
        </nav>

        <div className="mt-4 border-t pt-3">
          <a href="#" className="block text-sm font-medium hover:text-yellow-700">Find Stores</a>
          <a href="#" className="block text-sm font-medium hover:text-yellow-700 mt-2">Track Orders</a>
        </div>
      </div>
    </header>
  );
}

export default Header;