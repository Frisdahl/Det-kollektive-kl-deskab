import {
  ChevronLeft,
  ChevronRight,
  Gem,
  PackageX,
  Shirt,
  Sparkles,
  WashingMachine,
} from "lucide-react";
import { useRef } from "react";
import { Container } from "../components/layout/Container";
import guideVideo from "../assets/videos/kollektive-klaedeskab-guide.webm";
import heroBackground from "../assets/images/hero-img.webp";
import navbarImage from "../assets/images/navbar-image.webp";
import rydOpImage from "../assets/images/ryd-op.webp";
import sliderImg2 from "../assets/images/slider-img-2.webp";
import sliderImg4 from "../assets/images/slider-img-4.webp";
import videoBgImageOne from "../assets/images/video-bg-img.webp";
import videoBgImageTwo from "../assets/images/video-bg-img-2.webp";
import videoBgImageThree from "../assets/images/video-bg-img-3.webp";

const steps = [
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

const videoBackgroundImages = [
  {
    src: videoBgImageThree,
    className:
      "left-[82%] top-[-2.25rem] h-40 w-40 rotate-[8deg] rounded-[41%_59%_35%_65%/62%_38%_59%_41%] opacity-[0.32] shadow-[0_22px_70px_rgba(42,41,38,0.12)] md:h-52 md:w-52 lg:h-60 lg:w-60",
  },
  {
    src: videoBgImageOne,
    className:
      "right-[82%] bottom-[-2.5rem] h-52 w-52 rotate-[-7deg] rounded-[63%_37%_56%_44%/39%_66%_34%_61%] opacity-[0.29] shadow-[0_26px_80px_rgba(42,41,38,0.13)] md:h-64 md:w-64 lg:h-80 lg:w-80",
  },
  {
    src: videoBgImageTwo,
    className:
      "left-[82%] bottom-[-0.75rem] h-40 w-40 rotate-[-4deg] rounded-[36%_64%_58%_42%/67%_35%_65%_33%] opacity-[0.34] shadow-[0_22px_70px_rgba(42,41,38,0.12)] md:h-52 md:w-52 lg:h-64 lg:w-64",
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
    text: "Eksklusive mærker som fx. Ganni og Stine Goya, silke, skind, uld og vintage, eller tøj der er helt specielt afviger fra pointguiden, får flere point.",
  },
  {
    icon: PackageX,
    text: "Tøj fra Shein får altid kun 100 point, lige meget hvad det er.",
  },
  {
    icon: Gem,
    text: "Accessories, makeup, garn og smykker må gerne afleveres, men der gives ikke point.",
  },
  {
    icon: Shirt,
    text: "Sko/støvler/tasker giver mellem 100-500 point afhængig af stand og mærke.",
  },
  {
    icon: WashingMachine,
    text: "Tøjet skal være nyvasket og uden pletter eller huller. Hvis der er overset huller eller pletter, sender vi det videre til genbrug, og der gives ikke point.",
  },
];

function PointGuideGrid({ groups }) {
  return (
    <div className="rounded-[1.55rem] border border-[#E6DED6] bg-[#FDFBF8]/74 px-5 py-7 shadow-[0_24px_90px_rgba(42,41,38,0.06)] backdrop-blur md:px-9 md:py-10">
      <div className="grid gap-6 border-b border-[#E6DED6] pb-6 md:grid-cols-[minmax(0,1fr)_9rem_9rem] md:items-end">
        <div className="font-['Manrope'] text-base font-semibold text-[#8A776B]">
          <span>
            Så mange point kan du få
          </span>
        </div>
        <div className="text-left md:text-center">
          <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.12em] text-[#8A776B]">
            Fast Fashion
          </p>
          <p className="mt-2 text-xs leading-5 text-[#6F655F]">
            Fx. H&M, Monki, Only og billigere mærker
          </p>
        </div>
        <div className="text-left md:text-center">
          <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.12em] text-[#8A776B]">
            Lidt mindre Fast Fashion
          </p>
          <p className="mt-2 text-xs leading-5 text-[#6F655F]">
            Fx. COS, Second Female og dyrere mærker
          </p>
        </div>
      </div>

      <div>
        {groups.map((group) => (
          <div
            key={`${group.items.join("-")}-${group.fast}`}
            className="grid gap-4 border-b border-[#E6DED6] py-5 last:border-b-0 md:grid-cols-[minmax(0,1fr)_9rem_9rem] md:items-center"
          >
            <div className="text-base leading-7 text-[#2A2926]">
              {group.items.join(", ")}
            </div>
            <p className="w-fit rounded-full bg-[#EFE6DD] px-5 py-2 text-center font-['Manrope'] text-lg font-semibold leading-tight text-[#2A2926] md:mx-auto">
              {group.fast}
            </p>
            <p className="w-fit rounded-full bg-[#9A7A62] px-5 py-2 text-center font-['Manrope'] text-lg font-semibold leading-tight text-[#FDFBF8] shadow-[0_10px_26px_rgba(154,122,98,0.2)] md:mx-auto">
              {group.better || "Efter vurdering"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const stepsRef = useRef(null);

  const scrollSteps = (direction) => {
    const slider = stepsRef.current;

    if (!slider) {
      return;
    }

    const firstCard = slider.querySelector("article");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 360;

    slider.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <main className="flex-1 bg-[#f9f4f1]">
      <section className="border-b border-[#E6DED6] py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
              Sådan gør du
            </p>
            <h1 className="page-title mt-4 font-normal text-[#2A2926]">
              Kom godt i gang med Klædeskabet
            </h1>
          </div>
        </Container>
      </section>

      <section className="bg-[#8A776B] py-16 text-[#FDFBF8] md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1.24fr)] lg:items-end">
            <div>
              <p className="fluid-kicker font-medium uppercase text-[#f9f4f1]/70">
                Kom i gang
              </p>
              <h2 className="section-title mt-3 font-medium">Sådan gør du</h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-[#f9f4f1]/78 md:text-lg md:leading-8 lg:justify-self-end">
              Et medlemskab giver dig adgang til garderoben, hvor du kan låne,
              bruge og bytte tøj i dit eget tempo.
            </p>
          </div>

          <div
            ref={stepsRef}
            className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pb-10 scroll-pl-2 md:gap-6 md:px-0 md:pb-12 md:scroll-pl-0"
            aria-label="Sådan gør du trin"
          >
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="group relative min-h-[29rem] w-[82vw] shrink-0 snap-start overflow-hidden rounded-[1.35rem] bg-[#f9f4f1] text-[#2A2926] sm:w-[28rem] lg:w-[calc((100%_-_3rem)/3)]"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-[#2A2926]">
                  <img
                    src={step.image}
                    alt=""
                    className="h-full w-full object-cover opacity-92 transition-transform duration-700 ease-out group-hover:scale-105"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,41,38,0.52),rgba(42,41,38,0.08)_58%,rgba(42,41,38,0)_100%)]"
                  />
                  <span className="absolute bottom-4 left-4 font-['filson-pro'] text-7xl leading-none text-[#FDFBF8]/22 transition-all duration-500 ease-out group-hover:translate-y-[-0.15rem] group-hover:text-[#FDFBF8]/62">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="p-7 md:p-8">
                  <div className="mb-5 h-px w-full bg-[#E6DED6]" />
                  <h3 className="card-title font-['Manrope'] font-semibold text-[#2A2926]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#6F655F]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollSteps(-1)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#f9f4f1]/24 bg-[#f9f4f1]/12 text-[#FDFBF8] transition-colors hover:bg-[#f9f4f1]/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDFBF8]"
              aria-label="Forrige trin"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollSteps(1)}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[#f9f4f1]/24 bg-[#f9f4f1]/12 text-[#FDFBF8] transition-colors hover:bg-[#f9f4f1]/22 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FDFBF8]"
              aria-label="Næste trin"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
            </button>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(16rem,0.62fr)] lg:items-center lg:gap-8">
            <div className="max-w-xl">
              <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                Videoguide
              </p>
              <h2 className="section-title mt-3 font-medium text-[#2A2926]">
              </h2>
              <div className="mt-6 space-y-5 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                <p>Tillykke med dit medlemskab eller din overvejelse om at blive medlem.</p>
                <p>Hvor er vi glade for, at du er her.</p>
                <p>
                  Her kan du se og læse, hvordan du rent praktisk kommer i gang
                  med dit bæredygtige tøjforbrug.
                </p>
                <p>
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
                  className="absolute inset-y-10 left-1/2 z-0 w-[min(84vw,24rem)] -translate-x-1/2 rounded-[46%_54%_44%_56%/56%_44%_58%_42%] bg-[#DCC8B6]/18 blur-3xl"
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

                <div className="relative z-10 rounded-[2rem] border border-[#FDFBF8]/70 bg-[#2A2926] p-2 shadow-[0_24px_80px_rgba(42,41,38,0.18)]">
                  <div className="relative aspect-[9/16] w-[min(72vw,17rem)] overflow-hidden rounded-[1.5rem] bg-[#2A2926]">
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

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mb-10 max-w-3xl">
            <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
              Pointsystem
            </p>
            <h2 className="section-title mt-3 font-medium text-[#2A2926]">
              Pointguide
            </h2>
            <p className="mt-5 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
              Guiden giver et overblik over, hvor mange point forskellige typer
              tøj typisk giver. Den endelige vurdering afhænger altid af stand,
              kvalitet, sæson og efterspørgsel.
            </p>
          </div>

          <PointGuideGrid groups={pointGuideGroups} />

          <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {pointNotes.map((note) => (
              <div
                key={note.text}
                className="rounded-[1.2rem] border border-[#E6DED6] bg-[#FDFBF8]/72 p-5 text-sm leading-6 text-[#2A2926] shadow-[0_16px_55px_rgba(42,41,38,0.045)]"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE6DD] text-[#9A7A62]">
                  <note.icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <p>{note.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
