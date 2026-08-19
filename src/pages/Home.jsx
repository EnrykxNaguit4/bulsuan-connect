import PublicLayout from "../components/layout/PublicLayout";

import QuickActions from "../components/QuickActions/QuickActions";

function Home() {
  return (
    <PublicLayout>

      {/* ==========================================================
          LOGO AREA
      ========================================================== */}

      <section className="relative overflow-hidden bg-[#FAEAEA]">

        {/* Animated decorative shapes */}

        <div
          className="
            pointer-events-none
            absolute
            -top-24
            -left-20
            h-64
            w-64
            rounded-full
            bg-[#9A1C27]/10
            blur-3xl
            animate-[pulse_6s_ease-in-out_infinite]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            top-20
            -right-24
            h-72
            w-72
            rounded-full
            bg-[#5E1017]/10
            blur-3xl
            animate-[pulse_8s_ease-in-out_infinite]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-0
            left-1/2
            h-40
            w-40
            -translate-x-1/2
            rounded-full
            bg-white/70
            blur-3xl
          "
        />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-7 sm:pt-20 md:pt-24 md:pb-10">

          <div className="flex items-center justify-center gap-8 sm:gap-12 md:gap-20">

            {/* LOGO 1 */}

            <div
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-500
                hover:-translate-y-1
              "
            >
              <img
                src="cssp lsc logo.png"
                alt="CSSP Local Student Council Logo"
                className="h-30 sm:h-28 md:h-50 w-auto object-contain"
              />
            </div>


            {/* LOGO 2 */}

            <div
              className="
                flex
                items-center
                justify-center
                transition-transform
                duration-500
                hover:-translate-y-1
              "
            >
              <img
                src="srw logo.png"
                alt="Students' Rights and Welfare Committee Logo"
                className="h-30 sm:h-28 md:h-50 w-auto object-contain"
              />
            </div>

          </div>

        </div>

      </section>


      {/* ==========================================================
          WELCOME SECTION
      ========================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Animated background glow */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            h-80
            w-80
            -translate-x-1/2
            rounded-full
            bg-[#FAEAEA]/80
            blur-3xl
            animate-[pulse_7s_ease-in-out_infinite]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            bottom-0
            h-64
            w-64
            rounded-full
            bg-[#9A1C27]/5
            blur-3xl
          "
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">

          <div className="max-w-4xl mx-auto">

            {/* Heading */}

            <div className="text-center">

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#9A1C27]">
                Student Assistance Platform
              </p>

              <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E1017]">
                Welcome to SANDIGAN, Rajah!
              </h1>

            </div>


            {/* Introduction Card */}

            <div
              className="
                relative
                mt-6
                sm:mt-7
                md:mt-8
                rounded-3xl
                border
                border-[#9A1C27]/10
                bg-[#FAEAEA]/55
                px-5
                py-6
                sm:px-7
                sm:py-7
                md:px-9
                md:py-8
                shadow-[0_20px_60px_-35px_rgba(94,16,23,0.35)]
                transition
                duration-500
                hover:shadow-[0_25px_70px_-30px_rgba(94,16,23,0.40)]
              "
            >

              {/* Decorative glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-10
                  -top-10
                  h-32
                  w-32
                  rounded-full
                  bg-[#9A1C27]/10
                  blur-3xl
                  animate-[pulse_5s_ease-in-out_infinite]
                "
              />


              <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-7 sm:leading-8">

                <p className="text-justify">

                  <b className="text-[#5E1017]">
                    SANDIGAN (Student Assistance Network for Dialogue and
                    Intervention of Grievances and Needs)
                  </b>{" "}
                  is a student-centered platform of the{" "}

                  <b className="text-[#5E1017]">
                    College of Social Sciences and Philosophy (CSSP) Local
                    Student Council (LSC)
                  </b>{" "}

                  through its{" "}

                  <b className="text-[#5E1017]">
                    Students' Rights and Welfare (SRW) Committee
                  </b>
                  , created to provide a safe and accessible space for
                  students to{" "}

                  <b className="text-[#5E1017]">
                    raise concerns, seek assistance, and have their voice heard
                  </b>
                  .

                </p>


                <p className="text-justify">

                  This platform provides a channel for{" "}

                  <b className="text-[#5E1017]">
                    submitting grievances and accessing resources
                  </b>{" "}

                  that promote the understanding, exercise, and protection of
                  student rights. Through{" "}

                  <b className="text-[#5E1017]">
                    SANDIGAN
                  </b>
                  , every Rajah is given a space to be heard, supported, and
                  guided toward appropriate assistance.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==========================================================
          QUICK ACTIONS
      ========================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#FAEAEA]
          border-y
          border-[#9A1C27]/10
        "
      >

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            -left-28
            top-1/2
            h-80
            w-80
            -translate-y-1/2
            rounded-full
            bg-[#9A1C27]/10
            blur-3xl
            animate-[pulse_7s_ease-in-out_infinite]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-28
            bottom-0
            h-80
            w-80
            rounded-full
            bg-[#5E1017]/10
            blur-3xl
            animate-[pulse_9s_ease-in-out_infinite]
          "
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-7 sm:py-9 md:py-10">

          <QuickActions />

        </div>

      </section>


      {/* ==========================================================
          SANDIGAN DOCUMENTS
      ========================================================== */}

      <section className="relative overflow-hidden bg-white">

        {/* Decorative background */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-10
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-[#FAEAEA]
            blur-3xl
            opacity-80
            animate-[pulse_8s_ease-in-out_infinite]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            bottom-0
            h-48
            w-48
            rounded-full
            bg-[#9A1C27]/5
            blur-3xl
          "
        />

        <div className="relative max-w-5xl mx-auto px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">

          <div className="max-w-3xl mx-auto">

            {/* Heading */}

            <div className="text-center">

              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#9A1C27]">
                Official Documents
              </p>

              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#5E1017]">
                SANDIGAN Documents
              </h2>

              <p className="text-sm sm:text-base text-gray-600 mt-2">
                Access the official documents of SANDIGAN.
              </p>

            </div>


            {/* DOCUMENT BUTTONS */}

            <div className="mt-6 sm:mt-7 space-y-3">

              {/* Resolution */}

              <a
                href="YOUR_GOOGLE_DRIVE_RESOLUTION_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  text-center
                  min-h-[60px]
                  overflow-hidden
                  bg-[#FAEAEA]
                  border
                  border-[#9A1C27]/15
                  rounded-2xl
                  px-5
                  py-4
                  text-sm
                  sm:text-base
                  text-[#5E1017]
                  font-semibold
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#9A1C27]
                  hover:bg-white
                  hover:shadow-[0_12px_35px_-18px_rgba(94,16,23,0.45)]
                "
              >
                <span className="relative z-10">
                  SANDIGAN Resolution of 2026
                </span>

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-[#9A1C27]/10
                    blur-2xl
                    transition
                    duration-500
                    group-hover:scale-150
                  "
                />
              </a>


              {/* Ordinance */}

              <a
                href="YOUR_GOOGLE_DRIVE_ORDINANCE_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  flex
                  items-center
                  justify-center
                  text-center
                  min-h-[60px]
                  overflow-hidden
                  bg-[#FAEAEA]
                  border
                  border-[#9A1C27]/15
                  rounded-2xl
                  px-5
                  py-4
                  text-sm
                  sm:text-base
                  text-[#5E1017]
                  font-semibold
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#9A1C27]
                  hover:bg-white
                  hover:shadow-[0_12px_35px_-18px_rgba(94,16,23,0.45)]
                "
              >
                <span className="relative z-10">
                  SANDIGAN Ordinance of 2026
                </span>

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-24
                    w-24
                    rounded-full
                    bg-[#9A1C27]/10
                    blur-2xl
                    transition
                    duration-500
                    group-hover:scale-150
                  "
                />
              </a>

            </div>

          </div>

        </div>

      </section>

    </PublicLayout>
  );
}

export default Home;