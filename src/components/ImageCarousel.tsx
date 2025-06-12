import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface CarouselImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

const images: CarouselImage[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop",
    title: "Морские прогулки",
    description: "Откройте красоту Черного моря с нашими яхтами",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&h=600&fit=crop",
    title: "Горные походы",
    description: "Покорите вершины Кавказских гор",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&h=600&fit=crop",
    title: "Джип-туры",
    description: "Исследуйте скрытые уголки Абхазии",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=600&fit=crop",
    title: "Дайвинг",
    description: "Погрузитесь в подводный мир",
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-2xl">
      {/* Images */}
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0 relative">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-3xl font-montserrat font-bold mb-2">
                  {image.title}
                </h3>
                <p className="text-lg opacity-90">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0"
      >
        <Icon name="ChevronLeft" size={20} />
      </Button>

      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white border-0"
      >
        <Icon name="ChevronRight" size={20} />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
