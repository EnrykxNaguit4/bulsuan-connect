import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-20 sm:h-20" aria-hidden="true" />

      {children}

      <Footer />
    </>
  );
}

export default PublicLayout;