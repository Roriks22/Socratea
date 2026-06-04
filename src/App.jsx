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
import ServicesPoles from "./assets/pages/services/ServicesPoles";
import ServicesForfait from "./assets/pages/services/ServicesForfait";
import Pole1Header from "./assets/pages/services/Pole1/Pole1Header";
import Pole1Home from "./assets/pages/services/Pole1/Pole1Home";
import Pole1Livrable from "./assets/pages/services/Pole1/Pole1LIvrable";
import Pole1Objectif from "./assets/pages/services/Pole1/Pole1Objectif";
import Pole2Header from "./assets/pages/services/Pole2/Pole2Header";
import Pole2Home from "./assets/pages/services/Pole2/Pole2Home";
import Pole2Deroulement from "./assets/pages/services/Pole2/Pole2Deroulement";
import Pole2Objectif from "./assets/pages/services/Pole2/Pole2Objectif";
import Pole2Contexte from "./assets/pages/services/Pole2/Pole2Contexte";
import Pole3Header from "./assets/pages/services/Pole3/POle3Header";
import Pole3Positionnement from "./assets/pages/services/Pole3/Pole3Positionnement";
import Pole3Couverture from "./assets/pages/services/Pole3/Pole3Couverture";
import Pole3Objectif from "./assets/pages/services/Pole3/Pole3Objectif";
import Pole4Header from "./assets/pages/services/Pole4/Pole4Header";
import Pole4Formalites from "./assets/pages/services/Pole4/Pole4Formalites";

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
        <Route
          path="/services"
          element={
            <>
              {" "}
              <ServicesHeader /> <ServicesPoles /> <ServicesForfait />{" "}
              <Contact /> <Footer />
            </>
          }
        />
        <Route
          path="/services-comptabilite"
          element={
            <>
              {" "}
              <Pole1Header /> <Pole1Home /> <Pole1Livrable /> <Pole1Objectif />{" "}
              <Contact /> <Footer />{" "}
            </>
          }
        />
        <Route
          path="/services-automatisation"
          element={
            <>
              <Pole2Header /> <Pole2Home /> <Pole2Deroulement />{" "}
              <Pole2Objectif /> <Pole2Contexte />
              <Contact /> <Footer />{" "}
            </>
          }
        />
        <Route
          path="/services-paie"
          element={
            <>
              {" "}
              <Pole3Header /> <Pole3Positionnement /> <Pole3Couverture />{" "}
              <Pole3Objectif /> <Contact /> <Footer />
            </>
          }
        ></Route>
        <Route
          path="/services-juridique"
          element={
            <>
              <Pole4Header /> <Pole4Formalites />
            </>
          }
        ></Route>
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
