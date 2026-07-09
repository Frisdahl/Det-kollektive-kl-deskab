import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../components/layout/Container";
import heroImage from "../assets/images/hero-img.webp";
import sustainabilityImage from "../assets/images/bæredygtighed.webp";
import leneImage from "../assets/images/Lene.webp";

const aboutSections = [
  {
    kicker: "Hvem er vi",
    title: "Om Det Kollektive Klædeskab",
    image: heroImage,
    imageAlt: "Medlem finder tøj i Det Kollektive Klædeskab",
    body: [
      "Har du tøj i skabet, som du bare ikke får brugt? Måske en fed jakke eller kjole, som hænger der, fordi stilen eller størrelsen ikke helt er dig længere?",
      "Hos Det Kollektive Klædeskab giver du dit secondhand tøj nyt liv gennem vores tøjbyttefællesskab - her kan du bytte det ud med noget, der passer bedre til din stil.",
      "Med et medlemskab kan du nemt tage dine skjorter, bukser eller jakker med til os, få point for dem, og tage nyt genbrugstøj med hjem. Vi vurderer tøjet ud fra kvalitet, stand og efterspørgsel, så du får point, der matcher værdien.",
      "For kun 199 kr. om måneden kan du bytte op til 10 stykker tøj ad gangen og prøve nyt uden at købe nyt - en enkel måde at forny din stil og gøre en forskel.",
      "Få mere garderobeglæde og vær med til at skabe en mere bæredygtig fremtid gennem genbrug.",
    ],
    links: [
      {
        label: "Meld dig ind her",
        to: "/medlemskab/#bliv-medlem",
        variant: "button",
      },
      {
        label: "Vil du vide mere, så besøg vores FAQ lige her",
        to: "/faq",
        variant: "text",
      },
    ],
  },
  {
    kicker: "Vi tror på",
    title: "Et fællesskab for fremtiden",
    image: sustainabilityImage,
    imageAlt: "Bæredygtighed og genbrug i Det Kollektive Klædeskab",
    body: [
      "Vidste du, at tekstilindustrien står for op mod 10% af verdens samlede CO2-udledning? Det gør den til en af de mest forurenende industrier, kun overgået af få andre.",
      "Som medlem af Det Kollektive Klædeskab er du med til at gøre en konkret forskel. Ved at bytte og dele tøj i stedet for at købe nyt, bidrager du til at reducere behovet for nyproduktion og bekæmpe den enorme overproduktion i tøjindustrien.",
      "Vores vision er at gøre mode mere bæredygtig og tilgængelig for alle ved at skabe et cirkulært og meningsfuldt fællesskab, hvor det er enkelt at forny sin stil - med omtanke.",
    ],
  },
  {
    kicker: "Mød os",
    title: "Mit navn er Lene Olesen.",
    image: leneImage,
    imageAlt: "Lene Olesen fra Det Kollektive Klædeskab",
    body: [
      "Jeg er ansvarlig for den daglige drift i Det Kollektive Klædeskab. Måske har du set mig på Instagram, hvor jeg løbende deler opslag fra vores hverdag - f.eks. hvordan man passer bedre på sit tøj, hinanden og vores fælles ressourcer.",
      "Hvorfor et tøjbyttefællesskab? Fordi jeg - ligesom mange andre - blev træt af at se skabe være fyldt med tøj, som vi sjældent eller aldrig får brugt. Og fordi jeg blev bevidst om, hvor stor belastningen fra tekstilproduktion er for miljøet og klimaet.",
      "Så i stedet for blot at lade stå til, begyndte jeg at overveje: Hvad hvis vi deler det, vi allerede har, i stedet for at købe nyt?",
      "Det blev starten på Det Kollektive Klædeskab - et fælles system, hvor man kan bytte sig til nye muligheder, samtidig med at man forlænger levetiden på tøjet og deltager i et fællesskab, der har fokus på omtanke og ansvarlighed.",
      "Her er plads til dig, der allerede er vant til at vælge genbrug. Til dig, der gerne vil tage et skridt ad gangen. Og til dig, der bare gerne vil bruge dit tøj mere hensigtsmæssigt - uden at det kræver store forandringer i din hverdag.",
      "Hos os er der ingen løftede pegefingre. Vi fokuserer på fællesskab, omtanke og på at give godt tøj mulighed for at komme videre - i stedet for at ende som spild.",
      "Jeg tror på, at vi sammen kan gøre en forskel - ét stykke tøj ad gangen. Jeg håber at vi kan blive så mange som muligt, jeg kan ikke gøre det her alene.",
    ],
  },
];

export function About() {
  return (
    <main className="flex-1 bg-[#f9f4f1]">
      <section className="border-b border-[#E6DED6] bg-[#f9f4f1] py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
              Om os
            </p>
            <h1 className="mt-4 text-[clamp(2.35rem,4.3vw,3.9rem)] leading-[0.98] font-normal tracking-tight text-[#2A2926]">
              Et fællesskab med mere liv i garderoben
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="space-y-16 md:space-y-24">
            {aboutSections.map((section, index) => {
              const imageFirst = index % 2 === 1;

              return (
                <article
                  key={section.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
                >
                  <div
                    className={[
                      "max-w-2xl",
                      imageFirst ? "lg:order-2" : "",
                    ].join(" ")}
                  >
                    <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                      {section.kicker}
                    </p>
                    <h2 className="fluid-title-md mt-3 font-medium tracking-tight text-[#2A2926]">
                      {section.title}
                    </h2>
                    <div className="mt-6 space-y-5 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>

                    {section.links ? (
                      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                        {section.links.map((link) =>
                          link.variant === "button" ? (
                            <Link
                              key={link.label}
                              to={link.to}
                              className="inline-flex items-center gap-2 rounded-full bg-[#8A776B] px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-[#FDFBF8] transition-colors hover:bg-[#2A2926] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                            >
                              {link.label}
                              <ArrowUpRight
                                className="h-4 w-4"
                                strokeWidth={1.8}
                                aria-hidden="true"
                              />
                            </Link>
                          ) : (
                            <Link
                              key={link.label}
                              to={link.to}
                              className="text-sm font-semibold text-[#8A776B] underline decoration-[#DCC8B6] decoration-2 underline-offset-4 transition-colors hover:text-[#2A2926]"
                            >
                              {link.label}
                            </Link>
                          ),
                        )}
                      </div>
                    ) : null}
                  </div>

                  <div
                    className={[
                      "relative min-h-[21rem] overflow-hidden rounded-[1.5rem] bg-[#DCC8B6] shadow-[0_22px_70px_rgba(42,41,38,0.12)] md:min-h-[30rem]",
                      imageFirst ? "lg:order-1" : "",
                    ].join(" ")}
                  >
                    <img
                      src={section.image}
                      alt={section.imageAlt}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,41,38,0.28),rgba(42,41,38,0)_58%)]"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
