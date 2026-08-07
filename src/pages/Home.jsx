import PublicLayout from "../components/layout/PublicLayout";

import HeroSection from "../components/HeroSection/HeroSection";
import QuickActions from "../components/QuickActions/QuickActions";
import LatestAnnouncements from "../components/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";

function Home() {
  return (
    <PublicLayout>
      <HeroSection />

      <QuickActions />

      <LatestAnnouncements />

      <UpcomingEvents />
    </PublicLayout>
  );
}

export default Home;