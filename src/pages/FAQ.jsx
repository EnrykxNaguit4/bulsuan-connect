import Navbar from "../components/Navbar/Navbar";

function FAQ() {
  return (
    <>
      <Navbar />
      <section className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 min-h-[240px] flex flex-col justify-center">
          <h1 className="text-3xl font-bold">
            FAQ
          </h1>

          <p className="mt-5 max-w-2xl text-red-200 text-lg leading-8">
            Find answers to common questions about the Local Student Council and our services.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-10 px-4">
        <div className="grid gap-6">
          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              What is BulSUan Connect?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              BulSUan Connect is the official student council website for Bulacan State University. It provides announcements, events, downloadable files, and concern tracking services.
            </p>
          </div>

          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              How do I submit a concern?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Visit the Submit a Concern page, complete the required fields, and submit your concern. You will get a reference number to track the status later.
            </p>
          </div>

          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              How can I track my concern?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Go to the Track a Concern page and enter your reference number along with your student number to see the latest progress.
            </p>
          </div>

          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Where can I find announcements and events?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Use the Announcements page for news and updates, and the Events page for upcoming student council activities and schedules.
            </p>
          </div>

          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              How do I download official files?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              The Files page contains official forms, memoranda, and documents. Search or filter by category to find what you need.
            </p>
          </div>

          <div className="border border-gray-200/70 bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              How do I contact the student council?
            </h2>
            <p className="mt-4 text-gray-600 leading-7">
              Visit the Contact page for email, phone, office location, and social media links for direct support.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;