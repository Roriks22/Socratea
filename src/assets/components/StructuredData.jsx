import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.socratea.net";
const SITE_NAME = "SOCRATEA";
const SITE_DESCRIPTION =
  "SOCRATEA accompagne les dirigeants en comptabilité, fiscalité, pilotage, paie, juridique et automatisation.";

const StructuredData = () => {
  const location = useLocation();

  const pathname =
    location.pathname === "/"
      ? "/"
      : `/${location.pathname.replace(/^\/+|\/+$/g, "")}`;

  const canonicalUrl = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;

  /*
   * Pages et noms utilisés pour le fil d'Ariane.
   */
  const breadcrumbNames = {
    "/": "Accueil",
    "/methode": "Notre méthode",
    "/services": "Nos services",
    "/services-comptabilite": "Comptabilité et pilotage",
    "/services-automatisation": "Automatisation et structuration des flux",
    "/services-paie": "Social et paie",
    "/services-juridique": "Juridique",
    "/apropos": "À propos",
    "/contact": "Contact",
    "/pour-les-cabinets": "Pour les cabinets",
    "/questions-frequentes": "Questions fréquentes",
    "/mentions-legales": "Mentions légales",
    "/confidentialite": "Politique de confidentialité",
  };

  const pageName = breadcrumbNames[pathname] || SITE_NAME;

  /*
   * Construction du fil d'Ariane.
   */
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: `${SITE_URL}/`,
    },
  ];

  if (pathname !== "/") {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: canonicalUrl,
    });
  }

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      /*
       * ORGANIZATION
       */
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,

        name: "SOCRATEA",
        legalName: "SOCRATEA",

        url: `${SITE_URL}/`,

        logo: `${SITE_URL}/favicon.svg`,
        image: `${SITE_URL}/og-socratea.jpg`,

        description: SITE_DESCRIPTION,

        telephone: "+33768775524",
        email: "julien.jacquesson@socratea.net",

        sameAs: ["https://www.linkedin.com/in/jacquesson-julien-b72870a9/"],

        areaServed: [
          {
            "@type": "City",
            name: "Amiens",
          },
          {
            "@type": "Country",
            name: "France",
          },
        ],
      },

      /*
       * ACTIVITÉ PROFESSIONNELLE
       *
       * L'adresse personnelle n'est pas exposée ici
       * car SOCRATEA ne reçoit pas de clients à domicile.
       */
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professionalservice`,

        name: "SOCRATEA",

        url: `${SITE_URL}/`,
        image: `${SITE_URL}/og-socratea.jpg`,

        telephone: "+33768775524",
        email: "julien.jacquesson@socratea.net",

        description:
          "Cabinet d'expertise comptable accompagnant les dirigeants en comptabilité, fiscalité, pilotage, paie, juridique et automatisation.",

        areaServed: [
          {
            "@type": "City",
            name: "Amiens",
          },
          {
            "@type": "Country",
            name: "France",
          },
        ],

        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",

            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],

            opens: "08:00",
            closes: "19:00",
          },
        ],

        parentOrganization: {
          "@id": `${SITE_URL}/#organization`,
        },
      },

      /*
       * WEBSITE
       */
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,

        url: `${SITE_URL}/`,
        name: SITE_NAME,

        description: SITE_DESCRIPTION,

        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },

        inLanguage: "fr-FR",
      },

      /*
       * WEBPAGE
       *
       * Cette partie est maintenant dynamique :
       * /services -> /services#webpage
       * /contact -> /contact#webpage
       * etc.
       */
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,

        url: canonicalUrl,

        name:
          pathname === "/"
            ? "SOCRATEA | Expert-comptable à Amiens et partout en France"
            : `${pageName} | SOCRATEA`,

        isPartOf: {
          "@id": `${SITE_URL}/#website`,
        },

        about: {
          "@id": `${SITE_URL}/#organization`,
        },

        breadcrumb: {
          "@id": `${canonicalUrl}#breadcrumb`,
        },

        inLanguage: "fr-FR",
      },

      /*
       * BREADCRUMBLIST
       */
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,

        itemListElement: breadcrumbItems,
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default StructuredData;
