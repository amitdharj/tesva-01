import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import newhero from "../assets/new.webp";
import accessoriees from "../assets/accere.webp";
import Kurti from "../assets/kurti_girls.webp";

const heroSlides = [
  { id: 1, img: newhero, title: "The Wedding Edit", subtitle: "Regal silhouettes, crafted for celebrations", cta: "Shop Wedding" },
  { id: 2, img: accessoriees, title: "Festive New Arrivals", subtitle: "Luxurious fabrics. Modern details.", cta: "Explore New In" },
  { id: 3, img: Kurti, title: "Accessories", subtitle: "Finish the look with finesse", cta: "Shop Accessories" },
];

// ----- Hero Carousel (infinite loop using clones) -----
function Hero() {
  const slidesCount = heroSlides.length;
  // build slides with clones: [last, ...slides, first]
  const slides = [heroSlides[slidesCount - 1], ...heroSlides, heroSlides[0]];
  const total = slides.length; // slidesCount + 2

  const [index, setIndex] = useState(1); // start at first real slide (index=1)
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const isHovering = useRef(false);
  const transitioning = useRef(false);

  const goTo = (nextIndex, animate = true) => {
    const track = trackRef.current;
    if (!track) return;
    transitioning.current = animate;
    track.style.transition = animate ? "transform 1000ms cubic-bezier(.17,.67,.5,.96)" : "none";
    const percent = -(nextIndex * (100 / total));
    track.style.transform = `translate3d(${percent}%,0,0)`;
    setIndex(nextIndex);
  };

  const next = () => {
    if (transitioning.current) return; // avoid spamming while animating
    goTo(index + 1, true);
  };
  const prev = () => {
    if (transitioning.current) return;
    goTo(index - 1, true);
  };

  // autoplay
  useEffect(() => {
    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!isHovering.current) next();
      }, 2400);
    };
    start();
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, [index]); // index included only to keep closure fresh

  // handle transitionend to snap when we're on cloned slides
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onEnd = () => {
      transitioning.current = false;
      // if moved to cloned last (index === total - 1) -> snap to 1 (first real) without animation
      if (index === total - 1) {
        track.style.transition = "none";
        const percent = -(1 * (100 / total));   // positive
        track.style.transform = `translate3d(${percent}%,0,0)`;
        setIndex(1);
      }
      // if moved to cloned first (index === 0) -> snap to slidesCount (last real)
      if (index === 0) {
        track.style.transition = "none";
        const percent = -(slidesCount * (100 / total));  //positive
        track.style.transform = `translate3d(${percent}%,0,0)`;
        setIndex(slidesCount);
      }
    };
    track.addEventListener("transitionend", onEnd);
    return () => track.removeEventListener("transitionend", onEnd);
  }, [index, slidesCount, total]);

  // initialize position (no animation)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.style.transition = "none";
    const percent = -(1 * (100 / total));  // positive
    track.style.transform = `translate3d(${percent}%,0,0)`;
  }, [total]);

  const handleMouseEnter = () => (isHovering.current = true);
  const handleMouseLeave = () => (isHovering.current = false);

  const s = heroSlides[(index - 1 + slidesCount) % slidesCount];

  return (
    <section className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="relative md:h-[90vh] h-screen w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex h-full will-change-transform"
          style={{
            width: `${100 * total}%`,
              // changed sign here too
            transform: `translate3d(-${index * (100 / total)}%,0,0)`,
          }}
        >
          {slides.map((slide, idx) => (
            <div key={`${slide.id}-${idx}`} className="flex-shrink-0 h-full relative" style={{ width: `${100 / total}%` }}>
              <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full  object-center" draggable="false" />
            </div>
          ))}
        </div>

        {/* overlay + content */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pointer-events-none">
          <h1 className="text-3xl md:text-5xl font-semibold drop-shadow">{s.title}</h1>
          <p className="mt-3 md:mt-4 text-base md:text-lg opacity-90">{s.subtitle}</p>
          <button className="mt-6 md:mt-8 px-6 py-3 md:px-8 md:py-3 rounded-full bg-white text-gray-900 hover:bg-yellow-100 transition pointer-events-auto">{s.cta}</button>
        </div>

        {/* controls */}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"><ChevronLeft /></button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow z-10"><ChevronRight /></button>
      </div>
    </section>
  );
}

export default Hero;