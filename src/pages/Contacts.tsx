import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Контакты
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Свяжитесь с нами для бронирования туров или получения информации
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Контактная информация */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MapPin" size={24} />
                  Наш офис
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon
                    name="MapPin"
                    size={20}
                    className="text-blue-600 mt-1"
                  />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-600">г. Сочи, ул. Морская, 15</p>
                    <p className="text-gray-600">
                      ТЦ "Южный", 2 этаж, офис 245
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Clock" size={20} className="text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-gray-600">Пн-Вс: 9:00 - 20:00</p>
                    <p className="text-gray-600">Без выходных</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={24} />
                  Связь с нами
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-green-600" />
                  <div>
                    <p className="font-medium">Горячая линия</p>
                    <a
                      href="tel:+78001234567"
                      className="text-blue-600 hover:underline"
                    >
                      +7 (800) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    name="Smartphone"
                    size={20}
                    className="text-green-600"
                  />
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/79001234567"
                      className="text-blue-600 hover:underline"
                    >
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} className="text-blue-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:info@southern-adventures.ru"
                      className="text-blue-600 hover:underline"
                    >
                      info@southern-adventures.ru
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={24} />
                  Онлайн-консультант
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Наши консультанты готовы ответить на ваши вопросы в чате
                </p>
                <Button className="w-full">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Начать чат
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Форма обратной связи */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Send" size={24} />
                Напишите нам
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
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Тема обращения
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Бронирование тура</option>
                    <option>Вопрос по экскурсии</option>
                    <option>Жалоба</option>
                    <option>Предложение</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Карта */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Map" size={24} />
              Как нас найти
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <Icon name="MapPin" size={48} className="mx-auto mb-2" />
                <p>Интерактивная карта</p>
                <p className="text-sm">г. Сочи, ул. Морская, 15</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
