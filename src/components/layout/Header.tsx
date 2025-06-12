import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Туры", href: "/tours" },
    { name: "О компании", href: "/about" },
    { name: "Галерея", href: "/gallery" },
    { name: "Отзывы", href: "/reviews" },
    { name: "Новости", href: "/news" },
    { name: "Контакты", href: "/contacts" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-ocean-600 font-montserrat font-bold text-xl"
          >
            <Icon name="Mountain" size={28} />
            <span>СочиТур</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-ocean-600 ${
                  isActive(item.href) ? "text-ocean-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+78001234567"
              className="text-emerald-600 font-semibold"
            >
              8 (800) 123-45-67
            </a>
            <Button className="bg-ocean-500 hover:bg-ocean-600">
              Заказать тур
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium py-2 px-4 rounded transition-colors ${
                    isActive(item.href)
                      ? "bg-ocean-50 text-ocean-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a
                  href="tel:+78001234567"
                  className="block text-emerald-600 font-semibold py-2 px-4"
                >
                  8 (800) 123-45-67
                </a>
                <div className="px-4">
                  <Button className="w-full bg-ocean-500 hover:bg-ocean-600">
                    Заказать тур
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
