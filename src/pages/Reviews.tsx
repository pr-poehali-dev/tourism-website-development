import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const reviews = [
  {
    id: 1,
    name: "Анна Петрова",
    tourName: "Морская прогулка к дельфинам",
    rating: 5,
    date: "10 июня 2024",
    text: "Потрясающая экскурсия! Видели дельфинов совсем близко, море было спокойное, погода отличная. Гид Игорь очень профессиональный и веселый. Рекомендую всем!",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Дмитрий Морозов",
    tourName: "Джип-тур по горам Абхазии",
    rating: 5,
    date: "8 июня 2024",
    text: "Невероятные виды, адреналин и эмоции! Водитель очень опытный, чувствовали себя в безопасности. Посетили места, куда на обычной машине не добраться. Спасибо за организацию!",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Елена Соколова",
    tourName: "Дайвинг для начинающих",
    rating: 4,
    date: "5 июня 2024",
    text: "Первый раз погружалась с аквалангом - было немного страшно, но инструктор Анна очень терпеливо все объяснила. Подводный мир прекрасен! Минус звезда только за холодную воду в июне.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    name: "Семья Ивановых",
    tourName: "Пешая экскурсия по Старому городу",
    rating: 5,
    date: "3 июня 2024",
    text: "Отличная экскурсия для всей семьи. Дети (8 и 12 лет) не скучали ни минуты. Много интересных историй, красивые места для фото. Время пролетело незаметно!",
    avatar:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=100&h=100&fit=crop",
  },
];

export default function Reviews() {
  const [showForm, setShowForm] = useState(false);

  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Отзывы туристов
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы ценим мнение каждого клиента и стремимся делать наши туры еще
            лучше
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Статистика */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader className="text-center">
                <CardTitle>Общая оценка</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold text-yellow-500 mb-2">
                  {averageRating.toFixed(1)}
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={20}
                      className={
                        i < Math.round(averageRating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  Основано на {reviews.length} отзывах
                </p>
                <Button
                  onClick={() => setShowForm(!showForm)}
                  className="w-full"
                >
                  <Icon name="Plus" size={16} className="mr-2" />
                  Оставить отзыв
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Отзывы */}
          <div className="lg:col-span-3 space-y-6">
            {/* Форма добавления отзыва */}
            {showForm && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageCircle" size={24} />
                    Добавить отзыв
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Имя *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Ваше имя"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Тур
                        </label>
                        <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Морская прогулка к дельфинам</option>
                          <option>Джип-тур по горам Абхазии</option>
                          <option>Дайвинг для начинающих</option>
                          <option>Пешая экскурсия по Старому городу</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Оценка *
                      </label>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon
                            key={star}
                            name="Star"
                            size={24}
                            className="cursor-pointer text-gray-300 hover:text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваш отзыв *
                      </label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Поделитесь впечатлениями о туре..."
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit">
                        <Icon name="Send" size={16} className="mr-2" />
                        Отправить отзыв
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                      >
                        Отмена
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Список отзывов */}
            {reviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <h3 className="font-semibold">{review.name}</h3>
                          <Badge variant="outline" className="text-xs">
                            {review.tourName}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Icon
                                key={i}
                                name="Star"
                                size={14}
                                className={
                                  i < review.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">
                            {review.date}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        <Card className="mt-12 text-center">
          <CardContent className="py-8">
            <Icon
              name="Heart"
              size={48}
              className="mx-auto mb-4 text-red-500"
            />
            <h3 className="text-2xl font-bold mb-4">Спасибо за доверие!</h3>
            <p className="text-gray-600 mb-6">
              Ваши отзывы помогают нам становиться лучше и создавать
              незабываемые путешествия
            </p>
            <Button>Забронировать тур</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
