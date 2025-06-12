import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-ocean-400 font-montserrat font-bold text-xl">
              <Icon name="Mountain" size={28} />
              <span>СочиТур</span>
            </div>
            <p className="text-gray-300 text-sm">
              Ваш надежный проводник по красотам Сочи и Абхазии. Создаем
              незабываемые путешествия с 2010 года.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
              >
                <Icon name="Facebook" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
              >
                <Icon name="Instagram" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-ocean-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/tours"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Туры
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  О компании
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Галерея
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Отзывы
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Новости
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">Морские прогулки</li>
              <li className="text-gray-300">Конные маршруты</li>
              <li className="text-gray-300">Джип-туры</li>
              <li className="text-gray-300">Дайвинг</li>
              <li className="text-gray-300">Пешие походы</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-ocean-400" />
                <span className="text-gray-300">г. Сочи, ул. Морская, 15</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} className="text-emerald-400" />
                <a
                  href="tel:+78001234567"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  8 (800) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} className="text-amber-400" />
                <a
                  href="mailto:info@sochi-tour.ru"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@sochi-tour.ru
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 СочиТур. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
