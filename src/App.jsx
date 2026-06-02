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
import ServicesHeader from "./assets/pages/services/ServicesHeader";
import AproposHeader from "./assets/pages/apropos/AproposHeader";
import ContactHeader from "./assets/pages/contact/ContactHeader";
import MethodeEtapes from "./assets/pages/methode/MethodeEtapes";
import MethodeHome from "./assets/pages/methode/MethodeHome";
import MethodeEngagement from "./assets/pages/methode/MethodeEngagement";
import AproposHome from "./assets/pages/apropos/AproposHome";
import AproposConviction from "./assets/pages/apropos/AproposConviction";
import AproposDiplome from "./assets/pages/apropos/AproposDiplome";
import AproposLocal from "./assets/pages/apropos/AproposLocal";

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
              <MethodeHeader /> <MethodeEtapes /> <MethodeHome />{" "}
              <MethodeEngagement /> <Contact /> <Footer />
            </>
          }
        />
        <Route path="/services" element={<ServicesHeader />} />
        <Route
          path="/apropos"
          element={
            <>
              {" "}
              <AproposHeader /> <AproposHome /> <AproposConviction />{" "}
              <AproposDiplome /> <AproposLocal /> <Contact /> <Footer />
            </>
          }
        />
        <Route path="/contact" element={<ContactHeader />} />
      </Routes>
    </>
  );
}

export default App;
