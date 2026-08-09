import { useEffect, useState } from "react";

import {
  MegaphoneIcon,
  CalendarDaysIcon,
  FolderIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

import AdminLayout from "../../components/admin/Layout/AdminLayout";
import StatCard from "../../components/admin/StatCard";
import DashboardSection from "../../components/admin/DashboardSection";

import RecentConcerns from "../../components/admin/dashboard/RecentConcerns";
import RecentAnnouncements from "../../components/admin/dashboard/RecentAnnouncements";
import UpcomingEvents from "../../components/admin/dashboard/UpcomingEvents";

import ConcernModal from "../../features/concerns/ConcernModal";
import AnnouncementModal from "../../features/announcements/AnnouncementModal";
import EventModal from "../../features/events/EventModal";

import {
  getAnnouncementCount,
  getAnnouncements,
} from "../../features/announcements/announcementService";

import {
  getEventCount,
  getEvents,
} from "../../features/events/eventService";

import {
  getFileCount,
} from "../../features/files/fileService";

import {
  getPendingConcernCount,
  getRecentConcerns,
} from "../../features/concerns/concernService";

function Dashboard() {

  const [announcementCount, setAnnouncementCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);
  const [fileCount, setFileCount] = useState(0);
  const [pendingConcernCount, setPendingConcernCount] = useState(0);

  const [recentAnnouncements, setRecentAnnouncements] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [recentConcerns, setRecentConcerns] = useState([]);

  const [selectedConcern, setSelectedConcern] = useState(null);
  const [showConcernModal, setShowConcernModal] = useState(false);

  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showAnnouncementModal, setShowAnnouncementModal] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);

  async function loadDashboard() {

    const [

      announcementCount,

      eventCount,

      fileCount,

      pendingCount,

      announcements,

      events,

      concerns,

    ] = await Promise.all([

      getAnnouncementCount(),

      getEventCount(),

      getFileCount(),

      getPendingConcernCount(),

      getAnnouncements(),

      getEvents(),

      getRecentConcerns(),

    ]);

    setAnnouncementCount(announcementCount);
    setEventCount(eventCount);
    setFileCount(fileCount);
    setPendingConcernCount(pendingCount);

    setRecentAnnouncements(announcements.slice(0, 3));
    setUpcomingEvents(events.slice(0, 3));
    setRecentConcerns(concerns);

  }

  useEffect(() => {

    loadDashboard();

  }, []);

  return (

    <AdminLayout
      title="Dashboard"
      description="Welcome back, Administrator. Here's an overview of your website."
    >


<div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 mb-10">

  <StatCard
    title="Announcements"
    value={announcementCount}
    description="Published announcements"
    icon={MegaphoneIcon}
    path="/admin/announcements"
  />

  <StatCard
    title="Events"
    value={eventCount}
    description="Published events"
    icon={CalendarDaysIcon}
    path="/admin/events"
  />

  <StatCard
    title="Files"
    value={fileCount}
    description="Uploaded resources"
    icon={FolderIcon}
    path="/admin/files"
  />

  <StatCard
    title="Pending Concerns"
    value={pendingConcernCount}
    description="Awaiting review"
    icon={ExclamationTriangleIcon}
    path="/admin/concerns"
  />

</div>

      <DashboardSection
        title="Recent Concerns"
        viewAll="/admin/concerns"
      >

        <RecentConcerns
          concerns={recentConcerns}
          onView={(concern) => {

            setSelectedConcern(concern);
            setShowConcernModal(true);

          }}
        />

      </DashboardSection>

      <DashboardSection
        title="Recent Announcements"
        viewAll="/admin/announcements"
      >

        <RecentAnnouncements
          announcements={recentAnnouncements}
          onEdit={(announcement) => {

            setSelectedAnnouncement(announcement);
            setShowAnnouncementModal(true);

          }}
        />

      </DashboardSection>

      <DashboardSection
        title="Upcoming Events"
        viewAll="/admin/events"
      >

        <UpcomingEvents
          events={upcomingEvents}
          onEdit={(event) => {

            setSelectedEvent(event);
            setShowEventModal(true);

          }}
        />

      </DashboardSection>

      {showConcernModal && (

        <ConcernModal
          concern={selectedConcern}
          onClose={() => {

            setShowConcernModal(false);
            setSelectedConcern(null);

          }}
          onSuccess={async () => {

            await loadDashboard();

            setShowConcernModal(false);
            setSelectedConcern(null);

          }}
        />

      )}

      {showAnnouncementModal && (

        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => {

            setShowAnnouncementModal(false);
            setSelectedAnnouncement(null);

          }}
          onSuccess={async () => {

            await loadDashboard();

            setShowAnnouncementModal(false);
            setSelectedAnnouncement(null);

          }}
        />

      )}

      {showEventModal && (

        <EventModal
          event={selectedEvent}
          onClose={() => {

            setShowEventModal(false);
            setSelectedEvent(null);

          }}
          onSuccess={async () => {

            await loadDashboard();

            setShowEventModal(false);
            setSelectedEvent(null);

          }}
        />

      )}

    </AdminLayout>

  );

}

export default Dashboard;