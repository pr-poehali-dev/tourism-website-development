import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const news = [
  {
    id: 1,
    title: "Открытие нового джип-тура в горы Абхазии",
    date: "15 июня 2024",
    category: "Новые туры",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
    excerpt:
      "Представляем уникальный маршрут через живописные горные тропы с посещением древних крепостей.",
    content:
      "Новый джип-тур включает посещение Гагрской крепости, водопадов и дегустацию местных вин.",
  },
  {
    id: 2,
    title: "Летние скидки на морские экскурсии",
    date: "10 июня 2024",
    category: "Акции",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
    excerpt:
      "Специальные предложения на все морские прогулки в июне и июле - скидка до 25%.",
    content:
      "При бронировании до 30 июня действует скидка 25% на все морские экскурсии.",
  },
  {
    id: 3,
    title: 'Фестиваль "Черноморские ритмы" в Сочи',
    date: "5 июня 2024",
    category: "События",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
    excerpt:
      "С 20 по 25 июня в Сочи пройдет музыкальный фестиваль с участием местных и зарубежных артистов.",
    content:
      "Организуем специальные экскурсии с посещением фестиваля и знакомством с культурой региона.",
  },
];

export default function News() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Новости и события
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Следите за последними новостями компании и событиями в регионе
          </p>
        </div>

        {/* Список новостей */}
        <div className="space-y-8">
          {news.map((article) => (
            <Card
              key={article.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center gap-1 text-gray-500">
                        <Icon name="Calendar" size={16} />
                        <span className="text-sm">{article.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <p className="text-gray-700">{article.content}</p>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Подписка на новости */}
        <Card className="mt-12">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Icon name="Bell" size={24} />
              Подписка на новости
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Получайте уведомления о новых турах, акциях и событиях в регионе
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Подписаться
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
