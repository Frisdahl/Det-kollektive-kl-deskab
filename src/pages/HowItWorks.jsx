import { Link } from "react-router-dom";
import {
  ArrowRight,
  Gem,
  Leaf,
  PackageX,
  Shirt,
  Sparkles,
  WashingMachine,
} from "lucide-react";
import { Container } from "../components/layout/Container";
import { StepSlider } from "../components/ui/StepSlider";
import guideVideo from "../assets/videos/kollektive-klaedeskab-guide.webm";
import klaedeskabetHeroImage from "../assets/images/klaedeskabet-hero-img.webp";
import stepAfleverImage from "../assets/images/step-aflever.webp";
import stepModtagPointImage from "../assets/images/step-modtag-point.webp";
import stepRydOpImage from "../assets/images/step-ryd-op.webp";
import sliderImg2 from "../assets/images/slider-img-2.webp";
import sliderImg4 from "../assets/images/slider-img-4.webp";
import videoBgImageOne from "../assets/images/video-bg-img.webp";
import videoBgImageTwo from "../assets/images/video-bg-img-2.webp";
import videoBgImageThree from "../assets/images/video-bg-img-3.webp";

const steps = [
  {
    image: stepRydOpImage,
    title: "Ryd op i dit klædeskab",
    text: "Find det tøj frem, du ikke længere bruger, men som andre kan få glæde af.",
  },
  {
    image: stepAfleverImage,
    title: "Aflever dit tøj",
    text: "Kom forbi garderoben og aflever dine udvalgte styles til fællesskabet.",
  },
  {
    image: stepModtagPointImage,
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

const videoBackgroundImages = [
  {
    src: videoBgImageThree,
    className:
      "left-[82%] top-[-2.25rem] h-40 w-40 rotate-[8deg] rounded-[41%_59%_35%_65%/62%_38%_59%_41%] opacity-[0.32] shadow-[var(--shadow-large)] md:h-52 md:w-52 lg:h-60 lg:w-60",
  },
  {
    src: videoBgImageOne,
    className:
      "right-[82%] bottom-[-2.5rem] h-52 w-52 rotate-[-7deg] rounded-[63%_37%_56%_44%/39%_66%_34%_61%] opacity-[0.29] shadow-[var(--shadow-large)] md:h-64 md:w-64 lg:h-80 lg:w-80",
  },
  {
    src: videoBgImageTwo,
    className:
      "left-[82%] bottom-[-0.75rem] h-40 w-40 rotate-[-4deg] rounded-[36%_64%_58%_42%/67%_35%_65%_33%] opacity-[0.34] shadow-[var(--shadow-large)] md:h-52 md:w-52 lg:h-64 lg:w-64",
  },
];

const pointColumns = [
  {
    groups: [
      {
        fast: "100 point",
        better: "150 point",
        items: [
          "Tørklæder/huer/vanter",
          "Træningstøj",
          "Gravid/ammetøj",
          "Bodystockings/badetøj/BH'er",
          "T-shirts/toppe",
          "Shorts",
        ],
      },
      {
        fast: "200 point",
        better: "350 point",
        items: ["Bukser og nederdele"],
      },
      {
        fast: "250 point",
        better: "450 point",
        items: ["Bluser/skjorter", "Sweatshirts/hættetrøjer", "Strik/Veste"],
      },
      {
        fast: "300 point",
        better: "500 point",
        items: ["Jeans", "Korte og knælange kjoler"],
      },
    ],
  },
  {
    groups: [
      {
        fast: "350 point",
        better: "600 point",
        items: ["Lange kjoler", "Buksedragter", "Sæt og suits"],
      },
      {
        fast: "400 point",
        better: "650 point",
        items: ["Jakker/cowboyjakker/Blazere"],
      },
      {
        fast: "800 point",
        better: "1400 point",
        items: ["Frakker"],
      },
      {
        fast: "1200 point",
        better: "",
        items: ["Hjemmestrik"],
      },
    ],
  },
];

const pointGuideGroups = pointColumns.flatMap((column) => column.groups);

const pointNotes = [
  {
    icon: Sparkles,
    title: "Eksklusive mærker",
    text: "Eksklusive mærker som fx. Ganni og Stine Goya, silke, skind, uld og vintage, eller tøj der er helt specielt afviger fra pointguiden, får flere point.",
  },
  {
    icon: PackageX,
    title: "Shein",
    text: "Tøj fra Shein får altid kun 100 point, lige meget hvad det er.",
  },
  {
    icon: Gem,
    title: "Accessories",
    text: "Accessories, makeup, garn og smykker må gerne afleveres, men der gives ikke point.",
  },
  {
    icon: Shirt,
    title: "Sko og tasker",
    text: "Sko/støvler/tasker giver mellem 100-500 point afhængig af stand og mærke.",
  },
  {
    icon: WashingMachine,
    title: "Vask og stand",
    text: "Tøjet skal være nyvasket og uden pletter eller huller. Hvis der er overset huller eller pletter, sender vi det videre til genbrug, og der gives ikke point.",
  },
];

function PointValue({ value }) {
  const number = value.replace(" point", "");

  if (!value) {
    return (
      <span className="font-['Manrope'] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-body">
        Efter vurdering
      </span>
    );
  }

  return (
    <h3 className="inline-flex flex-col leading-none">
      <span className="font-['DM_Serif_Display'] text-[clamp(1.65rem,2.5vw,2.35rem)] font-light text-primary">
        {number}
      </span>
      <span className="mt-1 font-['Manrope'] text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-body">
        point
      </span>
    </h3>
  );
}

function PointGuideGrid({ groups }) {
  return (
    <div className="relative z-10 px-0 text-heading">
      <div>
        <div className="grid gap-6 border-b border-divider pb-6 md:grid-cols-[minmax(0,1fr)_10rem_10rem] md:items-end">
          <div className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.16em] text-body md:pl-3">
            Tøjkategori
          </div>
          <div className="text-left md:text-center">
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-heading">
              Fast Fashion
            </p>
            <p className="mt-2 text-xs leading-5 text-body">
              Fx. H&M, Monki, Only og billigere mærker
            </p>
          </div>
          <div className="text-left md:text-center">
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-heading">
              Lidt mindre Fast Fashion
            </p>
            <p className="mt-2 text-xs leading-5 text-body">
              Fx. COS, Second Female og dyrere mærker
            </p>
          </div>
        </div>

        <div>
          {groups.map((group) => (
            <div
              key={`${group.items.join("-")}-${group.fast}`}
              className="grid gap-4 border-b border-divider py-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_10rem_10rem] md:items-center md:px-3"
            >
              <div className="flex max-w-[34rem] flex-wrap gap-x-3 gap-y-2 text-base leading-7 text-heading">
                {group.items.map((item) => (
                  <span key={item} className="inline-flex">
                    {item}
                  </span>
                ))}
              </div>
              <p className="md:text-center">
                <PointValue value={group.fast} />
              </p>
              <p className="md:text-center">
                <PointValue value={group.better} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <main className="flex-1 bg-background">
      <section className="relative overflow-hidden bg-hero text-heading">
        <div className="absolute inset-y-0 right-0 hidden w-[62%] md:block">
          <img
            src={klaedeskabetHeroImage}
            alt=""
            className="h-full w-full object-cover object-center"
            aria-hidden="true"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-hero)_0%,color-mix(in_srgb,var(--color-hero)_90%,transparent)_16%,color-mix(in_srgb,var(--color-hero)_52%,transparent)_34%,transparent_56%)]"
          />
        </div>

        <Container className="relative z-10 grid min-h-[31rem] items-center py-14 md:grid-cols-[minmax(0,0.84fr)_minmax(18rem,1.16fr)] md:py-20 lg:min-h-[36rem]">
          <div className="max-w-xl">
            <p className="fluid-kicker font-medium uppercase text-primary">
              Sådan gør du
            </p>
            <h1 className="page-title mt-4 font-normal text-heading">
              Kom godt i gang med Klædeskabet
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-body md:text-lg md:leading-8">
              Få overblik over hvordan du afleverer tøj, optjener point og
              bruger garderoben i dit eget tempo.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/medlemskab"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Meld dig ind
              </Link>
              <a
                href="#kom-i-gang"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-2 text-sm font-semibold text-heading transition-colors hover:text-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-4"
              >
                Sådan gør du
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mt-12 min-h-[20rem] overflow-hidden rounded-[1.4rem] bg-divider shadow-[var(--shadow-large)] md:hidden">
            <img
              src={klaedeskabetHeroImage}
              alt="Medlem finder tøj i Det Kollektive Klædeskab"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_46%,color-mix(in_srgb,var(--color-hero)_90%,transparent)_100%)]"
            />
          </div>
        </Container>
      </section>

      <section id="kom-i-gang" className="scroll-mt-28 py-16 text-heading md:scroll-mt-32 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-end">
            <div>
              <p className="fluid-kicker font-medium uppercase text-primary">
                Kom i gang
              </p>
              <h2 className="section-title mt-3 font-medium">Sådan gør du</h2>
            </div>
            <p className="max-w-md text-base leading-7 text-body md:text-lg md:leading-8 lg:justify-self-end">
              Et medlemskab giver dig adgang til garderoben, hvor du kan låne,
              bruge og bytte tøj i dit eget tempo.
            </p>
          </div>

          <StepSlider steps={steps} />
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(16rem,0.62fr)] lg:items-center lg:gap-8">
            <div className="max-w-xl">
              <p className="fluid-kicker font-medium uppercase text-primary">
                Videoguide
              </p>
              <h2 className="section-title mt-3 font-medium text-heading">
                Få 1 minuts guide til Klædeskabet
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-body md:text-lg md:leading-8">
                <p>Tillykke med dit medlemskab eller din overvejelse om at blive medlem.</p>
                <p>Hvor er vi glade for, at du er her.</p>
                <p>
                  Her kan du se og læse, hvordan du rent praktisk kommer i gang
                  med dit bæredygtige tøjforbrug.
                </p>
                <p>
                  Videoen viser dig en 1 minuts guide til Klædeskabet.
                </p>
                <p>
                  Når du har set videoen, kan du længere nede se vores
                  pointguide, så du kan få et lille indblik i, hvad dit tøj er
                  værd i point.
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[31rem] items-center justify-center overflow-visible lg:justify-start">
              <div className="relative isolate">
                <div
                  aria-hidden="true"
                  className="absolute inset-y-10 left-1/2 z-0 w-[min(84vw,24rem)] -translate-x-1/2 rounded-[46%_54%_44%_56%/56%_44%_58%_42%] bg-divider/18 blur-3xl"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
                  {videoBackgroundImages.map((image) => (
                    <div
                      key={image.src}
                      className={[
                        "absolute overflow-hidden",
                        image.className,
                      ].join(" ")}
                    >
                      <img
                        src={image.src}
                        alt=""
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>

                <div className="relative z-10 rounded-[2rem] border border-surface/70 bg-heading p-2 shadow-[var(--shadow-large)]">
                  <div className="relative aspect-[9/16] w-[min(72vw,17rem)] overflow-hidden rounded-[1.5rem] bg-heading">
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
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-hero text-heading">
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 top-0 hidden w-[46vw] overflow-hidden lg:block"
        >
          <img
            src={klaedeskabetHeroImage}
            alt=""
            className="h-full w-full object-cover object-center opacity-58"
          />
          <div className="absolute inset-0 pointguide-image-fade-left" />
        </div>
        <Container className="relative z-10 pt-16 pb-0 md:pt-20 md:pb-0">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.64fr)_minmax(0,0.36fr)] lg:items-end">
            <div className="max-w-xl">
              <p className="fluid-kicker font-medium uppercase text-primary">
                Pointsystem
              </p>
              <h2 className="section-title mt-3 font-medium text-heading">
                Hvad er dit tøj værd?
              </h2>
              <p className="mt-6 max-w-lg text-base leading-7 text-body md:text-lg md:leading-8">
                Guiden giver et overblik over, hvor mange point forskellige typer
                tøj typisk giver. Den endelige vurdering afhænger altid af stand,
                kvalitet, sæson og efterspørgsel.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-[58rem]">
            <PointGuideGrid groups={pointGuideGroups} />
          </div>
        </Container>
        <div aria-hidden="true" className="relative z-10 h-px w-full bg-divider" />
      </section>

      <section className="relative mb-16 overflow-hidden md:mb-24">
        <Container className="relative z-10">
          <div className="mx-auto max-w-[88rem] pt-16 text-left md:pt-20">
            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              Godt at vide
            </p>
            <div className="mt-8 grid gap-y-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-5 xl:gap-x-7">
              {pointNotes.map((note) => (
                <div key={note.text} className="relative flex flex-col items-start border-t border-divider pt-6 text-left lg:min-w-0 lg:pr-5 lg:last:pr-0 xl:pr-7">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary shadow-[0_10px_24px_color-mix(in_srgb,var(--color-heading)_5%,transparent)]">
                    <note.icon className="h-6 w-6" strokeWidth={1.45} aria-hidden="true" />
                  </span>
                  <div className="mt-5 max-w-[15rem] lg:max-w-none">
                    <p className="text-[0.82rem] leading-6 text-body xl:text-sm">
                      {note.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-xl items-start justify-center gap-3 pb-16 text-sm leading-6 text-body md:pb-20">
            <Leaf className="mt-0.5 h-9 w-9 shrink-0 text-primary" strokeWidth={1.45} aria-hidden="true" />
            <p>
              Vi samarbejder med www.trasborg.dk og vi kan forsikre om at der bliver taget godt hånd om det her.
              (strømper og underbukser donerer vi til reden)
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
