import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import Icon from "@/components/ui/icon";

interface BookingFormProps {
  tourTitle?: string;
  onSubmit?: (data: any) => void;
}

const BookingForm = ({ tourTitle, onSubmit }: BookingFormProps) => {
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "1",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      date,
      tourTitle,
    };
    onSubmit?.(bookingData);
    // Here you would typically send data to your backend
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="font-montserrat font-bold text-xl mb-6 text-gray-900">
        Забронировать тур
        {tourTitle && (
          <span className="block text-sm font-normal text-gray-600 mt-1">
            {tourTitle}
          </span>
        )}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Имя и фамилия</Label>
          <Input
            id="name"
            placeholder="Введите ваше имя"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="phone">Телефон</Label>
          <Input
            id="phone"
            placeholder="+7 (999) 123-45-67"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            required
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@mail.ru"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Дата тура</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <Icon name="Calendar" size={16} className="mr-2" />
                  {date
                    ? format(date, "dd MMMM yyyy", { locale: ru })
                    : "Выберите дату"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  locale={ru}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label>Количество человек</Label>
            <Select
              value={formData.guests}
              onValueChange={(value) => handleInputChange("guests", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "человек" : "человека"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="message">Дополнительные пожелания</Label>
          <Textarea
            id="message"
            placeholder="Расскажите о ваших пожеланиях к туру..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            rows={3}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-ocean-500 hover:bg-ocean-600 text-white"
        >
          <Icon name="Send" size={16} className="mr-2" />
          Отправить заявку
        </Button>

        <p className="text-xs text-gray-500 text-center">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
