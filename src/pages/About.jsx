import { Link } from "react-router-dom";
import { ArrowUpRight, Mail } from "lucide-react";
import { Container } from "../components/layout/Container";
import heroImage from "../assets/images/hero-img.webp";
import sustainabilityImage from "../assets/images/bæredygtighed.webp";
import leneImage from "../assets/images/Lene.webp";
import volunteerImageOne from "../assets/images/slider-img-1.webp";
import volunteerImageTwo from "../assets/images/slider-img-2.webp";
import volunteerImageThree from "../assets/images/slider-img-4.webp";
import volunteerImageFour from "../assets/images/slider-img-6.webp";

const aboutSections = [
  {
    kicker: "Hvem er vi",
    title: "Om Det Kollektive Klædeskab",
    image: heroImage,
    imageAlt: "Medlem finder tøj i Det Kollektive Klædeskab",
    body: [
      "Har du tøj i skabet, som du ikke får brugt? Hos Det Kollektive Klædeskab giver du dit secondhand tøj nyt liv gennem vores tøjbyttefællesskab.",
      "Med et medlemskab kan du tage tøj med til os, få point for det og finde nyt genbrugstøj, der passer bedre til din stil. Vi vurderer tøjet ud fra kvalitet, stand og efterspørgsel.",
      "For 199 kr. om måneden kan du bytte op til 10 stykker tøj ad gangen - en enkel måde at forny garderoben med mere omtanke.",
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
      "Tekstilindustrien er en af verdens mest belastende industrier, og overproduktion er en stor del af problemet.",
      "Når du bytter og deler tøj i stedet for at købe nyt, er du med til at forlænge tøjets levetid og mindske behovet for nyproduktion.",
      "Vores vision er at gøre mode mere bæredygtig og tilgængelig gennem et cirkulært fællesskab, hvor det er enkelt at forny sin stil med omtanke.",
    ],
  },
  {
    kicker: "Mød os",
    title: "Mit navn er Lene Olesen.",
    image: leneImage,
    imageAlt: "Lene Olesen fra Det Kollektive Klædeskab",
    body: [
      "Jeg er ansvarlig for den daglige drift i Det Kollektive Klædeskab og deler løbende glimt fra vores hverdag på Instagram.",
      "Idéen opstod, fordi jeg blev træt af at se skabe fyldt med tøj, som sjældent blev brugt. Hvad hvis vi deler det, vi allerede har, i stedet for hele tiden at købe nyt?",
      "Det blev starten på et fælles system, hvor tøj kan få nyt liv, og hvor flere kan forny garderoben med omtanke. Her er plads til både erfarne genbrugsbrugere og dig, der bare gerne vil tage et skridt ad gangen.",
      "Jeg tror på, at vi sammen kan gøre en forskel - ét stykke tøj ad gangen.",
    ],
  },
];

const volunteers = [
  {
    backgroundClass: "bg-[#F3E7D8]",
    email: "mailto:anna@detkollektiveklaedeskab.dk",
    image: volunteerImageOne,
    imageAlt: "Frivillig i Det Kollektive Klædeskab",
    linkedin: "https://www.linkedin.com/",
    name: "Anna Madsen",
    text: "Hjælper med at tage imod tøj, skabe overblik i garderoben og give medlemmerne en god oplevelse.",
    title: "Butik og fællesskab",
  },
  {
    backgroundClass: "bg-[#D8C3BD]",
    email: "mailto:sofie@detkollektiveklaedeskab.dk",
    image: volunteerImageTwo,
    imageAlt: "Frivillig med secondhand tøj",
    linkedin: "https://www.linkedin.com/",
    name: "Sofie Lind",
    text: "Er med til at sortere, hænge op og sørge for, at tøjet får den bedste chance for at komme videre.",
    title: "Sortering og styling",
  },
  {
    backgroundClass: "bg-[#DDE2D5]",
    email: "mailto:clara@detkollektiveklaedeskab.dk",
    image: volunteerImageThree,
    imageAlt: "Frivillig i fællesskabet",
    linkedin: "https://www.linkedin.com/",
    name: "Clara Holm",
    text: "Bidrager til hverdagen i butikken og hjælper nye medlemmer godt i gang med konceptet.",
    title: "Medlemsoplevelse",
  },
  {
    backgroundClass: "bg-[#E8D6C6]",
    email: "mailto:emma@detkollektiveklaedeskab.dk",
    image: volunteerImageFour,
    imageAlt: "Frivillig i garderoben",
    linkedin: "https://www.linkedin.com/",
    name: "Emma Nielsen",
    text: "Støtter arbejdet med cirkulær mode og gør det lettere for flere at vælge genbrug i hverdagen.",
    title: "Cirkulær garderobe",
  },
];

function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.7 9.4V18H4.1V9.4H6.7ZM5.4 5.2C6.2 5.2 6.8 5.8 6.8 6.6C6.8 7.4 6.2 8 5.4 8C4.6 8 4 7.4 4 6.6C4 5.8 4.6 5.2 5.4 5.2ZM10.6 9.4L10.7 10.6C11.3 9.8 12.2 9.2 13.6 9.2C16.1 9.2 18 10.8 18 14.2V18H15.4V14.4C15.4 12.6 14.7 11.6 13.3 11.6C12.1 11.6 11.4 12.4 11.1 13.2C11 13.5 11 13.8 11 14.2V18H8.4V9.4H10.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function About() {
  return (
    <main className="flex-1 bg-[#f9f4f1]">
      <section className="border-b border-[#E6DED6] bg-[#f9f4f1] py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
              Om os
            </p>
            <h1 className="page-title mt-4 font-normal text-[#2A2926]">
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
                    <h2 className="section-title mt-3 font-medium text-[#2A2926]">
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
                              className="inline-flex items-center gap-2 rounded-full bg-[#8A776B] px-6 py-3 text-sm font-semibold text-[#FDFBF8] transition-colors hover:bg-[#2A2926] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
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

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="border-t border-[#E6DED6] pt-12 md:pt-16">
            <div className="max-w-3xl">
              <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                Frivillige
              </p>
              <h2 className="section-title mt-3 font-medium text-[#2A2926]">
                Mød dem, der giver fællesskabet liv
              </h2>
              <p className="mt-5 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                Vores frivillige er en vigtig del af Det Kollektive Klædeskab.
                De hjælper med tøjet, stemningen og den hverdag, der får
                garderoben til at fungere.
              </p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {volunteers.map((volunteer) => (
                <article
                  key={volunteer.name}
                  className="group text-[#2A2926]"
                >
                  <div
                    className={[
                      "relative aspect-[3/4] rounded-[1.25rem]",
                      volunteer.backgroundClass,
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute inset-0 overflow-hidden rounded-[1.25rem] transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2",
                        "bg-[#DCC8B6]",
                      ].join(" ")}
                    >
                      <img
                        src={volunteer.image}
                        alt={volunteer.imageAlt}
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,41,38,0.32),rgba(42,41,38,0)_62%)]"
                      />
                    </div>
                  </div>
                  <div className="pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-['Manrope'] text-xl font-bold tracking-normal">
                        {volunteer.name}
                      </h3>
                      <div className="flex shrink-0 items-center gap-2">
                        <a
                          href={volunteer.email}
                          aria-label={`Send mail til ${volunteer.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDFBF8] text-[#8A776B] transition-colors hover:bg-[#DCC8B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                        >
                          <Mail className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                        </a>
                        <a
                          href={volunteer.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Åbn LinkedIn for ${volunteer.name}`}
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FDFBF8] text-[#8A776B] transition-colors hover:bg-[#DCC8B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                        >
                          <LinkedInIcon className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                    <p className="mt-2 font-['Manrope'] text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                      {volunteer.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
