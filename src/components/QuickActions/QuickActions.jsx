import { Link } from "react-router-dom";
import {
  FaCommentDots,
  FaSearch,
  FaFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const quickActions = [
  {
    title: "Submit a Concern",
    mobileTitle: "Submit",
    description:
      "Share your concerns so the student council can respond quickly and confidentially.",
    icon: FaCommentDots,
    link: "/concern",
    badge: "Report",
  },
  {
    title: "Track a Concern",
    mobileTitle: "Track",
    description:
      "Use your reference number to follow the progress of your submitted concern.",
    icon: FaSearch,
    link: "/track-concern",
    badge: "Track",
  },
  {
    title: "Browse Files",
    mobileTitle: "Files",
    description:
      "Download official forms, memoranda, and documents published by the student council.",
    icon: FaFileAlt,
    link: "/files",
    badge: "Files",
  },
];

function QuickActions() {
  return (
    <div className="w-full">

      {/* HEADER */}

      <div className="mb-6 sm:mb-8 text-center">

        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-semibold text-[#9A1C27]">
          Quick Actions
        </p>

        <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E1017]">
          Access SANDIGAN services
        </h2>

        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-gray-600 leading-7">
          Submit or track a concern and access official student council
          documents through these quick links.
        </p>

      </div>


      {/* DESKTOP */}

      <div className="hidden md:grid md:grid-cols-3 gap-5 lg:gap-6 w-full">

        {quickActions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
  key={action.title}
  to={action.link}
  className="
    group
    relative
    flex
    min-h-[250px]
    w-full
    flex-col
    overflow-hidden
    rounded-3xl
    border
    border-[#9A1C27]/15
    bg-white
    p-7
    shadow-[0_20px_55px_-25px_rgba(94,16,23,0.30)]
    transition-all
    duration-300
    hover:-translate-y-1.5
    hover:border-[#9A1C27]/40
    hover:shadow-[0_28px_70px_-22px_rgba(94,16,23,0.40)]
  "
>
  {/* Subtle animated glow */}

  <div
    className="
      pointer-events-none
      absolute
      -right-12
      -top-12
      h-32
      w-32
      rounded-full
      bg-[#FAEAEA]
      blur-2xl
      transition-all
      duration-500
      group-hover:scale-150
      group-hover:bg-[#9A1C27]/10
    "
  />

  {/* ICON */}

  <div
    className="
      relative
      flex
      h-14
      w-14
      items-center
      justify-center
      rounded-2xl
      bg-[#FAEAEA]
      text-[#9A1C27]
      transition
      duration-300
      group-hover:bg-[#9A1C27]
      group-hover:text-white
      group-hover:scale-105
    "
  >
    <Icon className="text-2xl" />
  </div>


  {/* TITLE */}

  <div className="relative mt-6">

    <h3 className="text-xl font-bold text-[#5E1017]">
      {action.title}
    </h3>

  </div>


  {/* DESCRIPTION */}

  <p className="relative mt-3 text-gray-600 leading-7">
    {action.description}
  </p>


  {/* LINK */}

  <div
    className="
      relative
      mt-auto
      pt-6
      inline-flex
      items-center
      gap-2
      font-semibold
      text-[#9A1C27]
      transition
      duration-200
      group-hover:text-[#5E1017]
    "
  >
    Open

    <FaArrowRight
      className="
        transition-transform
        duration-300
        group-hover:translate-x-1.5
      "
    />
  </div>

</Link>
          );
        })}

      </div>


      {/* MOBILE */}

      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:hidden">

        {quickActions.map((action) => {

          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.link}
              className="
                group
                flex
                h-28
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-[#9A1C27]/15
                bg-white
                shadow-sm
                transition
                duration-200
                hover:-translate-y-1
                hover:border-[#9A1C27]/40
                hover:shadow-md
              "
            >

              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#FAEAEA]
                  text-[#9A1C27]
                  transition
                  duration-200
                  group-hover:bg-[#9A1C27]
                  group-hover:text-white
                "
              >
                <Icon className="text-xl" />
              </div>

              <span
                className="
                  mt-2
                  text-sm
                  font-semibold
                  text-[#5E1017]
                  text-center
                  leading-tight
                "
              >
                {action.mobileTitle}
              </span>

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;