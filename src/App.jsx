import { Route, Routes } from "react-router-dom";
import Nav from "./assets/components/Nav";
import Header from "./assets/pages/main/Header";
import Home from "./assets/pages/main/Home";
import Livrables from "./assets/pages/main/Livrables";
import Services from "./assets/pages/main/Services";
import Apropos from "./assets/pages/main/Apropos";
import Contact from "./assets/pages/main/Contact";
import Footer from "./assets/pages/main/Footer";
import MethodeHeader from "./assets/pages/methode/MethodeHeader";
import ServicesPage from "./assets/pages/services/services";
import AproposPage from "./assets/pages/apropos/Apropos";
import ContactPage from "./assets/pages/contact/Contact";
import MethodeEtapes from "./assets/pages/methode/MethodeEtapes";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Livrables />
              <Services />
              <Apropos />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/methode"
          element={
            <>
              <MethodeHeader /> <MethodeEtapes />
            </>
          }
        />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/apropos" element={<AproposPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
