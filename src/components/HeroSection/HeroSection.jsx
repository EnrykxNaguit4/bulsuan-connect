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
  <section className="max-w-7xl mx-auto px-4 pt-8">

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

          <SwiperSlide key={slide.id}>

            <div
  className="
    relative

    aspect-[13/9]
sm:aspect-[18/8]

md:aspect-auto
md:h-[520px]
  "
>

              <img
                src={
                  slide.image ||
                  "https://placehold.co/1400x700?text=BulSUan+Connect"
                }
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/60" />

              <div
  className="
    relative
    z-10

    flex
    items-center

    h-full

    px-2
  "
>

                <div
                 className="
    w-full
    max-w-5xl

    px-7
    sm:px-10
    md:pl-16
    md:pr-10

    pt-10
    pb-12
    sm:py-8
    md:py-0

    text-white
"
                >

                  {/* Badge */}

                  <span
                    className="
  inline-flex
  items-center
  gap-1.5

  rounded-full

  bg-red-700

  px-2.5
  py-1

  text-[10px]
  sm:px-4
  sm:py-2
  sm:text-sm

  font-semibold

  shadow-lg
"
                  >

                    {isAnnouncement ? (
                      <>
                        <FaBullhorn className="text-xs sm:text-sm" />
                        Announcement
                      </>
                    ) : (
                      <>
                        <FaCalendarAlt className="text-xs sm:text-sm" />
                        Event
                      </>
                    )}

                  </span>

                  {/* Title */}

                  <h1
                    className="
    mt-3

    text-xl
    sm:text-4xl
    lg:text-5xl

    font-bold

    leading-tight

    line-clamp-2
    sm:line-clamp-none
  "
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}

                  <p
  className="
    mt-2

    max-w-3xl

    text-xs
    sm:text-base
    lg:text-lg

  leading-5
  sm:leading-7

  text-gray-100

  line-clamp-2
  sm:line-clamp-2
"
                  >
                    {slide.description}
                  </p>
                                      {!isAnnouncement ? (

                    <div
                      className="
                        mt-5

                        space-y-1
text-[11px]
sm:text-sm
md:text-base

                        text-gray-100
                      "
                    >

                      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm sm:text-base">

  <div className="flex items-center gap-2">
    <FaCalendarAlt className="text-white" />
    <span>{slide.date}</span>
  </div>

  <div className="flex items-center gap-2">
    <FaClock className="text-white" />
    <span>
      {slide.startTime} - {slide.endTime}
    </span>
  </div>

</div>
                      <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-white shrink-0" />
                        <span className="font-semibold">Venue:</span>
                        <span>{slide.venue}</span>
                      </div>

                    </div>

                  ) : (

                    <div className="mt-7">

                      <div className="flex items-center gap-2 text-sm sm:text-base text-gray-100">

                        <FaCalendarAlt className="text-white shrink-0" />

                        <span>{slide.date}</span>

                      </div>

                    </div>

                  )}

                  {/* Button */}

                  <div className="mt-2 md:mt-6">

                    <Link
                      to={destination}
                      className="
                        inline-flex
                        items-center
                        gap-2

                        rounded-lg md:rounded-xl

                        bg-red-700

                      px-3
sm:px-6

py-1.5
sm:py-3

text-[11px]
sm:text-base

                        font-semibold

                        transition-all
                        duration-200

                        hover:bg-red-800
                        hover:translate-x-1
                      "
                    >

                      Read More

                      <FaArrowRight
  className="text-[10px] sm:text-sm"
  aria-hidden="true"
/>

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