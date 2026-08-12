import { useMemo, useState } from "react";



import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

import PublicLayout from "../components/layout/PublicLayout";
import { Link } from "react-router-dom";

function FAQ() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is BulSUan Connect?",
      answer:
        "BulSUan Connect is the official student council website for Bulacan State University. It provides announcements, events, downloadable files, and concern tracking services.",
    },
    {
      question: "How do I submit a concern?",
      answer:
        "Visit the Submit a Concern page, complete the required fields, and submit your concern. After submission, you will receive a reference number that you can use to monitor its status.",
    },
    {
      question: "How can I track my concern?",
      answer:
        "Go to the Track a Concern page and enter your reference number together with your student number to view the latest status of your concern.",
    },
    {
      question: "Where can I find announcements and events?",
      answer:
        "Announcements are available on the Announcements page, while upcoming activities and programs are posted on the Events page.",
    },
    {
      question: "How do I download official files?",
      answer:
        "Open the Files page to browse downloadable forms, memoranda, and other official student council documents.",
    },
    {
      question: "How do I contact the student council?",
      answer:
        "Visit the Contact page for the official email address, phone number, office location, office hours, and Facebook page.",
    },
  ];

  const filteredFAQs = useMemo(() => {
    return faqs.filter((faq) => {
      const keyword = search.toLowerCase();

      return (
        faq.question.toLowerCase().includes(keyword) ||
        faq.answer.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  return (

      <PublicLayout>

      {/* HERO */}

      <section className="bg-red-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-8 min-h-[180px] md:min-h-[190px] flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold">
            FAQs
          </h1>

          <p className="mt-4 max-w-2xl text-red-200 text-base md:text-lg leading-7 md:leading-8">
            Find answers to common questions about BulSUan Connect and the services provided by the Local Student Council.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-6 pb-14">

        {/* SEARCH */}

        <div className="relative mb-10">

          <MagnifyingGlassIcon
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2

              w-5
              h-5

              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search frequently asked questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              h-12

              rounded-xl

              border
              border-gray-200

              bg-white

              pl-12
              pr-4

              shadow-sm

              focus:outline-none
              focus:ring-2
              focus:ring-red-700
            "
          />

        </div>

        {/* FAQ ACCORDION */}

        <div className="space-y-5">

          {filteredFAQs.length === 0 ? (

            <div className="text-center py-14 text-gray-500">

              No matching questions found.

            </div>

          ) : (

            filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="
                    bg-white
                    rounded-2xl

                    shadow-sm
                    hover:shadow-md

                    transition-all
                    duration-300

                    overflow-hidden
                  "
                >

                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? -1 : index)
                    }
                    className="
                      w-full

                      px-8
                      py-6

                      flex
                      items-center
                      justify-between

                      text-left
                    "
                  >

                    <h2 className="text-xl font-semibold text-gray-900">

                      {faq.question}

                    </h2>

                    <ChevronDownIcon
                      className={`
                        w-6
                        h-6

                        text-red-700

                        transition-transform
                        duration-300

                        ${isOpen ? "rotate-180" : ""}
                      `}
                    />

                  </button>

                  {isOpen && (

                    <div
                      className="
                        px-8
                        pb-7

                        text-gray-600
                        leading-8
                      "
                    >

                      {faq.answer}

                    </div>

                  )}

                </div>
              );
            })

          )}

        </div>

                {/* STILL NEED HELP */}

        <div
          className="
  mt-14

  rounded-3xl

  bg-gradient-to-r
  from-red-700
  to-red-800

  px-6
  py-8

  md:px-10
  md:py-12

  text-center
  text-white
"
        >

          <h2 className="text-2xl md:text-3xl font-bold">
            Still need help?
          </h2>

          <p className="
mt-3
md:mt-4

max-w-2xl
mx-auto

text-sm
md:text-base

text-red-100

leading-6
md:leading-8
">
            If you couldn't find the answer you're looking for, our Local
            Student Council is ready to assist you. Reach out to us or submit
            your concern through BulSUan Connect.
          </p>

          <div
            className="
mt-6
md:mt-8

flex
flex-col
sm:flex-row

justify-center

gap-3
md:gap-4
"
          >

            <Link
              to="/contact"
              className="
inline-flex
items-center
justify-center

w-full
sm:w-auto

rounded-xl

bg-white

px-6
py-3

text-sm
md:text-base

font-semibold

text-red-700

transition

hover:bg-gray-100
"
            >
              Contact Us
            </Link>

            <Link
              to="/concern"
              className="
inline-flex
items-center
justify-center

w-full
sm:w-auto

rounded-xl

border
border-white

px-6
py-3

text-sm
md:text-base

font-semibold

text-white

transition

hover:bg-white
hover:text-red-700
"
            >
              Submit a Concern
            </Link>

          </div>

        </div>

      </section>

    </PublicLayout>

  );
}

export default FAQ;