import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            О нашем салоне
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Мы создаем красоту, которая вдохновляет и придает уверенность в себе
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3"
              alt="Интерьер салона красоты"
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ваша красота - наша страсть
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Beauty Salon Sevinch — это место, где профессионализм встречается
              с творчеством. Наша команда опытных мастеров использует только
              premium продукты и современные техники, чтобы подчеркнуть вашу
              естественную красоту.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="Award" className="text-purple-600" size={24} />
                <span className="text-gray-700">Сертифицированные мастера</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Heart" className="text-purple-600" size={24} />
                <span className="text-gray-700">Индивидуальный подход</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Shield" className="text-purple-600" size={24} />
                <span className="text-gray-700">Premium продукты</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" className="text-purple-600" size={24} />
                <span className="text-gray-700">Удобное время работы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
