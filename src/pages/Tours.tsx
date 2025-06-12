import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";

const categories = [
  { id: "all", name: "Все туры", icon: "MapPin" },
  { id: "sea", name: "Морские прогулки", icon: "Waves" },
  { id: "horse", name: "Конные маршруты", icon: "Heart" },
  { id: "jeep", name: "Джип-туры", icon: "Car" },
  { id: "diving", name: "Дайвинг", icon: "Fish" },
  { id: "hiking", name: "Пешие походы", icon: "Mountain" },
  { id: "excursions", name: "Экскурсии", icon: "Camera" },
];

const allTours = [
  {
    id: 1,
    title: "Морская прогулка к дельфинам",
    description:
      "Незабываемое путешествие на яхте с возможностью увидеть дельфинов в их естественной среде обитания.",
    price: 3500,
    duration: "3 часа",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    rating: 4.8,
    reviewCount: 124,
    category: "sea",
    isPopular: true,
  },
  {
    id: 2,
    title: "Джип-тур по горам Абхазии",
    description:
      "Экстремальное путешествие по горным дорогам с посещением водопадов и древних крепостей.",
    price: 4200,
    duration: "6 часов",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=300&fit=crop",
    rating: 4.9,
    reviewCount: 89,
    category: "jeep",
    isPopular: true,
  },
  {
    id: 3,
    title: "Конный поход в горы",
    description:
      "Романтическое путешествие верхом на лошадях через живописные горные тропы.",
    price: 2800,
    duration: "4 часа",
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&h=300&fit=crop",
    rating: 4.7,
    reviewCount: 56,
    category: "horse",
  },
  {
    id: 4,
    title: "Дайвинг у берегов Сочи",
    description:
      "Погружение с аквалангом для изучения подводного мира Черного моря.",
    price: 5500,
    duration: "5 часов",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    rating: 4.6,
    reviewCount: 42,
    category: "diving",
  },
  {
    id: 5,
    title: "Поход к водопадам",
    description:
      "Пешеходный маршрут к самым красивым водопадам региона с профессиональным гидом.",
    price: 2200,
    duration: "8 часов",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&h=300&fit=crop",
    rating: 4.5,
    reviewCount: 78,
    category: "hiking",
  },
  {
    id: 6,
    title: "Экскурсия по Сочи",
    description:
      "Обзорная экскурсия по главным достопримечательностям курортного города.",
    price: 1800,
    duration: "4 часа",
    image:
      "https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&h=300&fit=crop",
    rating: 4.4,
    reviewCount: 95,
    category: "excursions",
  },
];

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const filteredTours = allTours.filter(
    (tour) => selectedCategory === "all" || tour.category === selectedCategory,
  );

  const sortedTours = [...filteredTours].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      default:
        return b.isPopular ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-500 to-emerald-500 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-4">
            Каталог туров
          </h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Выберите идеальное приключение из нашей коллекции туров по Сочи и
            Абхазии
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-ocean-500 hover:bg-ocean-600"
                      : ""
                  }
                >
                  <Icon
                    name={category.icon as any}
                    size={16}
                    className="mr-2"
                  />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Сортировать:</span>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">По популярности</SelectItem>
                  <SelectItem value="price-low">По цене (дешевле)</SelectItem>
                  <SelectItem value="price-high">По цене (дороже)</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <p className="text-gray-600">
              Найдено туров:{" "}
              <span className="font-semibold">{sortedTours.length}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedTours.map((tour) => (
              <TourCard
                key={tour.id}
                {...tour}
                category={
                  categories.find((c) => c.id === tour.category)?.name ||
                  tour.category
                }
              />
            ))}
          </div>

          {sortedTours.length === 0 && (
            <div className="text-center py-12">
              <Icon
                name="Search"
                size={48}
                className="text-gray-400 mx-auto mb-4"
              />
              <h3 className="font-montserrat font-semibold text-xl mb-2">
                Туры не найдены
              </h3>
              <p className="text-gray-600">
                Попробуйте изменить фильтры поиска
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
