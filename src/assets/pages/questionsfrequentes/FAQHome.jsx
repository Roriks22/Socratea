import { useState } from "react";
import useReveal from "../../components/useReveal";

const faqData = [
  {
    category: "Démarrer avec Socratea",
    questions: [
      {
        question: "Quelles entreprises accompagnez-vous ?",
        answer:
          "SOCRATEA accompagne des entreprises aux activités et aux tailles variées. Notre approche prend particulièrement tout son sens lorsque les besoins de structuration, de pilotage ou d’organisation commencent à se renforcer. \n\nIl n’existe cependant pas de profil unique. Le premier échange permet surtout de vérifier que notre manière de travailler correspond à votre entreprise et à ce que vous attendez de votre cabinet.",
      },
      {
        question: "Intervenez-vous uniquement autour d’Amiens ?",
        answer:
          "Non. SOCRATEA est installé près d’Amiens, mais peut accompagner des entreprises partout en France grâce à une organisation largement dématérialisée. \n\nLa proximité ne dépend pas seulement de la distance : elle tient surtout à la qualité des échanges, à la disponibilité de l’information et à la compréhension de votre entreprise.",
      },
      {
        question: "Comment se déroule un changement d’expert-comptable ?",
        answer:
          "Une fois la mission définie, nous organisons la reprise du dossier et les échanges nécessaires avec votre précédent cabinet, dans le respect des règles professionnelles. \n\nNous préparons également avec vous les accès, les outils, les documents et le calendrier de transmission afin que le changement se déroule sans flottement.",
      },
      {
        question: "Comment se passe le premier rendez-vous ?",
        answer:
          "Le premier échange dure environ 30 minutes. Il nous permet de comprendre votre activité, votre organisation et vos attentes. \n\nDe votre côté, vous découvrez l’approche SOCRATEA et pouvez vérifier qu’elle vous convient. Ce rendez-vous est sans engagement.",
      },
    ],
  },
  {
    category: "Votre accompagnement",
    questions: [
      {
        question: "Que peut prendre en charge SOCRATEA ?",
        answer:
          "La mission peut couvrir la comptabilité, la fiscalité, le pilotage, la paie, le juridique courant ainsi que l’organisation et l’automatisation de certains processus. \n\nElle est construite à partir de votre fonctionnement. SOCRATEA peut produire votre comptabilité, réviser les travaux de vos équipes ou intervenir sur un périmètre défini.",
      },
      {
        question: "Comment les honoraires sont-ils déterminés ?",
        answer:
          "Les honoraires dépendent notamment de votre activité, de votre organisation, du volume à traiter, des outils utilisés et du niveau d’accompagnement souhaité. \n\nNous définissons la mission et son coût avant de commencer. Vous savez ainsi ce qui est pris en charge et comment les honoraires ont été construits.",
      },
      {
        question: "Aurai-je un interlocuteur identifié ?",
        answer:
          "Oui. Vous échangez avec un interlocuteur qui connaît votre entreprise, votre organisation et les sujets en cours. \n\nLorsque d’autres spécialistes doivent intervenir, SOCRATEA coordonne les échanges afin que vous conserviez une vision claire de l’ensemble.",
      },
      {
        question: "Prenez-vous également en charge la paie et le juridique ?",
        answer:
          "Oui, selon les besoins définis dans votre mission. \n\nSOCRATEA organise et suit les travaux liés à la paie et aux déclarations sociales. Le cabinet peut également vous accompagner pour l’approbation des comptes, le secrétariat juridique courant et certaines évolutions de votre société, dans son périmètre d’intervention.",
      },
    ],
  },
  {
    category: "Vos chiffres, vos outils et votre organisation",
    questions: [
      {
        question: "Qu’est-ce que le Flash mensuel J+5 ?",
        answer:
          "Le Flash mensuel est une restitution courte qui permet de suivre régulièrement les principaux indicateurs de votre entreprise, sans attendre la clôture annuelle.\n\nSon contenu dépend de votre activité et de vos priorités : trésorerie, chiffre d’affaires, marge, charges, rentabilité ou tout autre indicateur réellement utile à vos décisions.",
      },
      {
        question:
          "Le Flash mensuel J+5 est-il proposé à toutes les entreprises ?",
        answer:
          "Oui, le Flash mensuel J+5 peut être proposé à toute entreprise, mais il doit être adapté à son organisation. \n\nL’objectif est de vous fournir, rapidement après la fin du mois, une vision claire de vos principaux indicateurs : trésorerie, chiffre d’affaires, marge, charges, rentabilité ou tout autre élément utile à vos décisions. \n\nLe niveau de détail et le délai de restitution dépendent toutefois de la disponibilité des informations, de la qualité des flux, du calendrier convenu et des contrôles nécessaires. \n\nLorsque l’organisation existante ne permet pas encore un suivi à J+5, nous construisons avec vous une trajectoire progressive pour fiabiliser les données, automatiser ce qui peut l’être et rendre ce rythme réaliste.",
      },
      {
        question: "Devrai-je changer tous mes outils ?",
        answer:
          "Non. Nous partons d’abord de votre organisation et des outils que vous utilisez déjà. \n\nLorsque cela est possible, nous cherchons à mieux les organiser, à les connecter ou à simplifier les échanges. Un nouvel outil n’est proposé que s’il apporte un bénéfice concret.",
      },
      {
        question: "SOCRATEA peut-il automatiser certains processus ?",
        answer:
          "Oui. Nous pouvons intervenir sur des tâches répétitives, des doubles saisies, des circuits de validation ou des informations qui circulent mal entre vos outils. \n\nSelon le besoin, la réponse peut être une évolution de processus, une automatisation, une connexion entre plusieurs solutions ou le développement d’une application adaptée.",
      },
    ],
  },
];
const FAQHome = () => {
  useReveal();

  const [open, setOpen] = useState(null);

  return (
    <section className="faq-home">
      <div className="container">
        <div className="faq-header reveal reveal-1">
          <span className="eyebrow">Questions fréquentes</span>
          <h2>Les réponses aux questions les plus courantes.</h2>
          <p>
            Vous trouverez ci-dessous les principales informations concernant le
            fonctionnement du cabinet, notre accompagnement et le démarrage
            d'une collaboration.
          </p>
        </div>
        {faqData.map((category) => (
          <div className="faq-category reveal reveal-2" key={category.category}>
            <h3>{category.category}</h3>
            {category.questions.map((item, index) => {
              const id = `${category.category}-${index}`;
              return (
                <div
                  className={`faq-item ${open === id ? "active" : ""}`}
                  key={id}
                >
                  <button
                    className="faq-question"
                    onClick={() => setOpen(open === id ? null : id)}
                  >
                    <span>{item.question}</span>
                    <svg
                      className="faq-icon"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className="faq-answer">
                    {item.answer.split("\n\n").map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQHome;
