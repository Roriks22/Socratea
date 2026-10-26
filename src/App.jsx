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
import AproposHome from "./assets/pages/apropos/AproposHome";
import AproposConviction from "./assets/pages/apropos/AproposConviction";
import AproposLocal from "./assets/pages/apropos/AproposLocal";
import ServicesPoles from "./assets/pages/services/ServicesPoles";
import ServicesForfait from "./assets/pages/services/ServicesForfait";
import Pole1Header from "./assets/pages/services/Pole1/Pole1Header";
import Pole1Home from "./assets/pages/services/Pole1/Pole1Home";
import Pole1Livrable from "./assets/pages/services/Pole1/Pole1Livrable";
import Pole1Objectif from "./assets/pages/services/Pole1/Pole1Objectif";
import Pole2Header from "./assets/pages/services/Pole2/Pole2Header";
import Pole2Home from "./assets/pages/services/Pole2/Pole2Home";
import Pole2Deroulement from "./assets/pages/services/Pole2/Pole2Deroulement";
import Pole2Objectif from "./assets/pages/services/Pole2/Pole2Objectif";
import Pole2Contexte from "./assets/pages/services/Pole2/Pole2Contexte";
import Pole3Header from "./assets/pages/services/Pole3/Pole3Header";
import Pole3Positionnement from "./assets/pages/services/Pole3/Pole3Positionnement";
import Pole3Couverture from "./assets/pages/services/Pole3/Pole3Couverture";
import Pole3Objectif from "./assets/pages/services/Pole3/Pole3Objectif";
import Pole4Header from "./assets/pages/services/Pole4/Pole4Header";
import Pole4Formalites from "./assets/pages/services/Pole4/Pole4Formalites";
import Pole4Operations from "./assets/pages/services/Pole4/Pole4Operations";
import Pole4Sens from "./assets/pages/services/Pole4/Pole4Sens";
import ContactFormulaire from "./assets/pages/contact/ContactFormulaire";
import ContactAgenda from "./assets/pages/contact/ContactAgenda";
import ScrollToTop from "./assets/components/ScrollToTop";
import MentionsHeader from "./assets/pages/MentionsLegales/MentionsHeader";
import MentionsHome from "./assets/pages/MentionsLegales/MentionsHome";
import ConfidentialiteHeader from "./assets/pages/confidentialite/ConfidentialiteHeader";
import ConfidentialiteHome from "./assets/pages/confidentialite/ConfidentialiteHome";
import AproposSocratea from "./assets/pages/apropos/AproposSocratea";
import CabinetsHeader from "./assets/pages/pourlescabinets/CabinetsHeader";
import CabinetsHome from "./assets/pages/pourlescabinets/CabinetsHome";
import CabinetsObjectifs from "./assets/pages/pourlescabinets/CabinetsObjectifs";
import CabinetsCollaboration from "./assets/pages/pourlescabinets/CabinetsCollaboration";
import CabinetsApproche from "./assets/pages/pourlescabinets/CabinetsApproche";
import CabinetsDeroulement from "./assets/pages/pourlescabinets/CabinetsDeroulement";
import CabinetsContact from "./assets/pages/pourlescabinets/CabinetsContact";
import ServicesCabinets from "./assets/pages/services/ServicesCabinets";
import QuestionsHeader from "./assets/pages/questionsfrequentes/QuestionsHeader";
import FAQHome from "./assets/pages/questionsfrequentes/FAQHome";
import FAQFootter from "./assets/pages/questionsfrequentes/FAQFootter";
import ContactFAQ from "./assets/pages/contact/ContactFAQ";
import HeaderTexte from "./assets/pages/main/HeaderTexte";
import SEO from "./assets/components/SEO.jsx";
import StructuredData from "./assets/components/StructuredData";

function App() {
  return (
    <>
      <ScrollToTop />
      <StructuredData />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SEO
                title="SOCRATEA | Expert-comptable à Amiens et partout en France"
                description="SOCRATEA est un cabinet d'expertise comptable près d'Amiens. Nous accompagnons les PME partout en France en comptabilité, fiscalité, pilotage, paie, juridique et automatisation."
              />
              <main>
                <Header />
                <HeaderTexte />
                <Home />
                <Livrables />
                <Services />
                <Apropos />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />

        <Route
          path="/methode"
          element={
            <>
              <SEO
                title="Notre méthode | SOCRATEA, cabinet d'expertise comptable"
                description="Découvrez la méthode SOCRATEA : une expertise comptable fondée sur la proximité, la compréhension de votre entreprise, des chiffres utiles et un accompagnement adapté à vos besoins."
              />
              <main>
                <MethodeHeader /> <MethodeEtapes /> <MethodeHome /> <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <SEO
                title="Expertise comptable, pilotage et conseil | SOCRATEA"
                description="Avec SOCRATEA, les PME disposent d'un accompagnement en comptabilité, fiscalité et pilotage. Le cabinet intervient aussi en paie,juridique et automatisation des flux."
              />
              <main>
                <ServicesHeader /> <ServicesPoles /> <ServicesForfait />
                <ServicesCabinets /> <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/services-comptabilite"
          element={
            <>
              <SEO
                title="Comptabilité, fiscalité et pilotage des PME | SOCRATEA"
                description="SOCRATEA sécurise la comptabilité et les obligations fiscales des PME. Vous disposez de chiffres fiables pour suivre votre activité, votre trésorerie et votre marge."
              />
              <main>
                <Pole1Header /> <Pole1Home /> <Pole1Livrable />{" "}
                <Pole1Objectif />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/services-automatisation"
          element={
            <>
              <SEO
                title="Automatisation des processus et des flux | SOCRATEA"
                description="SOCRATEA simplifie vos processus, automatise les tâches répétitives et connecte vos outils pour fiabiliser vos données et faire gagner du temps à vos équipes."
              />
              <main>
                <Pole2Header /> <Pole2Home /> <Pole2Deroulement />
                <Pole2Objectif /> <Pole2Contexte />
                <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/services-paie"
          element={
            <>
              <SEO
                title="Gestion de la paie et suivi social | SOCRATEA"
                description="SOCRATEA coordonne votre gestion de la paie et les obligations sociales associées : collecte des variables, bulletins de paie, déclarations sociales et suivi des échéances."
              />
              <main>
                <Pole3Header /> <Pole3Positionnement /> <Pole3Couverture />
                <Pole3Objectif /> <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/services-juridique"
          element={
            <>
              <SEO
                title="Secrétariat juridique des sociétés | SOCRATEA"
                description="SOCRATEA vous accompagne dans le secrétariat juridique courant de votre société : approbation des comptes, affectation du résultat et modifications statutaires."
              />
              <main>
                <Pole4Header /> <Pole4Formalites /> <Pole4Operations />
                <Pole4Sens /> <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/apropos"
          element={
            <>
              <SEO
                title="À propos de SOCRATEA | Julien Jacquesson, expert-comptable"
                description="Découvrez Julien Jacquesson, expert-comptable et fondateur de SOCRATEA, son parcours entre audit et direction financière et sa vision de l'accompagnement des entreprises."
              />
              <main>
                <AproposHeader /> <AproposHome /> <AproposConviction />
                <AproposSocratea /> <AproposLocal /> <Contact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <SEO
                title="Contact | Prendre rendez-vous avec SOCRATEA"
                description="Vous avez une question sur votre comptabilité ou le pilotage de votre entreprise ? Prenez contact avec Julien Jacquesson, expert-comptable et fondateur de SOCRATEA."
              />
              <main>
                <ContactHeader /> <ContactFAQ /> <ContactFormulaire />
                <ContactAgenda />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/pour-les-cabinets"
          element={
            <>
              <SEO
                title="Automatisation et organisation des cabinets comptables | SOCRATEA"
                description="SOCRATEA aide les cabinets d'expertise comptable à organiser leurs flux, à automatiser les tâches répétitives et à développer des outils adaptés à leur fonctionnement."
              />
              <main>
                <CabinetsHeader /> <CabinetsHome /> <CabinetsObjectifs />
                <CabinetsCollaboration /> <CabinetsApproche />
                <CabinetsDeroulement /> <CabinetsContact />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/questions-frequentes"
          element={
            <>
              <SEO
                title="Questions fréquentes | SOCRATEA"
                description="Retrouvez les réponses aux questions fréquentes concernant l'accompagnement de SOCRATEA, la comptabilité, le pilotage, la paie, le juridique et nos services."
              />
              <main>
                <QuestionsHeader /> <FAQHome /> <FAQFootter />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/mentions-legales"
          element={
            <>
              <SEO
                title="Mentions légales | SOCRATEA"
                description="Consultez les mentions légales du site internet du cabinet d'expertise comptable SOCRATEA."
              />
              <main>
                <MentionsHeader /> <MentionsHome />
              </main>
              <Footer />
            </>
          }
        />
        <Route
          path="/confidentialite"
          element={
            <>
              <SEO
                title="Politique de confidentialité | SOCRATEA"
                description="Consultez la politique de confidentialité et les informations relatives à la protection des données personnelles du site SOCRATEA."
              />
              <main>
                <ConfidentialiteHeader /> <ConfidentialiteHome />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
