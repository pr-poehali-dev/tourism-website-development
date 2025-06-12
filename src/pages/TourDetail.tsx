import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ImageCarousel from "@/components/ImageCarousel";
import BookingForm from "@/components/BookingForm";

const mockTour = {
  id: "1",
  title: "Морская прогулка к дельфинам",
  price: 2500,
  duration: "4 часа",
  difficulty: "Легкий",
  images: [
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
  ],
  description: `Незабываемая морская прогулка вдоль побережья Сочи с возможностью 
    увидеть дельфинов в их естественной среде обитания. Во время экскурсии вы 
    насладитесь потрясающими видами на горы и море, сможете искупаться в открытом 
    море и сделать невероятные фотографии.`,
  program: [
    "09:00 - Сбор группы в морском порту",
    "09:30 - Отправление на катере",
    "10:30 - Первая остановка для купания",
    "11:30 - Поиск дельфинов",
    "12:30 - Обед на борту",
    "13:00 - Возвращение в порт",
  ],
  includes: [
    "Трансфер от отеля",
    "Профессиональный гид",
    "Обед на борту",
    "Снаряжение для снорклинга",
    "Страховка",
  ],
  reviews: [
    {
      id: 1,
      name: "Анна К.",
      rating: 5,
      text: "Потрясающая экскурсия! Видели дельфинов совсем близко, море было спокойное, погода отличная. Рекомендую всем!",
    },
    {
      id: 2,
      name: "Дмитрий М.",
      rating: 5,
      text: "Профессиональная команда, безопасно и интересно. Дети в восторге от встречи с дельфинами!",
    },
  ],
};

export default function TourDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Основной контент */}
          <div className="lg:col-span-2 space-y-6">
            {/* Заголовок */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {mockTour.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Icon name="Clock" size={16} />
                  {mockTour.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="TrendingUp" size={16} />
                  {mockTour.difficulty}
                </div>
                <div className="flex items-center gap-1">
                  <Icon name="Star" size={16} className="text-yellow-500" />
                  4.9 (24 отзыва)
                </div>
              </div>
            </div>

            {/* Карусель изображений */}
            <ImageCarousel images={mockTour.images} />

            {/* Описание */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="FileText" size={20} />
                  Описание тура
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  {mockTour.description}
                </p>
              </CardContent>
            </Card>

            {/* Программа тура */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} />
                  Программа тура
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {mockTour.program.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Badge variant="outline" className="mt-1 shrink-0">
                        {index + 1}
                      </Badge>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Что включено */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} />
                  Что включено
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid md:grid-cols-2 gap-2">
                  {mockTour.includes.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Отзывы */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Отзывы туристов
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockTour.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b last:border-0 pb-4 last:pb-0"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">{review.name}</span>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className="text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Боковая панель с формой бронирования */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BookingForm tourTitle={mockTour.title} price={mockTour.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
