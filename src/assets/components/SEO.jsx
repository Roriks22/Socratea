import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://www.socratea.net";
const SITE_NAME = "SOCRATEA";
const OG_IMAGE = `${SITE_URL}/og-socratea.jpg`;

const SEO = ({ title, description }) => {
  const location = useLocation();

  const pathname =
    location.pathname === "/"
      ? "/"
      : `/${location.pathname.replace(/^\/+|\/+$/g, "")}`;

  const canonicalUrl = pathname === "/" ? SITE_URL : `${SITE_URL}${pathname}`;

  return (
    <Helmet>
      {/* SEO principal */}
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="author" content="SOCRATEA" />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="fr_FR" />

      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:type" content="image/jpeg" />
      <meta
        property="og:image:alt"
        content="SOCRATEA, cabinet d'expertise comptable"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta
        name="twitter:image:alt"
        content="SOCRATEA, cabinet d'expertise comptable"
      />
    </Helmet>
  );
};

export default SEO;
