import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  getAnnouncements,
} from "../../features/announcements/announcementService";

import {
  getEvents,
} from "../../features/events/eventService";

function HeroSection() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSlides() {
      try {
        const announcements = await getAnnouncements(true);

        const events =
          await getEvents(true);

        const merged = [
          ...announcements,
          ...events,
        ];

        merged.sort((a, b) => {
          const first =
            a.createdAt?.seconds || 0;

          const second =
            b.createdAt?.seconds || 0;

          return second - first;
        });

        setSlides(merged);
      } catch (error) {
        console.error(error);
      }

      setLoading(false);
    }

    loadSlides();
  }, []);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto mt-8 px-4">

        <div className="h-[450px] rounded-3xl bg-gray-200 animate-pulse" />

      </section>
    );
  }

  if (slides.length === 0) {
    return (
      <section className="max-w-7xl mx-auto mt-8 px-4">

        <div className="h-[450px] rounded-3xl bg-purple-800 flex items-center justify-center">

          <div className="text-center text-white">

            <h2 className="text-4xl font-bold">
              BulSUan Connect
            </h2>

            <p className="mt-4 text-lg">
              No featured announcements or
              events yet.
            </p>

          </div>

        </div>

      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto mt-8 px-4">

      <Swiper
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation
        loop={slides.length > 1}
        className="rounded-3xl overflow-hidden shadow-xl"
      >
        {slides.map((slide) => {
          const isAnnouncement =
            slide.type === "announcement";

          const destination =
            isAnnouncement
              ? `/announcements/${slide.id}`
              : `/events/${slide.id}`;

          return (
            <SwiperSlide
              key={slide.id}
            >
              <div className="relative h-[500px]">

                <img
                  src={
                    slide.image ||
                    "https://placehold.co/1400x700?text=BulSUan+Connect"
                  }
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55 flex items-center">

                  <div className="ml-16 max-w-2xl text-white">
                                        <span
                      className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                        isAnnouncement
                          ? "bg-purple-600"
                          : "bg-purple-600"
                      }`}
                    >
                      {isAnnouncement
                        ? "📢 Announcement"
                        : "🎉 Event"}
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-xl text-gray-100 line-clamp-3">
                      {slide.description}
                    </p>

                    {!isAnnouncement && (
                      <div className="mt-8 space-y-2 text-lg">

                        <p>
                          📅 <span className="font-semibold">Date:</span>{" "}
                          {slide.date}
                        </p>

                        <p>
                          🕒 <span className="font-semibold">Time:</span>{" "}
                          {slide.startTime} - {slide.endTime}
                        </p>

                        <p>
                          📍 <span className="font-semibold">Venue:</span>{" "}
                          {slide.venue}
                        </p>

                      </div>
                    )}

                    {isAnnouncement && (
                      <div className="mt-8">

                        <p className="text-lg">
                          📅 {slide.date}
                        </p>

                      </div>
                    )}

                    <div className="mt-10">

                      <Link
                        to={destination}
                        className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 transition px-8 py-4 rounded-xl font-semibold text-lg"
                      >
                        Read More →
                      </Link>

                    </div>

                  </div>

                </div>

                <div className="absolute top-6 right-6">
                                    <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 text-white shadow-lg">

                    <p className="text-sm uppercase tracking-wider opacity-80">
                      Featured
                    </p>

                    <p className="text-3xl font-bold mt-1">
                      {isAnnouncement ? "Announcement" : "Event"}
                    </p>

                    <div className="mt-4 border-t border-white/20 pt-4">

                      <p className="text-sm opacity-80">
                        Published
                      </p>

                      <p className="font-semibold">
                        {slide.date}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
}

export default HeroSection;