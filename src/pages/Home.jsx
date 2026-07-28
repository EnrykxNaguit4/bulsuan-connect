import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import QuickActions from "../components/QuickActions/QuickActions";
import LatestAnnouncements from "../components/LatestAnnouncements/LatestAnnouncements";
import UpcomingEvents from "../components/UpcomingEvents/UpcomingEvents";
import DownloadableFiles from "../components/DownloadableFiles/DownloadableFiles";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <HeroSection />

      <QuickActions />

      <LatestAnnouncements />

      <UpcomingEvents />

      <DownloadableFiles />

      <Footer />
    </>
  );
}

export default Home;