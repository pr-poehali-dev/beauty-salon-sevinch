import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById("booking");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Icon
            name="Sparkles"
            className="text-purple-600 mx-auto mb-4"
            size={48}
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Beauty Salon
          <span className="block text-purple-600">Sevinch</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Откройте свою естественную красоту в нашем премиум салоне.
          Профессиональный уход и индивидуальный подход к каждому клиенту.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4"
            onClick={scrollToBooking}
          >
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться онлайн
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-8 py-4"
          >
            +7 (967) 066-67-57
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">5+</div>
            <div className="text-sm text-gray-600">лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">1000+</div>
            <div className="text-sm text-gray-600">довольных клиентов</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">15+</div>
            <div className="text-sm text-gray-600">видов услуг</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="text-purple-600" size={32} />
      </div>
    </section>
  );
};

export default Hero;
