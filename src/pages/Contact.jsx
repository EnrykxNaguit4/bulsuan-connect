import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PublicLayout from "../components/layout/PublicLayout";

import {
  getWebsiteSettings,
} from "../features/settings/websiteSettingsService";

import {
  ChatBubbleLeftRightIcon,
  MagnifyingGlassCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  MapPinIcon,
  ClockIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

function Contact() {
  const [loading, setLoading] = useState(true);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    loadSettings();
  }, []);

  async function loadSettings() {
    try {
      const data = await getWebsiteSettings();
      setSettings(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <PublicLayout>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="text-center text-gray-500 text-lg">
            Loading contact information...
          </p>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>

      {/* HERO */}

      <section className="bg-[#5E1017] text-white">
  <div className="max-w-7xl mx-auto px-6 py-10 md:py-8 min-h-[180px] md:min-h-[190px] flex flex-col justify-center">
    <h1 className="text-3xl md:text-4xl font-bold">
      Contact Us
    </h1>

    <p className="mt-4 max-w-2xl text-[#FAEAEA] text-base md:text-lg leading-7 md:leading-8">
      Get in touch with the Local Student Council through our official communication channels.
    </p>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-6 py-8">

        {/* ABOUT */}

        <div className="mb-12">

          <h2 className="text-3xl font-bold text-[#5E1017] mb-6">
            About
          </h2>

          <p className="text-gray-600 leading-8">
            {settings.about}
          </p>

        </div>

       {/* NEED ASSISTANCE */}

<div className="mb-12">

  <h2 className="text-3xl font-bold text-[#5E1017] mb-6">
    Need Assistance?
  </h2>

  <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">

    {/* SUBMIT CONCERN */}

    <Link
      to="/concern"
      className="
        bg-white
        rounded-2xl

        p-4
        md:p-8

        border
        border-[#9A1C27]/15

        shadow-[0_15px_40px_-25px_rgba(94,16,23,0.35)]
hover:shadow-[0_20px_50px_-20px_rgba(94,16,23,0.40)]

        transition-all
        duration-300

        hover:-translate-y-1

        flex
        flex-col

        items-center
        md:items-start

        text-center
        md:text-left
      "
    >

      <div
        className="
          w-20 h-20
          md:w-16 md:h-16

          rounded-2xl

          bg-[#FAEAEA]

          flex
          items-center
          justify-center

          mb-4
          md:mb-6
        "
      >

        <ChatBubbleLeftRightIcon
          className="w-11 h-11 md:w-8 md:h-8 text-[#9A1C27]"
        />

      </div>

      <h3
        className="
          text-base
          md:text-3xl

          font-semibold
          text-[#5E1017]

          mb-3
        "
      >
        Submit a Concern
      </h3>

      <p className="hidden md:block text-gray-600 leading-7 mb-8">
        Share your concerns, suggestions, or feedback with the student
        government. We'll make sure your concern are heard.
      </p>

      <span
        className="
          hidden
          md:inline-flex

          items-center
          justify-center

          rounded-xl

          bg-[#5E1017]

          text-white
          font-semibold
hover:bg-[#9A1C27] transition
          px-6
          py-3
        "
      >
        Submit Concern
      </span>

    </Link>

    {/* TRACK CONCERN */}

    <Link
      to="/track-concern"
      className="
        bg-white
        rounded-2xl

        p-4
        md:p-8

        border
        border-[#9A1C27]/15

        shadow-[0_15px_40px_-25px_rgba(94,16,23,0.35)]
hover:shadow-[0_20px_50px_-20px_rgba(94,16,23,0.40)]

        transition-all
        duration-300

        hover:-translate-y-1

        flex
        flex-col

        items-center
        md:items-start

        text-center
        md:text-left
      "
    >

      <div
        className="
          w-20 h-20
          md:w-16 md:h-16

          rounded-2xl

          bg-[#FAEAEA]

          flex
          items-center
          justify-center

          mb-4
          md:mb-6
        "
      >

        <MagnifyingGlassCircleIcon
  className="w-14 h-14 md:w-10 md:h-9 text-[#9A1C27]"
/>

      </div>

      <h3
  className="
    text-base
    md:text-3xl
    font-semibold
    text-[#5E1017]
    mb-3
    leading-tight
  "
>
  <span className="md:hidden">
    Track a
    <br />
    Concern
  </span>

  <span className="hidden md:inline">
    Track a Concern
  </span>
</h3>

      <p className="hidden md:block text-gray-600 leading-7 mb-8">
        Already submitted a concern? Use your reference number to check its
        latest status and monitor any updates.
      </p>

      <span
        className="
          hidden
          md:inline-flex

          items-center
          justify-center

          rounded-xl

          bg-[#9A1C27]

          text-white
          font-semibold
hover:bg-[#5E1017]
          px-6
          py-3
        "
      >
        Track Concern
      </span>

    </Link>

  </div>

</div>

{/* CONTACT INFORMATION */}

<div className="mb-12">

  <h2 className="text-3xl font-bold text-[#5E1017] mb-6">
    Contact Information
  </h2>

  <div className="grid lg:grid-cols-2 gap-8">

    {/* Contact Card */}

    <div
      className="
        bg-white
        rounded-2xl
        p-8
        border
        border-gray-300/90

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >

      <h3 className="text-2xl font-semibold text-[#5E1017] mb-8">
        Get in Touch
      </h3>

      <div className="space-y-8">

        {/* Email */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <EnvelopeIcon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Email
            </p>

            <a
              href={`mailto:${settings.contactEmail}`}
              className="
                font-semibold
                text-gray-800

                hover:text-[#9A1C27]
                transition
              "
            >
              {settings.contactEmail}
            </a>

          </div>

        </div>

        {/* Phone */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <PhoneIcon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Phone
            </p>

            <a
              href={`tel:${settings.contactPhone}`}
              className="
                font-semibold
                text-gray-800

                hover:text-[#9A1C27]
                transition
              "
            >
              {settings.contactPhone}
            </a>

          </div>

        </div>

        {/* Facebook */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <ArrowTopRightOnSquareIcon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Facebook
            </p>

            <a
              href={settings.facebookPageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                font-semibold

                text-[#9A1C27]
                hover:underline
              "
            >
              {settings.facebookPageName}
            </a>

          </div>

        </div>

      </div>

    </div>

    {/* Office Card */}

    <div
      className="
        bg-white
        rounded-2xl
        p-8
        border
        border-gray-300/90

        shadow-sm
        hover:shadow-lg

        transition-all
        duration-300

        hover:-translate-y-1
      "
    >

      <h3 className="text-2xl font-semibold text-[#5E1017] mb-8">
        Office Information
      </h3>

      <div className="space-y-8">

        {/* Office */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <BuildingOffice2Icon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Office
            </p>

            <p className="font-semibold text-gray-800">
              {settings.officeName}
            </p>

          </div>

        </div>

        {/* Location */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <MapPinIcon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Location
            </p>

            <p className="font-semibold text-gray-800">
              {settings.officeLocation}
            </p>

          </div>

        </div>

        {/* Office Hours */}

        <div className="flex items-start gap-4">

          <div
            className="
              w-12
              h-12

              rounded-xl

              bg-[#FAEAEA]

              flex
              items-center
              justify-center

              flex-shrink-0
            "
          >

            <ClockIcon className="w-6 h-6 text-[#9A1C27]" />

          </div>

          <div>

            <p className="text-sm text-gray-500 mb-1">
              Office Hours
            </p>

            <p className="font-semibold text-gray-800">
              {settings.officeHours}
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

      </section>

    </PublicLayout>
  );
}

export default Contact;