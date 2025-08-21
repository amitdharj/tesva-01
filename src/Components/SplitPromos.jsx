import React from "react";
import Groom from "../assets/grooms.jpeg"
import Friends from "../assets/friends.png"


//split

// ----- Split Promo Banners -----
function SplitPromos() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-2 gap-6">
      <div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-gray-600">
        <img src={Groom} alt="For Grooms" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-6 bottom-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">For Grooms</h3>
          <button className="mt-3 px-5 py-2 bg-white text-gray-900 rounded-full hover:bg-yellow-100">Shop Now</button>
        </div>
      </div>
      <div className="relative h-[340px] md:h-[420px] overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-gray-600" >
        <img src={Friends} alt="Friends & Family" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute left-6 bottom-6 text-white">
          <h3 className="text-2xl md:text-3xl font-semibold">Friends & Family</h3>
          <button className="mt-3 px-5 py-2 bg-white text-gray-900 rounded-full hover:bg-yellow-100">Explore</button>
        </div>
      </div>
    </section>
  );
}

export default SplitPromos;