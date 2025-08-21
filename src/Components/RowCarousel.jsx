// src/components/RowCarousel.jsx
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Haldi from "../assets/Haldi.jpg";
import Mehendi from "../assets/Mehndi.jpg";
import Sangeet from "../assets/Sangeet.jpg";
import Reception from "../assets/reception.webp";
import Wedding from "../assets/Wedding.jpg";
import Pooja from "../assets/Pooja.jpeg";
import Ivory from "../assets/Ivory.webp";
import Textured from "../assets/texture_kurta.webp";
import Classsic_Bandhgala from "../assets/Classic_bandhgala.webp";
import NehruJacket from "../assets/jacket.webp";
import Mirror_work from "../assets/Mirror_work.avif";
import Mojaris from "../assets/Mojaris.webp";
import PrintedSafa from "../assets/Safa.jpeg";
import PocketSquare from "../assets/Pocket.jpeg";

// --- Data stays inside this file ---
const weddingOccasions = [
  { id: 1, title: "Haldi", img: Haldi, price: "From ₹4,999" },
  { id: 2, title: "Mehendi", img: Mehendi, price: "From ₹5,999" },
  { id: 3, title: "Sangeet", img: Sangeet, price: "From ₹6,999" },
  { id: 5, title: "Wedding", img: Wedding, price: "From ₹12,999" },
  { id: 6, title: "Reception", img: Reception, price: "From ₹9,999" },
  { id: 4, title: "Pooja", img: Pooja, price: "From ₹7,999" },
];

const bestSellers = [
  { id: 1, title: "Ivory Embroidered Sherwani",img: Ivory,price: "₹29,999",},
  { id: 2, title: "Textured Kurta Set", img: Textured, price: "₹7,499" },
  { id: 3, title: "Classic Bandhgala", img: Classsic_Bandhgala , price: "₹14,999" },
  { id: 4, title: "Silk Nehru Jacket", img: NehruJacket, price: "₹5,499" },
  { id: 5, title: "Mirror Work Kurta", img: Mirror_work, price: "₹8,999" },
  { id: 7, title: "Mojaris", img: Mojaris, price: "₹2,499" },
  { id: 6, title: "Printed Safa", img: PrintedSafa, price: "₹1,999" },
  { id: 8, title: "Pocket Square Set", img: PocketSquare, price: "₹799" },
];

// --- Reusable Carousel Component ---
function RowCarousel({ title, items }) {
  const ref = useRef(null);

  const scroll = (dir) => {
    if (!ref.current) return;
    const el = ref.current;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll(-1)}
            className="p-2 rounded-full border hover:bg-gray-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll(1)}
            className="p-2 rounded-full border hover:bg-gray-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory"
      >
        {items.map((p) => (
          <a
            key={p.id}
            href="#"
            className="min-w-[60%] md:min-w-[280px] lg:min-w-[300px] snap-start group"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-md shadow-gray-400">
              <img
                src={p.img}
                alt={p.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <p className="text-sm md:text-base">{p.title}</p>
              <p className="text-sm md:text-base font-medium">{p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

// --- Default Export: render both carousels ---
export default function Carousels() {
  return (
    <>
      <RowCarousel title="Shop by Wedding Occasions" items={weddingOccasions} />
      <RowCarousel title="Best Sellers" items={bestSellers} />
    </>
  );
}
