import React, { useState } from "react";
import Sherwani from "../assets/Sherwani.webp";
import Kurtas from "../assets/Kurta.webp";
import Bandhgalas from "../assets/bandhgalas.jpg";
import NehruJackets from "../assets/jacket.webp";
import Footwear from "../assets/footwear.avif";

// Add hover images - you'll need to import these or use different images
// import SherwaniHover from "../assets/Sherwani-hover.webp" // Add your hover image
const SherwaniHover = Kurtas; // Using Kurtas as placeholder for hover image

const categories = [
  {
    id: 1,
    title: "Sherwanis",
    img: Sherwani,
    hoverImg: SherwaniHover, // Add hover image
  },
  {
    id: 2,
    title: "Kurtas",
    img: Kurtas,
    hoverImg: Bandhgalas,
  },
  { id: 3, title: "Bandhgalas", img: Bandhgalas },
  { id: 4, title: "Nehru Jackets", img: NehruJackets },
  { id: 5, title: "Accessories", img: Sherwani },
  { id: 6, title: "Footwear", img: Footwear },
];

// ----- Category Grid -----
function CategoryTiles() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">
        Shop by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
        {categories.map((c) => (
          <a
            key={c.id}
            href="#"
            className="group block"
            onMouseEnter={() => setHoveredCategory(c.id)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-100 group-hover:scale-110 transition-transform duration-300 hover:shadow-md shadow-gray-400 relative">
              {/* Default Image */}
              <img
                src={c.img}
                alt={c.title}
                className={`h-full w-full object-cover transition-opacity duration-300 ${
                  hoveredCategory === c.id && c.hoverImg
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              {/* Hover Image - Only for categories that have hoverImg */}
              {c.hoverImg && (
                <img
                  src={c.hoverImg}
                  alt={`${c.title} - Alternative`}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                    hoveredCategory === c.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
            <p className="mt-3 text-center text-sm md:text-base">{c.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default CategoryTiles;
