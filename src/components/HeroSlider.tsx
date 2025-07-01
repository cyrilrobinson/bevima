import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Powering the Caribbean\'s Future',
    subtitle: 'Leading coal mining operations delivering energy security through responsible extraction and sustainable mining practices.',
    cta: 'Explore Our Operations'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/162568/mining-quarry-stone-coal-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Premium Iron Ore Excellence',
    subtitle: 'World-class iron ore products meeting international standards for global steel production and infrastructure development.',
    cta: 'Our Products'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Sustainable Mining Leadership',
    subtitle: 'Committed to environmental stewardship, community development, and creating lasting positive impact for future generations.',
    cta: 'Sustainability Report'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/3943725/pexels-photo-3943725.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Innovation in Mining Technology',
    subtitle: 'Embracing cutting-edge technology and automation to enhance safety, efficiency, and environmental performance.',
    cta: 'Technology Solutions'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Empowering Communities',
    subtitle: 'Creating opportunities through job creation, skills development, and socio-economic development programs.',
    cta: 'Community Impact'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Safety First Culture',
    subtitle: 'Zero harm philosophy ensuring the highest safety standards across all our mining operations and facilities.',
    cta: 'Safety Standards'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Global Market Leadership',
    subtitle: 'Delivering premium coal and iron ore products to international markets with consistent quality and reliability.',
    cta: 'Global Reach'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/162568/mining-quarry-stone-coal-162568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    title: 'Environmental Excellence',
    subtitle: 'Leading environmental rehabilitation and biodiversity conservation initiatives across our mining operations.',
    cta: 'Environmental Programs'
  }
];

const HeroSlider = () => {
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

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-3xl">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-blue-500 scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-black/30 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default HeroSlider;