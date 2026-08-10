import { Link } from "react-router-dom";
import { FaCommentDots, FaSearch, FaFileAlt, FaArrowRight } from "react-icons/fa";

const quickActions = [
  {
    title: "Submit a Concern",
    description:
      "Share your concerns so the student council can respond quickly and confidentially.",
    icon: FaCommentDots,
    link: "/concern",
    badge: "Report",
    badgeClass: "bg-red-100 text-red-700",
  },
  {
    title: "Track a Concern",
    description:
      "Use your reference number to follow the progress of your submitted concern.",
    icon: FaSearch,
    link: "/track-concern",
    badge: "Track",
    badgeClass: "bg-blue-100 text-blue-700",
  },
  {
    title: "Browse Files",
    description:
      "Download official forms, memos, and documents published by the student council.",
    icon: FaFileAlt,
    link: "/files",
    badge: "Files",
    badgeClass: "bg-emerald-100 text-emerald-700",
  },
];

function QuickActions() {
  return (
    <section className="relative bg-slate-50 py-4 px-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-5 top-5 bottom-5 rounded-[2.5rem] bg-red-900/10 blur-2xl" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-white p-10 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.20)] ring-1 ring-gray-200/50">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-red-700">
              Quick Actions
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">
              Fast access to the services students use most.
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Use these shortcuts to submit or track concerns and download official student council documents.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.title}
                  to={action.link}
                  className="group block overflow-hidden rounded-3xl border border-gray-200/90 bg-white p-7 ring-1 ring-gray-200/70 shadow-[0_24px_80px_-16px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_95px_-16px_rgba(15,23,42,0.32)]"
                >
                  <span className={`relative inline-flex h-14 w-14 items-center justify-center rounded-3xl ${action.badgeClass}`}>
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
                <span className="mt-6 inline-flex items-center gap-2 text-red-700 font-semibold transition group-hover:underline">
                  Open <FaArrowRight className="inline-block" aria-hidden="true" />
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