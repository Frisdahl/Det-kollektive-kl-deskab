import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Droplets, Recycle, Shirt, Store } from "lucide-react";
import { Container } from "../components/layout/Container";
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

const loopedCarouselImages = [
  ...carouselImages,
  ...carouselImages,
  ...carouselImages,
].map((image, index) => ({
  ...image,
  loopIndex: index,
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
    colorClass: "text-[#8A776B]",
    image: rydOpImage,
    number: "1.284",
    text: "Stykker tøj har fået nyt liv gennem vores fællesskab.",
  },
  {
    colorClass: "text-[#7A8674]",
    icon: Recycle,
    number: "3.852 kg",
    text: "CO₂ sparet gennem genbrug.",
  },
  {
    colorClass: "text-[#7A8674]",
    icon: Droplets,
    number: "15.700.000 L",
    text: "Vand sparet ved at forlænge tøjets levetid.",
  },
  {
    colorClass: "text-[#CFAFA7]",
    icon: Store,
    number: "3 butikker",
    text: "Ét medlemskab giver adgang til alle vores butikker.",
  },
];

const howItWorksSteps = [
  {
    icon: Shirt,
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
  },
  {
    name: "Studie medlem",
    text: "Første måned gratis",
    price: "149 kr. pr. måned",
  },
  {
    name: "Familie medlem",
    text: "Mor (eller far) og barn mellem 16-20 år. Første måned 149 kr.",
    price: "299 kr. pr. måned",
  },
];

export function Home() {
  const carouselRef = useRef(null);
  const howItWorksRef = useRef(null);
  const dragState = useRef({
    animationFrame: null,
    current: 0,
    isDragging: false,
    lastClientX: 0,
    startX: 0,
    target: 0,
    velocity: 0,
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(2);
  const allReviewsVisible = visibleReviews >= trustpilotReviews.length;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroCarouselImages.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, []);

  const getCarouselLoopBounds = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return { end: 0, start: 0, width: 0 };
    }

    const startItem = carousel.children[carouselImages.length];
    const endItem = carousel.children[carouselImages.length * 2];

    if (!startItem || !endItem) {
      return { end: 0, start: 0, width: 0 };
    }

    const start = startItem.offsetLeft;
    const end = endItem.offsetLeft;

    return { end, start, width: end - start };
  };

  const wrapCarouselPosition = () => {
    const carousel = carouselRef.current;
    const { end, start, width } = getCarouselLoopBounds();

    if (!carousel || width <= 0) {
      return carousel?.scrollLeft ?? 0;
    }

    const state = dragState.current;
    let nextScrollLeft = carousel.scrollLeft;

    if (nextScrollLeft >= end) {
      nextScrollLeft -= width;
      state.current -= width;
      state.target -= width;
    } else if (nextScrollLeft < start) {
      nextScrollLeft += width;
      state.current += width;
      state.target += width;
    }

    if (nextScrollLeft !== carousel.scrollLeft) {
      carousel.scrollLeft = nextScrollLeft;
    }

    return nextScrollLeft;
  };

  const updateActiveCarouselImage = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const carouselRect = carousel.getBoundingClientRect();
    const carouselCenter = carouselRect.left + carouselRect.width / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(carousel.children).forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(carouselCenter - childCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    const closestLogicalIndex = closestIndex % carouselImages.length;

    setActiveCarouselIndex((current) =>
      current === closestLogicalIndex ? current : closestLogicalIndex,
    );
  };

  const animateScroll = () => {
    const carousel = carouselRef.current;
    const state = dragState.current;

    if (!carousel) {
      state.animationFrame = null;
      return;
    }

    state.current += (state.target - state.current) * 0.22;

    if (!state.isDragging) {
      state.target += state.velocity;
      state.velocity *= 0.92;
    }

    const { end, start, width } = getCarouselLoopBounds();

    if (width > 0) {
      if (state.current >= end) {
        state.current -= width;
        state.target -= width;
      } else if (state.current < start) {
        state.current += width;
        state.target += width;
      }
    }

    carousel.scrollLeft = state.current;
    updateProgress();

    const shouldContinue =
      Math.abs(state.target - state.current) > 0.2 ||
      (!state.isDragging && Math.abs(state.velocity) > 0.2);

    if (shouldContinue) {
      state.animationFrame = window.requestAnimationFrame(animateScroll);
      return;
    }

    state.current = state.target;
    carousel.scrollLeft = state.current;
    state.animationFrame = null;
  };

  const startAnimation = () => {
    if (!dragState.current.animationFrame) {
      dragState.current.animationFrame =
        window.requestAnimationFrame(animateScroll);
    }
  };

  const updateProgress = () => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const { start, width } = getCarouselLoopBounds();
    const scrollLeft = wrapCarouselPosition();
    const progress = width > 0 ? (scrollLeft - start) / width : 0;

    setScrollProgress(Math.min(Math.max(progress, 0), 1));
    updateActiveCarouselImage();
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const { start, width } = getCarouselLoopBounds();

    if (carousel && width > 0) {
      carousel.scrollLeft = start;
      dragState.current.current = start;
      dragState.current.target = start;
    }

    updateProgress();

    window.addEventListener("resize", updateActiveCarouselImage);

    return () => {
      window.removeEventListener("resize", updateActiveCarouselImage);
    };
  }, []);

  const handlePointerDown = (event) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    event.preventDefault();
    dragState.current = {
      ...dragState.current,
      current: carousel.scrollLeft,
      isDragging: true,
      lastClientX: event.clientX,
      startX: event.clientX,
      target: carousel.scrollLeft,
      velocity: 0,
    };
    carousel.setPointerCapture(event.pointerId);
    startAnimation();
  };

  const handlePointerMove = (event) => {
    const carousel = carouselRef.current;

    if (!carousel || !dragState.current.isDragging) {
      return;
    }

    event.preventDefault();
    const delta = event.clientX - dragState.current.lastClientX;

    dragState.current.target -= delta;
    dragState.current.velocity = -delta * 0.85;
    dragState.current.lastClientX = event.clientX;
    startAnimation();
  };

  const stopDragging = (event) => {
    const carousel = carouselRef.current;

    dragState.current.isDragging = false;
    startAnimation();

    if (carousel?.hasPointerCapture(event.pointerId)) {
      carousel.releasePointerCapture(event.pointerId);
    }
  };

  const toggleReviews = () => {
    setVisibleReviews((current) =>
      current >= trustpilotReviews.length
        ? 2
        : Math.min(current + 4, trustpilotReviews.length),
    );
  };

  const scrollHowItWorks = (direction) => {
    const slider = howItWorksRef.current;

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
    <main className="w-full">
      <section className="bg-[#8A776B] pb-20 text-[#FDFBF8] md:pb-24">
        <Container className="grid min-h-[28rem] items-center gap-10 py-8 md:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] md:py-10 lg:min-h-[31rem] lg:gap-16">
          <div className="flex min-h-[22rem] max-w-xl flex-col justify-center py-6 md:min-h-[25rem]">
            <p className="mb-5 text-xs font-medium tracking-[0.18em] uppercase text-[#F8F5F1]/70">
              Fælles garderobe i København
            </p>
            <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.92] font-normal tracking-tight">
              <span className="block">Flere outfits.</span>
              <span className="block">Mindre forbrug.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-[#F8F5F1]/78 md:text-lg md:leading-8">
              Lån, byt og del tøj i et lokalt fællesskab med mere stil og mindre
              spild.
            </p>
          </div>

          <div className="relative -mb-24 min-h-[26rem] translate-y-16 overflow-hidden rounded-2xl bg-[#DCC8B6] shadow-[0_24px_70px_rgba(42,41,38,0.18)] md:-mb-28 md:min-h-[30rem] md:translate-y-20 lg:min-h-[34rem]">
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

      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#8A776B]">
              Garderoben
            </p>
            <h2 className="mt-3 flex items-center justify-center gap-4 text-3xl leading-tight font-medium tracking-tight text-[#2A2926] md:gap-6 md:text-5xl">
              <a
                href="https://www.facebook.com/detkollektiveklaedeskab"
                aria-label="Følg os på Facebook"
                className="inline-flex cursor-pointer transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CFAFA7]"
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
                aria-label="Følg os på Instagram"
                className="inline-flex cursor-pointer transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#CFAFA7]"
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

        <div
          ref={carouselRef}
          onScroll={updateProgress}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
          className="no-scrollbar mt-10 flex h-[11.5rem] cursor-grab touch-pan-y select-none items-center gap-4 overflow-x-auto active:cursor-grabbing sm:h-[12.5rem] md:h-[34rem] md:gap-5 xl:h-[36rem]"
          aria-label="Billedkarusel med styles"
        >
          {loopedCarouselImages.map((image, index) => (
            <article
              key={`${image.alt}-${image.loopIndex}`}
              className={`relative shrink-0 transition-[width,margin] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                activeCarouselIndex === index % carouselImages.length
                  ? "z-10 mx-2 w-[7.25rem] sm:w-[7.75rem] md:mx-4 md:w-[22.5rem] xl:w-[24rem]"
                  : "z-0 mx-0 w-[6rem] sm:w-[6.5rem] md:w-[20rem] xl:w-[21rem]"
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                draggable="false"
                onDragStart={(event) => event.preventDefault()}
                className="aspect-[5/7] w-full pointer-events-none select-none rounded-2xl object-cover md:rounded-[1.25rem]"
              />
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <progress
            value={scrollProgress}
            max="1"
            aria-label="Karusel progress"
            className="h-1 w-44 appearance-none overflow-hidden rounded-full bg-[#E6DED6] [&::-moz-progress-bar]:rounded-full [&::-moz-progress-bar]:bg-[#2A2926] [&::-webkit-progress-bar]:bg-[#E6DED6] [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-[#2A2926]"
          />
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
            <p className="text-sm font-medium tracking-[0.14em] uppercase text-[#8A776B]">
              Trustpilot
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight text-[#2A2926] md:text-5xl">
              Det siger medlemmerne
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6F655F] md:text-lg">
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
                  className="min-w-0 rounded-2xl border border-[#E6DED6] bg-[#FDFBF8] p-6 shadow-[0_8px_20px_rgba(42,41,38,0.04)]"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={review.image}
                      alt=""
                      className="h-14 w-14 shrink-0 rounded-full object-cover"
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="font-['Manrope'] text-base font-semibold text-[#2A2926]">
                        {review.author}
                      </p>
                      <p className="mt-1 text-sm leading-none text-[#6F655F]">
                        {review.country} · {review.date}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-lg font-medium tracking-[0.12em] text-[#CFAFA7]">
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 text-lg leading-8 text-[#2A2926]">
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
                className="cursor-pointer rounded-full bg-[#CFAFA7] px-6 py-3 text-sm font-semibold text-[#2A2926] transition-colors hover:bg-[#8A776B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CFAFA7]"
              >
                {allReviewsVisible ? "se mindre" : "læs flere anmeldelser"}
              </motion.button>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="overflow-hidden rounded-2xl bg-[#8A776B] text-[#FDFBF8] md:rounded-[1.5rem] lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-center lg:gap-10">
            <div className="px-6 py-10 md:px-10 md:py-12 lg:py-16 lg:pr-0 lg:pl-12">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#F8F5F1]/70">
                Fællesskabet i tal
              </p>
              <h2 className="mt-3 max-w-lg text-3xl leading-tight font-medium tracking-tight md:text-5xl">
                Det har vi skabt sammen
              </h2>

              <div className="mt-10 grid border-t border-[#F8F5F1]/22 sm:grid-cols-2">
                {salesPoints.map((point) => (
                  <article
                    key={point.number}
                    className="border-b border-[#F8F5F1]/22 py-6 sm:odd:pr-6 sm:even:border-l sm:even:border-[#F8F5F1]/22 sm:even:pl-6"
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F8F5F1]/12 text-[#DCC8B6]"
                      >
                        <point.icon
                          className="h-5 w-5"
                          strokeWidth={1.6}
                          aria-hidden="true"
                        />
                      </span>
                      <h3
                        className="text-3xl leading-none font-normal tracking-tight text-[#FDFBF8] md:text-[2.35rem]"
                      >
                        {point.number}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-xs text-sm leading-6 text-[#F8F5F1]/78 md:text-base md:leading-7">
                      {point.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center px-6 pb-10 md:pb-12 lg:px-0 lg:py-12 lg:pr-10">
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

              <div className="relative mx-auto w-full max-w-[24rem] overflow-hidden rounded-2xl bg-[#2A2926] shadow-[0_28px_80px_rgba(42,41,38,0.26)] lg:-mr-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#2A2926]">
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

      <section id="saadan-goer-du" className="pb-20 md:pb-28">
        <Container>
          <div className="rounded-2xl bg-[#FDFBF8] px-6 py-10 shadow-[0_18px_60px_rgba(42,41,38,0.06)] md:rounded-[1.5rem] md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:items-end">
              <div>
                <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#8A776B]">
                Kom i gang
                </p>
                <h2 className="mt-3 text-3xl leading-tight font-medium tracking-tight text-[#2A2926] md:text-5xl">
                  Sådan gør du
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                Et medlemskab giver dig adgang til garderoben, hvor du kan låne,
                bruge og bytte tøj i dit eget tempo.
              </p>
            </div>

            <div
              ref={howItWorksRef}
              className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
              aria-label="Sådan gør du trin"
            >
              {howItWorksSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="group relative min-h-[28rem] w-[82vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#E6DED6] bg-[#F8F5F1] transition-colors hover:bg-[#DCC8B6] sm:w-[28rem] lg:w-[calc((100%_-_2rem)/3)]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={step.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      aria-hidden="true"
                    />
                    <span className="absolute right-4 top-4 font-['filson-pro'] text-5xl leading-none text-[#FDFBF8]/72">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-['Manrope'] text-lg leading-tight font-semibold tracking-normal text-[#2A2926]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6F655F]">
                      {step.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => scrollHowItWorks(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DED6] bg-[#F8F5F1] text-[#2A2926] transition-colors hover:bg-[#DCC8B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                aria-label="Forrige trin"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollHowItWorks(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6DED6] bg-[#F8F5F1] text-[#2A2926] transition-colors hover:bg-[#DCC8B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                aria-label="Næste trin"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-20 md:pb-28">
        <Container>
          <div className="overflow-hidden rounded-2xl bg-[#DCC8B6] md:rounded-[1.5rem] lg:grid lg:min-h-[28rem] lg:grid-cols-[minmax(0,1fr)_32%]">
            <div className="px-6 py-12 md:px-10 md:py-14 lg:px-14 lg:py-18">
              <h2 className="text-3xl leading-tight font-medium tracking-tight text-[#2A2926] md:text-4xl lg:text-5xl">
                Vælg dit medlemskab
              </h2>

              <div className="mt-8 flex h-px w-full">
                <div className="w-20 bg-[#2A2926] md:w-28" />
                <div className="flex-1 bg-[#E6DED6]" />
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-3 sm:items-stretch sm:gap-6">
                {membershipPackages.map((membershipPackage) => (
                  <article
                    key={membershipPackage.name}
                    className="flex min-w-0 flex-col"
                  >
                    <h3 className="font-['Manrope'] text-base leading-none font-bold tracking-normal text-[#2A2926] md:text-lg">
                      {membershipPackage.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#2A2926] md:text-base md:leading-7">
                      {membershipPackage.text}
                    </p>
                    <p className="mt-4 text-lg font-semibold text-[#2A2926] md:text-xl">
                      {membershipPackage.price}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="relative h-64 w-full sm:h-72 lg:h-full lg:min-h-full">
              <img
                src={membershipImage}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-right"
                aria-hidden="true"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #DCC8B6 0%, rgba(220, 200, 182, 0) 15%)",
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
