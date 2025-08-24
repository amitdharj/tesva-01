import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import kurti_girls from "../assets/kurti_girls.webp"


export default function StaticBackgroundCarousel() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef(null);

  // Sample slides data
  const slides = [
    {
      id: 1,
      img: kurti_girls,
      title: "Mountain Adventure",
      subtitle: "Discover breathtaking peaks and valleys",
      cta: "Explore Now"
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop",
      title: "Forest Escape",
      subtitle: "Find peace in nature's embrace",
      cta: "Learn More"
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Ocean Views",
      subtitle: "Experience coastal beauty",
      cta: "Book Now"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      title: "Desert Journey",
      subtitle: "Adventure awaits in golden sands",
      cta: "Discover"
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      title: "Desert Journey",
      subtitle: "Adventure awaits in golden sands",
      cta: "Discover"
    }
  ];

  const total = slides.length;
  const s = slides[index];

  const next = () => setIndex((index + 1) % total);
  const prev = () => setIndex(index === 0 ? total - 1 : index - 1);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(next, 2500);
      return () => clearInterval(interval);
    }
  }, [index, isHovered]);

  return (
    <section 
      className="relative" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      {/* Static Background */}
      {/* <div 
        className="absolute inset-0 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full"
        style={{
          backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      /> */}

      {/* Alternative static background options - uncomment one of these instead of the gradient above */}
      
      <div 
        className="absolute inset-0 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
     

      <div className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] w-full overflow-hidden">
        {/* Circular Sliding Images Container */}
        <div className="absolute inset-0 flex items-center justify-center perspective-2000">
          <div className="relative w-full max-w-8xl h-3/4 flex items-center justify-center">
            {slides.map((slide, idx) => {
              const position = (idx - index + total) % total;
              const isActive = position === 0;
              const isNext = position === 1;
              const isPrev = position === total - 1;
              const isVisible = position <= 2 || position >= total - 2;
              
              // Calculate circular positioning
              const angle = (position * 360) / total;
              const radius = 300;
              const x = Math.sin((angle * Math.PI) / 180) * radius;
              const z = Math.cos((angle * Math.PI) / 180) * radius;
              const scale = isActive ? 1 : isNext || isPrev ? 0.7 : 0.6;
              const opacity = isActive ? 1 : isNext || isPrev ? 0.8 : 0.5;
              const rotateY = isActive ? 0 : position < total / 2 ? -25 : 25;
              
              return (
                <div
                  key={`${slide.id}-${idx}`}
                  className={`absolute transition-all duration-1000 ease-out cursor-pointer ${
                    isVisible ? 'block' : 'hidden'
                  }`}
                  style={{
                    transform: `
                      translateX(${x}px) 
                      translateZ(${z}px) 
                      rotateY(${rotateY}deg) 
                      scale(${scale})
                    `,
                    opacity: opacity,
                    zIndex: isActive ? 30 : isNext || isPrev ? 20 : 10,
                    transformStyle: 'preserve-3d',
                    transition: 'all 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                  onClick={() => setIndex(idx)}
                >
                  <div 
                    className={`relative overflow-hidden shadow-2xl transition-all duration-800 ease-out ${
                      isActive 
                        ? 'w-96 h-72 rounded-3xl' 
                        : 'w-72 h-52 rounded-2xl'
                    }`}
                  >
                    <img
                      src={slide.img}
                      alt={slide.title}
                      loading="lazy"
                      draggable="false"
                      className="w-full h-full object-cover transition-all duration-800 ease-out"
                      style={{
                        transform: isActive ? 'scale(1.1)' : 'scale(1)',
                        filter: isActive ? 'brightness(1.1) contrast(1.1)' : 'brightness(0.9)'
                      }}
                    />
                    
                    

                    {/* Glow effect for active slide */}
                    {isActive && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl blur-xl -z-10 animate-pulse"></div>
                    )}
                  </div>
                  
                  {/* Preview text for non-active slides */}
                  {!isActive && (isNext || isPrev) && (
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center transition-all duration-500">
                      <p className="text-sm font-medium opacity-80 drop-shadow-lg">{slide.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        

        {/* Navigation Controls */}
        <button 
          onClick={prev} 
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft size={24} className="text-gray-800" />
        </button>
        <button 
          onClick={next} 
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg z-20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight size={24} className="text-gray-800" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-8 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === index 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}