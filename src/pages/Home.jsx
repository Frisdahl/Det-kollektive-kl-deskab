import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Droplets,
  Heart,
  Recycle,
  Store,
} from "lucide-react";
import { Container } from "../components/layout/Container";
import { ImageCarousel } from "../components/ui/ImageCarousel";
import { StepSlider } from "../components/ui/StepSlider";
import navbarImage from "../assets/images/navbar-image.webp";
import sliderImg1 from "../assets/images/slider-img-1.webp";
import sliderImg2 from "../assets/images/slider-img-2.webp";
import sliderImg3 from "../assets/images/slider-img-3.webp";
import sliderImg4 from "../assets/images/slider-img-4.webp";
import sliderImg5 from "../assets/images/slider-img-5.webp";
import sliderImg6 from "../assets/images/slider-img-6.webp";
import sliderImg7 from "../assets/images/slider-img-7.webp";
import rydOpImage from "../assets/images/ryd-op.webp";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import guideVideo from "../assets/videos/kollektive-klaedeskab-guide.webm";
import heroBackground from "../assets/images/hero-img.webp";
import membershipImage from "../../membership-img.webp";

const carouselImages = [
  sliderImg1,
  sliderImg2,
  sliderImg3,
  sliderImg4,
  sliderImg5,
  sliderImg6,
  sliderImg7,
].map((src, index) => ({
  src,
  alt: `Styles fra fællesskabets garderobe ${index + 1}`,
}));

const heroCarouselImages = [
  { src: heroBackground, alt: "Medlem finder tøj i Det Kollektive Klædeskab" },
  carouselImages[0],
  carouselImages[2],
  carouselImages[4],
];

const trustpilotReviews = [
  {
    author: "Anna M.",
    country: "Danmark",
    date: "12. juni 2026",
    image: sliderImg1,
    text: "Et virkelig fint koncept, hvor det er nemt at låne noget nyt uden at købe mere.",
  },
  {
    author: "Sofie L.",
    country: "Danmark",
    date: "28. maj 2026",
    image: sliderImg2,
    text: "God stemning, hjælpsomt personale og masser af fine fund i garderoben.",
  },
  {
    author: "Maria K.",
    country: "Danmark",
    date: "9. maj 2026",
    image: sliderImg3,
    text: "Jeg elsker ideen om at dele tøj med andre og bruge garderoben mere cirkulært.",
  },
  {
    author: "Julie R.",
    country: "Danmark",
    date: "21. april 2026",
    image: sliderImg4,
    text: "Nemt medlemskab og en hyggelig måde at finde tøj til både hverdag og særlige dage.",
  },
  {
    author: "Clara S.",
    country: "Danmark",
    date: "4. april 2026",
    image: sliderImg5,
    text: "Det føles både lokalt, bæredygtigt og inspirerende at være en del af.",
  },
  {
    author: "Emma T.",
    country: "Danmark",
    date: "18. marts 2026",
    image: sliderImg6,
    text: "Et godt alternativ til at købe nyt, og udvalget gør det sjovt at prøve mere af.",
  },
];

const salesPoints = [
  {
    colorClass: "text-primary",
    icon: Heart,
    number: "1.284",
    text: "Stykker tøj har fået nyt liv gennem vores fællesskab.",
  },
  {
    colorClass: "text-success",
    icon: Recycle,
    number: "3.852 kg",
    text: "CO₂ sparet gennem genbrug.",
  },
  {
    colorClass: "text-success",
    icon: Droplets,
    number: "15.700.000 L",
    text: "Vand sparet ved at forlænge tøjets levetid.",
  },
  {
    colorClass: "text-accent",
    icon: Store,
    number: "3 butikker",
    text: "Ét medlemskab giver adgang til alle vores butikker.",
  },
];

const howItWorksSteps = [
  {
    image: rydOpImage,
    title: "Ryd op i dit klædeskab",
    text: "Find det tøj frem, du ikke længere bruger, men som andre kan få glæde af.",
  },
  {
    image: heroBackground,
    title: "Aflever dit tøj",
    text: "Kom forbi garderoben og aflever dine udvalgte styles til fællesskabet.",
  },
  {
    image: navbarImage,
    title: "Modtag point for dit tøj",
    text: "Vi vurderer tøjet og giver dig point, du kan bruge i garderoben.",
  },
  {
    image: sliderImg2,
    title: "Shop nyt tøj med dine point",
    text: "Brug dine point på nye fund og skab outfits uden at købe nyt fra bunden.",
  },
  {
    image: sliderImg4,
    title: "Nyd dit nye tøj!",
    text: "Tag dine nye favoritter med hjem og giv garderoben mere liv i hverdagen.",
  },
];

const membershipPackages = [
  {
    name: "Alm. medlem",
    text: "Første måned 99 kr.",
    price: "199 kr. pr. måned",
    tone: "bg-surface",
  },
  {
    name: "Studie medlem",
    text: "Første måned gratis",
    price: "149 kr. pr. måned",
    tone: "bg-surface",
  },
  {
    name: "Familie medlem",
    text: "Mor (eller far) og barn mellem 16-20 år. Første måned 149 kr.",
    price: "299 kr. pr. måned",
    tone: "bg-surface",
  },
];

const faqItems = [
  {
    question: "Hvordan fungerer medlemskabet?",
    answer:
      "Du vælger et medlemskab, får adgang til garderoben og kan bruge dine point på nye fund i vores butikker.",
  },
  {
    question: "Kan jeg aflevere mit eget tøj?",
    answer:
      "Ja, du kan aflevere tøj, du ikke længere bruger. Vi vurderer det og giver dig point, som du kan bruge i fællesskabets garderobe.",
  },
  {
    question: "Kan jeg skifte medlemskab senere?",
    answer:
      "Ja, du kan justere dit medlemskab, hvis din garderobe eller hverdag ændrer sig.",
  },
  {
    question: "Hvor kan jeg bruge mit medlemskab?",
    answer:
      "Dit medlemskab kan bruges i alle vores butikker, så du kan finde nyt tøj der, hvor det passer dig bedst.",
  },
  {
    question: "Hvor mange stykker tøj kan jeg bytte ad gangen?",
    answer:
      "Som medlem kan du som udgangspunkt bytte op til 10 stykker tøj ad gangen, så garderoben hele tiden kan cirkulere videre.",
  },
];

export function Home() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const allReviewsVisible = visibleReviews >= trustpilotReviews.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroIndex(
        (current) => (current + 1) % heroCarouselImages.length,
      );
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  const toggleReviews = () => {
    setVisibleReviews((current) =>
      current >= trustpilotReviews.length
        ? 2
        : Math.min(current + 4, trustpilotReviews.length),
    );
  };

  return (
    <main className="w-full">
      <section className="bg-primary-gradient pb-16 text-surface md:pb-20">
        <Container className="grid min-h-[28rem] items-center gap-10 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] md:py-10 lg:min-h-[31rem] lg:gap-16">
          <div className="flex min-h-[22rem] max-w-xl flex-col justify-center py-6 md:min-h-[25rem]">
            <p className="fluid-kicker mb-5 font-medium uppercase text-background/70">
              Fælles garderobe i København
            </p>
            <h1 className="hero-title font-normal">
              <span className="block">Flere outfits.</span>
              <span className="block">Mindre forbrug.</span>
            </h1>
            <p className="mt-6 max-w-md text-[clamp(1rem,0.7vw+0.8rem,1.2rem)] leading-7 text-background/78 md:leading-8">
              Lån, byt og del tøj i et lokalt fællesskab med mere stil og mindre
              spild.
            </p>
          </div>

          <div className="relative -mb-24 min-h-[26rem] translate-y-16 overflow-hidden rounded-2xl bg-divider shadow-[var(--shadow-large)] md:-mb-28 md:min-h-[30rem] md:translate-y-20 lg:min-h-[34rem]">
            {heroCarouselImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className={[
                  "hero-slide absolute inset-0 h-full w-full object-cover object-center",
                  index === activeHeroIndex ? "is-active" : "",
                ].join(" ")}
                aria-hidden={index === activeHeroIndex ? undefined : "true"}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pt-20 pb-16 md:pt-28 md:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-primary">
              Garderoben
            </p>
            <h2 className="section-title mt-3 flex items-center justify-center gap-4 font-medium text-heading md:gap-6">
              <a
                href="https://www.facebook.com/detkollektiveklaedeskab"
                target="_blank"
                rel="noreferrer"
                aria-label="Følg os på Facebook"
                className="inline-flex cursor-pointer transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <img
                  src={facebookIcon}
                  alt=""
                  className="h-8 w-8 object-contain md:h-11 md:w-11"
                  aria-hidden="true"
                />
              </a>
              <span>følg os på</span>
              <a
                href="https://www.instagram.com/detkollektiveklaedeskab/"
                target="_blank"
                rel="noreferrer"
                aria-label="Følg os på Instagram"
                className="inline-flex cursor-pointer transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                <img
                  src={instagramIcon}
                  alt=""
                  className="h-8 w-8 object-contain md:h-11 md:w-11"
                  aria-hidden="true"
                />
              </a>
            </h2>
          </div>
        </Container>

        <ImageCarousel
          images={carouselImages}
          ariaLabel="Billedkarusel med styles"
        />
      </section>

      <section className="pb-16 md:pb-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <p className="fluid-kicker font-medium uppercase text-primary">
              Trustpilot
            </p>
            <h2 className="section-title mt-3 font-medium text-heading">
              Det siger medlemmerne
            </h2>
            <p className="mt-4 text-base leading-7 text-body md:text-lg">
              Et lille udpluk af anmeldelser fra vores fællesskab.
            </p>
          </div>

          <motion.div
            layout
            className="mt-10 grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-4 md:gap-5"
          >
            <AnimatePresence initial={false}>
              {trustpilotReviews.slice(0, visibleReviews).map((review) => (
                <motion.article
                  layout
                  key={`${review.author}-${review.date}`}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.98 }}
                  transition={{
                    duration: 0.32,
                    ease: [0.22, 1, 0.36, 1],
                    layout: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="min-w-0 rounded-2xl border border-border bg-surface p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt=""
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-['Manrope'] text-base font-semibold text-heading">
                        {review.author}
                      </p>
                      <p className="mt-1 text-sm leading-none text-body">
                        {review.country} · {review.date}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-lg font-medium tracking-[0.12em] text-accent">
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 text-lg leading-8 text-heading">
                    “{review.text}”
                  </blockquote>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {trustpilotReviews.length > 2 ? (
            <div className="mt-8 flex justify-center">
              <motion.button
                type="button"
                onClick={toggleReviews}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="cursor-pointer rounded-full bg-accent px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {allReviewsVisible ? "se mindre" : "læs flere anmeldelser"}
              </motion.button>
            </div>
          ) : null}
        </Container>
      </section>

      <section id="butikker" className="bg-primary-gradient pt-16 pb-8 text-surface md:pt-20 md:pb-10">
        <Container>
          <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
            <div className="py-8 md:py-10 lg:py-12 lg:pr-0">
              <p className="fluid-kicker font-medium uppercase text-background/70">
                Fællesskabet i tal
              </p>
              <h2 className="section-title mt-3 max-w-lg font-medium">
                Det har vi skabt sammen
              </h2>

              <div className="mt-8 grid border-t border-background/22 sm:grid-cols-2">
                {salesPoints.map((point) => (
                  <article
                    key={point.number}
                    className="border-b border-background/22 py-5 sm:odd:pr-6 sm:even:border-l sm:even:border-background/22 sm:even:pl-6"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background/12 text-divider">
                        {point.icon ? (
                          <point.icon
                            className="h-5 w-5"
                            strokeWidth={1.6}
                            aria-hidden="true"
                          />
                        ) : (
                          <img
                            src={point.image}
                            alt=""
                            className="h-5 w-5 rounded-full object-cover"
                            aria-hidden="true"
                          />
                        )}
                      </span>
                      <h3 className="stat-title font-normal text-surface">
                        {point.number}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-xs text-base leading-6 text-background/78 md:leading-7">
                      {point.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center pb-8 md:pb-10 lg:px-0 lg:py-12 lg:pr-12">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 bottom-8 h-40 w-40 translate-x-1/4 overflow-hidden rounded-full opacity-20 lg:h-60 lg:w-60"
              >
                <img
                  src={navbarImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="relative mx-auto w-full max-w-[28rem] overflow-hidden rounded-2xl bg-heading shadow-[var(--shadow-large)]">
                <div className="relative aspect-[4/5] overflow-hidden bg-heading">
                  <video
                    src={guideVideo}
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="saadan-goer-du" className="scroll-mt-32 bg-primary-gradient pt-10 pb-24 text-surface md:scroll-mt-40 md:pt-12 md:pb-32">
        <Container>
          <div>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
              <div className="max-w-xl">
                <p className="fluid-kicker font-medium uppercase text-background/70">
                  Kom i gang
                </p>
                <h2 className="section-title mt-3 font-medium">
                  Sådan gør du
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-background/78 md:text-lg md:leading-8 lg:justify-self-end">
                Et medlemskab giver dig adgang til garderoben, hvor du kan låne,
                bruge og bytte tøj i dit eget tempo.
              </p>
            </div>

            <StepSlider steps={howItWorksSteps} />
          </div>
        </Container>
      </section>

      <section className="pt-16 pb-16 md:pt-24 md:pb-20">
        <Container>
          <div className="overflow-hidden rounded-2xl bg-heading text-surface shadow-[var(--shadow-large)] md:rounded-[1.5rem] lg:grid lg:min-h-[32rem] lg:grid-cols-[minmax(0,1fr)_36%]">
            <div className="px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-16">
              <p className="fluid-kicker font-medium uppercase text-divider">
                Medlemskab
              </p>
              <div className="mt-3 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(16rem,0.55fr)] lg:items-end">
                <h2 className="section-title font-medium">
                  Vælg dit medlemskab
                </h2>
                <p className="text-base leading-7 text-background/72 md:text-lg">
                  Vælg den rytme, der passer til din garderobe, og få adgang
                  til et lokalt udvalg med mere liv i hvert stykke tøj.
                </p>
              </div>

              <div className="mt-10 grid gap-4 md:grid-cols-3 md:items-stretch">
                {membershipPackages.map((membershipPackage, index) => (
                  <article
                    key={membershipPackage.name}
                    className={[
                      membershipPackage.tone,
                      "relative flex min-w-0 flex-col overflow-hidden rounded-2xl p-6 text-heading shadow-[var(--shadow-card)]",
                      index === 1
                        ? "border border-divider bg-surface md:shadow-[var(--shadow-large)] before:absolute before:inset-x-0 before:top-0 before:h-1.5 before:bg-divider"
                        : "",
                    ].join(" ")}
                  >
                    <h3 className="card-title font-['Manrope'] font-bold text-heading">
                      {membershipPackage.name}
                    </h3>
                    <p className="mt-5 flex-1 text-base leading-7 text-body">
                      {membershipPackage.text}
                    </p>
                    <p className="mt-6 text-lg font-semibold text-heading md:text-xl">
                      {membershipPackage.price}
                    </p>
                    {index === 1 ? (
                      <span className="mt-8 inline-flex w-fit rounded-full border border-divider bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                        populær
                      </span>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>

            <div className="relative h-64 w-full sm:h-72 lg:h-full lg:min-h-full">
              <img
                src={membershipImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-right opacity-90"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className="media-fade-text-left absolute inset-0 z-10"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="grid gap-10 pt-12 md:pt-16 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1.26fr)] lg:gap-16">
            <div className="max-w-xl lg:sticky lg:top-28 lg:self-start">
              <p className="fluid-kicker font-medium uppercase text-primary">
                FAQ
              </p>
              <h2 className="section-title mt-3 font-medium text-heading">
                Spørgsmål om medlemskab
              </h2>
              <p className="mt-6 max-w-md text-base leading-7 text-body md:text-lg md:leading-8">
                Her finder du svar på de mest almindelige spørgsmål om point,
                aflevering og adgang til garderoben.
              </p>
            </div>

            <div>
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                const answerId = `home-faq-${index}`;

                return (
                  <article key={item.question} className="border-b border-border">
                    <button
                      type="button"
                      aria-controls={answerId}
                      aria-expanded={isOpen}
                      onClick={() =>
                        setOpenFaqIndex((current) =>
                          current === index ? null : index,
                        )
                      }
                      className="group flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-['Manrope'] text-lg leading-tight font-semibold tracking-normal text-heading md:text-xl">
                        {item.question}
                      </span>
                      <span
                        className={[
                          "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/28 transition-colors duration-300",
                          isOpen
                            ? "bg-primary text-surface"
                            : "bg-surface text-primary group-hover:bg-background",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <span className="absolute h-0.5 w-4 rounded-full bg-current" />
                        <span
                          className={[
                            "absolute h-0.5 w-4 origin-center rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
                            isOpen ? "rotate-180" : "rotate-90",
                          ].join(" ")}
                        />
                      </span>
                    </button>
                    <div
                      id={answerId}
                      className={[
                        "grid transition-[grid-template-rows] duration-300 ease-out",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      ].join(" ")}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-6 text-base leading-7 text-body md:text-lg md:leading-8">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

