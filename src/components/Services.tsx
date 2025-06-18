import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      category: "Мужские услуги",
      icon: "User",
      services: [
        { name: "Мужская стрижка", price: "от 700₽", duration: "45 мин" },
        { name: "Стрижка бороды", price: "от 600₽", duration: "30 мин" },
        {
          name: "Комплекс (стрижка + борода)",
          price: "от 1200₽",
          duration: "60 мин",
        },
      ],
    },
    {
      category: "Женские услуги",
      icon: "User2",
      services: [
        { name: "Женская стрижка", price: "от 1500₽", duration: "60 мин" },
        { name: "Окрашивание", price: "от 2500₽", duration: "120 мин" },
        { name: "Укладка", price: "от 1000₽", duration: "45 мин" },
        { name: "Химическая завивка", price: "от 3000₽", duration: "180 мин" },
      ],
    },
    {
      category: "Nail-услуги",
      icon: "Hand",
      services: [
        { name: "Маникюр", price: "от 1200₽", duration: "60 мин" },
        { name: "Педикюр", price: "от 1500₽", duration: "75 мин" },
        { name: "Покрытие гель-лак", price: "от 800₽", duration: "30 мин" },
      ],
    },
    {
      category: "Beauty-услуги",
      icon: "Sparkles",
      services: [
        { name: "Депиляция", price: "от 500₽", duration: "30 мин" },
        { name: "Коррекция бровей", price: "от 800₽", duration: "30 мин" },
        { name: "Окрашивание бровей", price: "от 600₽", duration: "20 мин" },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Полный спектр beauty-услуг для мужчин и женщин
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((category, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Icon
                    name={category.icon as any}
                    className="text-purple-600"
                    size={24}
                  />
                </div>
                <CardTitle className="text-xl text-gray-900">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="border-b border-gray-100 pb-3 last:border-b-0"
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-900 text-sm">
                        {service.name}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {service.price}
                      </Badge>
                    </div>
                    <p className="text-xs text-gray-500">{service.duration}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            * Точная стоимость определяется после консультации мастера
          </p>
          <Badge className="bg-purple-600">
            Скидка 20% на первое посещение
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Services;
