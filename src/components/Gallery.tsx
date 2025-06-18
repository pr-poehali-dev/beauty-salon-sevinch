const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3",
      alt: "Женская стрижка",
    },
    {
      url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3",
      alt: "Интерьер салона",
    },
    {
      url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3",
      alt: "Маникюр",
    },
    {
      url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-4.0.3",
      alt: "Окрашивание волос",
    },
    {
      url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3",
      alt: "Мужская стрижка",
    },
    {
      url: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3",
      alt: "Уход за бровями",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Галерея работ
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите на результаты работы наших мастеров
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl aspect-square"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                  {image.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            Больше наших работ смотрите в Instagram
            <a href="#" className="text-purple-600 hover:underline ml-1">
              @beauty_salon_sevinch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
