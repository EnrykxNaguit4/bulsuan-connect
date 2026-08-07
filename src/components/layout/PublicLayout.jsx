import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function PublicLayout({ children }) {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
}

export default PublicLayout;