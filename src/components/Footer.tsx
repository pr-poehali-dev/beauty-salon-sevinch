import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Sparkles" className="text-purple-400" size={24} />
              <span className="text-xl font-bold">Beauty Salon Sevinch</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Ваша красота - наша страсть. Профессиональный уход и
              индивидуальный подход к каждому клиенту.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="MessageCircle" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Icon name="Phone" size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Мужские стрижки</li>
              <li>Женские стрижки</li>
              <li>Окрашивание</li>
              <li>Маникюр/Педикюр</li>
              <li>Депиляция</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📍 г. Ташкент, ул. Примерная, 123</li>
              <li>📞 +7 (XXX) XXX-XX-XX</li>
              <li>🕒 Пн-Пт: 9:00-21:00</li>
              <li>🕒 Сб-Вс: 10:00-20:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Beauty Salon Sevinch. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
