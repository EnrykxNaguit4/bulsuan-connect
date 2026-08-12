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
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    title: "Track a Concern",
    mobileTitle: "Track",
    description:
      "Use your reference number to follow the progress of your submitted concern.",
    icon: FaSearch,
    link: "/track-concern",
    badge: "Track",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    title: "Browse Files",
    mobileTitle: "Files",
    description:
      "Download official forms, memoranda, and documents published by the student council.",
    icon: FaFileAlt,
    link: "/files",
    badge: "Files",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
];

function QuickActions() {
  return (
    <section className="relative bg-slate-50 py-3 sm:py-4 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-5 top-5 bottom-5 rounded-[2.5rem] bg-red-900/10 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[2rem] bg-white p-5 sm:p-8 md:p-10 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.20)] ring-1 ring-gray-200/50">

          <div className="mb-6 sm:mb-8 md:mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-700">
              Quick Actions
            </p>

            <h2 className="mt-2 md:mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              Fast access to the services students use most.
            </h2>

            <p className="mt-2 md:mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Use these shortcuts to submit or track concerns and download official student council documents.
            </p>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
                  key={action.title}
                  to={action.link}
                  className="group block overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-7 ring-1 ring-gray-200/70 shadow-[0_24px_80px_-16px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_95px_-16px_rgba(15,23,42,0.32)]"
                >
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${action.badgeClass}`}
                  >
                    <Icon className="text-2xl" />
                  </span>

                  <div className="mt-6 flex items-center gap-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {action.title}
                    </h3>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600">
                      {action.badge}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600 leading-7">
                    {action.description}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-red-700 font-semibold group-hover:underline">
                    Open <FaArrowRight />
                  </span>
                </Link>
              );
            })}
          </div>

          {/* MOBILE */}
          <div className="grid grid-cols-3 gap-4 md:hidden">
            {quickActions.map((action) => {
              const Icon = action.icon;

              return (
                <Link
  key={action.title}
  to={action.link}
  className="
    group

    h-28

    rounded-2xl

    border
    border-gray-200

    bg-white

    shadow-sm

    flex
    flex-col

    items-center
    justify-center

    transition
    hover:-translate-y-1
    hover:shadow-md
  "
>
  <div
    className={`h-12 w-12 rounded-full flex items-center justify-center ${action.badgeClass}`}
  >
    <Icon className="text-xl" />
  </div>

  <span className="mt-2 text-sm font-semibold text-gray-900 text-center leading-tight">
    {action.mobileTitle}
  </span>
</Link>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default QuickActions;