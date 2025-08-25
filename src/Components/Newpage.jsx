import React from "react";

const products = [
  {
    id: 1,
    tag: "Mens",
    name: "Deep Blue and Wine Imperial Patterned Indo Western Set",
    price: "₹ 19,999",
    img: "/Mens_outfit.jpg",
  },
  {
    id: 2,
    tag: "SHAADI LOOK",
    name: "Peachy Festive Sherwani",
    price: "₹ 34,999",
    img: "/new.webp",
  },
  {
    id: 3,
    tag: "",
    name: "Sapphire Charm Kurta",
    price: "₹ 1,999",
    img: "/Outfit.jpg",
  },
  {
    id: 4,
    tag: "Haldi",
    name: "Dark Blue And Teal Green Indo Western Set with Chowkadi Motifs And Patra Work",
    price: "₹ 6,999",
    img: "/indian_wedding.webp",
  },
];

const MostLoved = () => {
  return (
    <section className="bg-[rgb(255,252,243)] py-10">
      <h2 className="text-4xl text-[rgb(66,66,66)] font-serif text-center mb-16 tracking-wide">MOST LOVED</h2>
      <div className="flex justify-center flex-wrap gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-zinc-100 p-3 w-72 h-96 shadow-sm rounded-md">
            <div className="relative">
              <img src={product.img} alt={product.name} className="rounded-sm h-64 w-full object-cover" />
              <button className="absolute top-2 right-2 text-xl">♡</button>
            </div>
            {product.tag && (
              <span className="inline-block bg-orange-500 text-white text-xs px-2 py-1 mt-2 rounded-sm">
                {product.tag}
              </span>
            )}
            <p className="mt-2 text-sm text-gray-800">{product.name}</p>
            <p className="mt-1 font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostLoved;
