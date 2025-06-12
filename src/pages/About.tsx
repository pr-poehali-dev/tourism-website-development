import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function About() {
  const team = [
    {
      name: "Анна Морская",
      role: "Основатель и гид",
      experience: "12 лет опыта",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
    },
    {
      name: "Игорь Горный",
      role: "Инструктор по дайвингу",
      experience: "8 лет опыта",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
    },
    {
      name: "Елена Солнечная",
      role: "Координатор туров",
      experience: "5 лет опыта",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            О нашей компании
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаем незабываемые приключения на Черноморском побережье уже
            более 10 лет
          </p>
        </div>

        <div className="grid gap-8">
          {/* История компании */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="MapPin" size={24} />
                Наша история
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Компания "Южные Приключения" была основана в 2014 году группой
                энтузиастов, влюбленных в красоту Сочи и Абхазии. Мы начинали с
                небольших пеших экскурсий, а сегодня предлагаем более 50
                различных туров и активностей.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                За годы работы мы провели более 10,000 экскурсий и подарили
                незабываемые впечатления тысячам туристов из разных стран. Наша
                миссия — показать истинную красоту Кавказа и создать
                воспоминания на всю жизнь.
              </p>
            </CardContent>
          </Card>

          {/* Наши преимущества */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Award" size={24} />
                Почему выбирают нас
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Безопасность</h3>
                  <p className="text-gray-600">
                    Все наши туры застрахованы, гиды сертифицированы
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-green-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Опыт</h3>
                  <p className="text-gray-600">
                    Более 10 лет работы в сфере туризма
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={24} className="text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Индивидуальный подход</h3>
                  <p className="text-gray-600">
                    Учитываем пожелания каждого клиента
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Команда */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Users" size={24} />
                Наша команда
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-medium mb-1">
                      {member.role}
                    </p>
                    <p className="text-gray-600">{member.experience}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Сертификаты */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Certificate" size={24} />
                Сертификаты и награды
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Award" size={20} className="text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Лучшая туристическая компания 2023
                    </h4>
                    <p className="text-gray-600">Премия "Туризм Сочи"</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Shield" size={20} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Сертификат безопасности
                    </h4>
                    <p className="text-gray-600">Ростуризм РФ</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
