import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBullhorn, FaCalendarAlt, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

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

        <div className="h-[450px] rounded-3xl bg-red-800 flex items-center justify-center">

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
        className="rounded-3xl overflow-hidden shadow-xl hero-swiper"
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
              <div className="relative h-[420px] md:h-[500px]">

                <img
                  src={
                    slide.image ||
                    "https://placehold.co/1400x700?text=BulSUan+Connect"
                  }
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/55 flex items-center">

                  <div className="mx-auto w-full max-w-2xl px-5 sm:px-0 sm:ml-16 text-white">
                                        <span
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        isAnnouncement
                          ? "bg-red-600"
                          : "bg-red-600"
                      }`}
                    >
                      {isAnnouncement ? (
                        <>
                          <FaBullhorn className="text-base" />
                          Announcement
                        </>
                      ) : (
                        <>
                          <FaCalendarAlt className="text-base" />
                          Event
                        </>
                      )}
                    </span>

                    <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                      {slide.title}
                    </h1>

                    <p className="mt-6 text-base md:text-xl text-gray-100 line-clamp-3">
                      {slide.description}
                    </p>

                    {!isAnnouncement && (
                      <div className="mt-8 space-y-2 text-lg">

                        <p className="flex items-center gap-3 text-base">
                          <FaCalendarAlt className="text-white" />
                          <span className="font-semibold">Date:</span>
                          <span>{slide.date}</span>
                        </p>

                        <p className="flex items-center gap-3 text-base">
                          <FaClock className="text-white" />
                          <span className="font-semibold">Time:</span>
                          <span>{slide.startTime} - {slide.endTime}</span>
                        </p>

                        <p className="flex items-center gap-3 text-base">
                          <FaMapMarkerAlt className="text-white" />
                          <span className="font-semibold">Venue:</span>
                          <span>{slide.venue}</span>
                        </p>

                      </div>
                    )}

                    {isAnnouncement && (
                      <div className="mt-8">
                        <p className="mt-2 flex items-center gap-3 text-lg">
                          <FaCalendarAlt className="text-white" />
                          {slide.date}
                        </p>
                      </div>
                    )}

                    <div className="mt-8">
                      <Link
                        to={destination}
                        className="inline-flex items-center gap-2 bg-red-700 hover:bg-red-800 transition px-6 py-3 rounded-xl font-semibold text-base"
                      >
                        Read More <FaArrowRight className="inline-block" aria-hidden="true" />
                      </Link>
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