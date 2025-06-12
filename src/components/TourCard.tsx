import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TourCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  isPopular?: boolean;
}

const TourCard = ({
  id,
  title,
  description,
  price,
  duration,
  image,
  rating,
  reviewCount,
  category,
  isPopular = false,
}: TourCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden card-hover group">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {isPopular && (
          <Badge className="absolute top-3 left-3 bg-amber-500 hover:bg-amber-600">
            <Icon name="Star" size={12} className="mr-1" />
            Популярный
          </Badge>
        )}
        <Badge
          variant="secondary"
          className="absolute top-3 right-3 bg-white/90 text-gray-700"
        >
          {category}
        </Badge>
      </div>

      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-lg mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={16} className="text-amber-500" />
            <span className="font-semibold text-sm">{rating}</span>
            <span className="text-gray-500 text-sm">({reviewCount})</span>
          </div>

          <div className="flex items-center text-gray-600 text-sm">
            <Icon name="Clock" size={16} className="mr-1" />
            {duration}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-montserrat font-bold text-ocean-600">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            <span className="text-gray-500 text-sm ml-1">/ чел.</span>
          </div>

          <div className="flex space-x-2">
            <Link to={`/tour/${id}`}>
              <Button variant="outline" size="sm">
                Подробнее
              </Button>
            </Link>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
              Забронировать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
