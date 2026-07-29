import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import announcement1 from "../../assets/images/announcements/announcement1.jpg";
import announcement2 from "../../assets/images/announcements/announcement2.jpg";
import announcement3 from "../../assets/images/announcements/announcement3.jpg";

const slides = [
  {
    image: announcement1,
    title: "Student Leadership Summit",
    description: "Registration is now open.",
  },
  {
    image: announcement2,
    title: "Enrollment Advisory",
    description: "Check the updated enrollment schedule.",
  },
  {
    image: announcement3,
    title: "Campus Event",
    description: "Join us this Friday at the campus grounds.",
  },
];

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto mt-8 px-4">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[450px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/45 flex items-center">
                <div className="ml-16 max-w-lg text-white">
                  <h1 className="text-5xl font-bold">
                    {slide.title}
                  </h1>

                  <p className="mt-4 text-lg">
                    {slide.description}
                  </p>

                  <button className="mt-8 bg-purple-700 hover:bg-purple-800 px-6 py-3 rounded-xl transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSection;