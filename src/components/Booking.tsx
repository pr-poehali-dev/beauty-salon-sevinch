import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Онлайн запись
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите удобный способ записи на процедуру
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-green-100 rounded-full w-fit">
                <Icon
                  name="MessageCircle"
                  className="text-green-600"
                  size={32}
                />
              </div>
              <CardTitle>WhatsApp</CardTitle>
              <CardDescription>Быстрая запись через мессенджер</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                <Icon name="MessageCircle" className="mr-2" size={18} />
                Написать в WhatsApp
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-blue-100 rounded-full w-fit">
                <Icon name="Phone" className="text-blue-600" size={32} />
              </div>
              <CardTitle>Телефон</CardTitle>
              <CardDescription>Звоните с 9:00 до 21:00</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                <Icon name="Phone" className="mr-2" size={18} />
                +7 (XXX) XXX-XX-XX
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="mx-auto mb-4 p-4 bg-purple-100 rounded-full w-fit">
                <Icon name="Instagram" className="text-purple-600" size={32} />
              </div>
              <CardTitle>Instagram</CardTitle>
              <CardDescription>Записывайтесь в Direct</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-full border-purple-600 text-purple-600 hover:bg-purple-50"
              >
                <Icon name="Instagram" className="mr-2" size={18} />
                @beauty_salon_sevinch
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Время работы
            </h3>
            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <div>Пн-Пт: 9:00 - 21:00</div>
              <div>Сб-Вс: 10:00 - 20:00</div>
            </div>
            <p className="mt-4 text-gray-500">
              📍 г. Ташкент, ул. Примерная, 123
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
