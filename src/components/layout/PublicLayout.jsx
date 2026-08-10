import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="h-[96px] sm:h-[96px]" aria-hidden="true" />

      {children}

      <Footer />
    </>
  );
}

export default PublicLayout;