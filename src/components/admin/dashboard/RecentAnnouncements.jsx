import RecentAnnouncementCard from "./RecentAnnouncementCard";

function RecentAnnouncements({

  announcements,

  onEdit,

}) {

  return announcements.length === 0 ? (

    <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">

      No announcements yet.

    </div>

  ) : (

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

      {announcements.map((announcement) => (

        <RecentAnnouncementCard

          key={announcement.id}

          announcement={announcement}

          onEdit={onEdit}

        />

      ))}

    </div>

  );

}

export default RecentAnnouncements;