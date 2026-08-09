import RecentConcernCard from "./RecentConcernCard";

function RecentConcerns({

  concerns,

  onView,

}) {

  return concerns.length === 0 ? (

    <div className="bg-white rounded-2xl shadow-md p-10 text-center text-gray-500">

      No recent concerns.

    </div>

  ) : (

    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">

      {concerns.map((concern) => (

        <RecentConcernCard

          key={concern.id}

          concern={concern}

          onView={onView}

        />

      ))}

    </div>

  );

}

export default RecentConcerns;