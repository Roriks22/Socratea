import { Link } from "react-router-dom";

const MentionsHome = () => {
  return (
    <section className="mentions-home">
      <div className="container">
        <div className="legal-content">
          <h1>Mentions légales</h1>
          <span>Dernière mise à jour : 26 Juin 2026</span>
          <h2 className="premier-h2">Éditeur du site</h2>
          <p>
            Le présent site est édité par <strong>SOCRATEA</strong>, entreprise
            unipersonnelle à responsabilité limitée au capital de
            <strong> 10 000 euros,</strong> dont le siège social est situé :{" "}
            <br />
            21, rue Charlemagne <br />
            80480 Vers-sur-Selle <br />
            Numéro SIREN : <em>[en cours d'attribution]</em> <br />
            Numéro de TVA intracommunautaire : <em>
              [en cours d'attribution]
            </em>{" "}
            <br />
            Téléphone : <strong className="strong-tel">
              06 86 50 61 29
            </strong>{" "}
            <br />
            Adresse électronique :{" "}
            <strong>
              <Link to="mailto:julien.jacquesson@socratea-expertise.fr">
                julien.jacquesson@socratea-expertise.fr
              </Link>
            </strong>
          </p>
          <h2>Directeur de la publication</h2>
          <p>
            Le directeur de la publication est{" "}
            <strong>Julien Jacquesson</strong>, en qualité de gérant de
            SOCRATEA.
          </p>
          <h2>Activité professionnelle</h2>
          <p>
            SOCRATEA exerce une activité d’expertise comptable réglementée en
            France. <br />
            La société est inscrite au tableau de l’Ordre des experts-comptables
            de la région Hauts-de-France sous le numéro
            <em>[numéro d’inscription de la société]</em>. <br />
            Julien Jacquesson est inscrit au tableau de l’Ordre des
            experts-comptables sous le numéro{" "}
            <em>[numéro d’inscription de la personne physique]</em>. <br />
            Autorité professionnelle compétente : <br />{" "}
            <strong>
              Conseil régional de l’Ordre des experts-comptables des
              Hauts-de-France <br /> 10, rue de Tenremonde <br /> 59040 Lille
              Cedex <br />{" "}
            </strong>
            <strong className="strong-tel">03 20 15 80 80</strong>
          </p>
          <h2>Conception et réalisation</h2>
          <p>
            Conception éditoriale : <strong>SOCRATEA</strong>
          </p>
          <div className="developer-card">
            <h3>Développement du site</h3>
            <p>
              Site conçu et développé par : <strong>RomDevix</strong>,
              développeur Full Stack spécialisé dans la création de sites web
              modernes, applications web et solutions sur mesure.
            </p>
            <div className="developer-links">
              <a
                href="https://www.instagram.com/romdevix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
              <a
                href="https://www.tiktok.com/@romdevix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-tiktok"></i>TikTok
              </a>
            </div>
          </div>

          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par : <br />
            <strong>OVH SAS</strong> <br />
            Société par actions simplifiée au capital de 50 000 000 euros <br />{" "}
            RCS Lille Métropole 424 761 419 <br />
            2 rue Kellermann <br />
            59100 Roubaix <br />
            France <br />
            Téléphone :{" "}
            <strong className="strong-tel">+33 9 72 10 10 07</strong>
          </p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Le site, sa structure et les éléments qui le composent, notamment
            les textes, photographies, illustrations, éléments graphiques, logos
            et signes distinctifs, sont protégés par les dispositions
            applicables à la propriété intellectuelle. <br />
            Sauf mention contraire, ces éléments appartiennent à SOCRATEA ou
            sont utilisés avec l’autorisation de leurs titulaires. <br />
            Toute reproduction, représentation, adaptation, diffusion ou
            exploitation de tout ou partie du site, par quelque procédé que ce
            soit, nécessite l’autorisation écrite préalable de SOCRATEA, sauf
            dans les cas expressément autorisés par la loi.
          </p>
          <h2>Contenu du site</h2>
          <p>
            SOCRATEA veille à fournir des informations aussi exactes et à jour
            que possible. <br />
            Les contenus publiés sur le site présentent de manière générale le
            projet, l’approche et les futurs domaines d’intervention de
            SOCRATEA. Ils ne constituent ni une consultation personnalisée ni un
            conseil adapté à une situation particulière. <br />
            La nature et l’étendue de toute future intervention seront définies
            en fonction de la situation du client et du périmètre de la mission
            convenue. <br />
            SOCRATEA peut modifier, compléter ou mettre à jour les contenus du
            site à tout moment.
          </p>
          <h2>Liens vers des services externes</h2>
          <p>
            Le site peut contenir des liens vers des sites, plateformes ou
            services exploités par des tiers. <br />
            SOCRATEA ne maîtrise pas le contenu, la disponibilité ou le
            fonctionnement de ces services externes et ne peut être tenue
            responsable des informations ou services qu’ils proposent.
          </p>
          <h2>Données personnelles</h2>
          <p>
            Les modalités de collecte et de traitement des données personnelles,
            les services tiers utilisés ainsi que les conditions d’exercice de
            vos droits sont présentés dans la page{" "}
            <strong>
              {" "}
              <Link to="/confidentialite">Politique de confidentialité.</Link>
            </strong>{" "}
            <br />
            Pour toute question relative à vos données personnelles, vous pouvez
            écrire à : <br />{" "}
            <strong>
              {" "}
              <Link to="mailto:julien.jacquesson@socratea-expertise.fr">
                julien.jacquesson@socratea-expertise.fr
              </Link>
            </strong>
          </p>
          <h2>Cookies et services tiers</h2>
          <p>
            Le site peut utiliser des services tiers nécessaires à son
            fonctionnement, notamment pour la prise de rendez-vous ou l’envoi de
            formulaires. <br />
            Les informations relatives aux cookies, aux traceurs et aux
            éventuels mécanismes de consentement sont précisées dans la{" "}
            <strong>
              {" "}
              <Link to="/confidentialite">Politique de confidentialité.</Link>
            </strong>{" "}
          </p>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant le site ou son contenu : <br />
            <strong>SOCRATEA</strong> <br />
            21 rue Charlemagne <br />
            80480 Vers-sur-Selle <br />
            Téléphone : <strong className="strong-tel">
              06 86 50 61 29
            </strong>{" "}
            <br />
            Adresse électronique :{" "}
            <strong>
              {" "}
              <Link to="mailto:julien.jacquesson@socratea-expertise.fr">
                julien.jacquesson@socratea-expertise.fr
              </Link>
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentionsHome;
