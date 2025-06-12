import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const galleries = [
  {
    category: "Морские прогулки",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1566024287286-457247b70310?w=600&h=400&fit=crop",
    ],
  },
  {
    category: "Горные походы",
    images: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1464822759844-d150baec3471?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486022661976-6e34fe7e8b85?w=600&h=400&fit=crop",
    ],
  },
  {
    category: "Дайвинг",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&h=400&fit=crop",
    ],
  },
  {
    category: "Достопримечательности",
    images: [
      "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1564408267060-d9aeac0b5a43?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562832135-14a35d25edef?w=600&h=400&fit=crop",
    ],
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = ["Все", ...galleries.map((g) => g.category)];

  const filteredGalleries =
    selectedCategory === "Все"
      ? galleries
      : galleries.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Фотогалерея
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Красота Сочи и Абхазии в объективе наших фотографов
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Галерея */}
        <div className="space-y-12">
          {filteredGalleries.map((gallery, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Icon name="Camera" size={24} />
                {gallery.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {gallery.images.map((image, imageIndex) => (
                  <Card
                    key={imageIndex}
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => setSelectedImage(image)}
                  >
                    <CardContent className="p-0">
                      <img
                        src={image}
                        alt={`${gallery.category} ${imageIndex + 1}`}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Модальное окно для просмотра изображения */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage}
                alt="Увеличенное изображение"
                className="max-w-full max-h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75"
                onClick={() => setSelectedImage(null)}
              >
                <Icon name="X" size={24} />
              </button>
            </div>
          </div>
        )}

        {/* Призыв к действию */}
        <Card className="mt-12 text-center">
          <CardContent className="py-8">
            <Icon
              name="Camera"
              size={48}
              className="mx-auto mb-4 text-blue-600"
            />
            <h3 className="text-2xl font-bold mb-4">
              Хотите попасть в нашу галерею?
            </h3>
            <p className="text-gray-600 mb-6">
              Присоединяйтесь к нашим турам и делитесь своими фотографиями с
              хештегом #ПутешествияСНами
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Выбрать тур
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
