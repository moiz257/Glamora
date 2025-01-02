'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    title: 'Spring Collection 2025',
    description: 'Discover the latest trends in fashion',
    cta: 'Shop Now',
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    title: 'Summer Essentials',
    description: 'Get ready for the summer season',
    cta: 'Explore More',
  },
  {
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
    title: 'New Arrivals',
    description: 'Check out our latest products',
    cta: 'View Collection',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen bg-gray-900">
      <div className="absolute inset-0 flex items-center justify-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg md:text-xl mb-6">{slide.description}</p>
              <Link href="/shop">
              <button className="px-6 py-3 bg-[#6C4F3D] text-white  text-lg hover:bg-[#A47C65] active:scale-95 transition-all duration-300 font-semibold rounded-lg shadow-lg ">
                {slide.cta}
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full text-white hover:bg-gray-700 transition"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
