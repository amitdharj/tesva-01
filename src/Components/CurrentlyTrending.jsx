import React from "react";
import Heritage from "../assets/Heritage.png"
import  Muted from "../assets/Muted.png"
import Workday from "../assets/Workday.png"
import Trending from "../assets/trending.webp";

const trendingItems = [
  {
    title: "WORKDAY NEUTRALS",
    desc: "Your refined weekday essentials in soft greys, sage, sand and more.",
    img: Workday,
    link: "#",
  },
  {
    title: "HERITAGE DETAILING",
    desc: "Kurtas & Sherwanis featuring intricate embroidery and antique finishes.",
    img: Heritage,
    link: "#",
  },
  {
    title: "MUTED MONSOON TONES",
    desc: "Muted greens, desert taupes, and storm greys; grounded hues to reflect the season in style.",
    img: Muted,
    link: "#",
  },
];

const CurrentlyTrending = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
        {/* Left Large Image */}
        <div className="relative">
          <img
            src={Trending}    // agar image ke  src me = sign ho to use curly braces or agar : sign ho to use normal string
            alt="Know More"
            className="w-full h-full object-cover rounded-lg shadow-md  shadow-gray-400"
          />
          
        </div>

        {/* Right Grid */}
        <div className="md:col-span-3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">
            Currently Trending
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingItems.map((item, idx) => (
              <div key={idx}>
                <div className="relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-76 object-cover rounded-lg hover:scale-108 transition-transform duration-300 hover:shadow-sm shadow-gray-600"
                  />
                  <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                    {item.title}
                  </div>
                </div>
                <p className="text-sm text-gray-700 mt-3">{item.desc}</p>
                <a
                  href={item.link}
                  className="text-black font-medium underline text-sm"
                >
                  EXPLORE
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
