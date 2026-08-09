import {
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

function RecentAnnouncementCard({

  announcement,

  onEdit,

}) {

  const createdDate =
    announcement.createdAt?.toDate
      ? announcement.createdAt
          .toDate()
          .toLocaleDateString("en-PH", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
      : "Unknown Date";

  return (

    <div

      onClick={() => onEdit(announcement)}

      className="
      group
      bg-white
      rounded-2xl
      shadow-md
      p-5
      cursor-pointer

      transition-all
      duration-300

      hover:-translate-y-1
      hover:shadow-2xl
      hover:ring-1
      hover:ring-red-200
      "

    >

      <div className="flex justify-between items-center">

        {announcement.featured ? (

          <div className="flex items-center gap-2 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">

            <StarIcon className="w-4 h-4" />

            Featured

          </div>

        ) : (

          <div />

        )}

        <span className="text-sm text-gray-400">

          {createdDate}

        </span>

      </div>

      <h3 className="mt-5 text-lg font-bold group-hover:text-red-700 transition">

        {announcement.title}

      </h3>

      <p className="mt-2 text-gray-500 line-clamp-2">

        {announcement.content}

      </p>

      <div className="flex justify-end mt-5">

        <div className="flex items-center gap-1 text-red-700 opacity-0 group-hover:opacity-100 transition">

          View Details

          <ChevronRightIcon className="w-4 h-4" />

        </div>

      </div>

    </div>

  );

}

export default RecentAnnouncementCard;