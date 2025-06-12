import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ImageCarousel from "@/components/ImageCarousel";
import TourCard from "@/components/TourCard";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const popularTours = [
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
    category: "Морские",
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
    category: "Джип-туры",
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
    category: "Конные",
    isPopular: true,
  },
];

const services = [
  {
    icon: "Waves",
    title: "Морские прогулки",
    description: "Яхты, катера, рыбалка",
  },
  {
    icon: "Mountain",
    title: "Горные походы",
    description: "Пешие маршруты, альпинизм",
  },
  {
    icon: "Car",
    title: "Джип-туры",
    description: "Экстремальные маршруты",
  },
  {
    icon: "Fish",
    title: "Дайвинг",
    description: "Подводное плавание",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-6 animate-fade-in">
            Путешествуй с нами! 🏖️
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Откройте красоты Сочи и Абхазии с лучшими гидами региона.
            Незабываемые приключения ждут вас!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-ocean-600 hover:bg-gray-100 font-semibold"
            >
              <Icon name="Calendar" size={20} className="mr-2" />
              Выбрать тур
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-ocean-600"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ImageCarousel />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Наши услуги
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы предлагаем широкий спектр туристических услуг для любителей
              активного отдыха
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="text-center group">
                <div className="bg-ocean-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-ocean-100 transition-colors">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-ocean-600"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
              Популярные туры
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Самые востребованные маршруты, которые выбирают наши гости
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {popularTours.map((tour) => (
              <TourCard key={tour.id} {...tour} />
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-ocean-500 hover:bg-ocean-600">
              Посмотреть все туры
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-500 to-ocean-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
            Готовы к приключениям?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами прямо сейчас и получите персональную консультацию
            по выбору тура
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
