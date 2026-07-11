import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Container } from "../components/layout/Container";
import heroImage from "../assets/images/hero-img.webp";
import navbarImage from "../assets/images/navbar-image.webp";
import rydOpImage from "../assets/images/ryd-op.webp";
import afleverImage from "../assets/images/aflever-img.webp";
import welcomeImage from "../assets/images/Welcome.webp";
import sustainabilityImage from "../assets/images/bæredygtighed.webp";
import sliderImg1 from "../assets/images/slider-img-1.webp";
import sliderImg2 from "../assets/images/slider-img-2.webp";
import sliderImg4 from "../assets/images/slider-img-4.webp";
import sliderImg6 from "../assets/images/slider-img-6.webp";

const weekdayHours = {
  1: { close: "18:00", open: "10:00" },
  2: { close: "18:00", open: "10:00" },
  3: { close: "18:00", open: "10:00" },
  4: { close: "18:00", open: "10:00" },
  5: { close: "18:00", open: "10:00" },
  6: { close: "16:00", open: "10:00" },
};

const stores = [
  {
    address: "Istedgade 79, 1650 København V",
    city: "København",
    description:
      "Besøg garderoben på Vesterbro og find nye favoritter i et levende fællesskab af secondhand styles.",
    hours: weekdayHours,
    images: [heroImage, navbarImage, sliderImg1, sliderImg2, sliderImg4],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Istedgade%2079%2C%201650%20K%C3%B8benhavn%20V",
    mapQuery: "Istedgade 79, 1650 København V",
    note: "Vil du være sikker på at møde Lene, er København et godt valg om torsdagen kl. 10-18.",
  },
  {
    address: "Ringstedgade 13, 4000 Roskilde",
    city: "Roskilde",
    description:
      "I Roskilde kan du bruge samme medlemskab og lade garderoben cirkulere videre lokalt.",
    hours: weekdayHours,
    images: [welcomeImage, afleverImage, sustainabilityImage, rydOpImage, sliderImg6],
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Ringstedgade%2013%2C%204000%20Roskilde",
    mapQuery: "Ringstedgade 13, 4000 Roskilde",
    note: "Roskilde bemandes løbende, og vi kommer forbi hver dag og hænger nyt tøj op.",
  },
];

function parseTimeForToday(now, time) {
  const [hours, minutes] = time.split(":").map(Number);
  const date = new Date(now);

  date.setHours(hours, minutes, 0, 0);

  return date;
}

function formatDuration(milliseconds) {
  const totalMinutes = Math.max(0, Math.ceil(milliseconds / 60000));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours <= 0) {
    return `${minutes} min`;
  }

  if (minutes === 0) {
    return `${hours} t`;
  }

  return `${hours} t ${minutes} min`;
}

function getStoreStatus(store, now) {
  const today = store.hours[now.getDay()];

  if (!today) {
    return {
      label: "Lukket i dag",
      tone: "muted",
    };
  }

  const opensAt = parseTimeForToday(now, today.open);
  const closesAt = parseTimeForToday(now, today.close);

  if (now < opensAt) {
    return {
      label: `Åbner kl. ${today.open.replace(":", ".")}`,
      tone: "muted",
    };
  }

  if (now <= closesAt) {
    return {
      label: `Lukker om ${formatDuration(closesAt - now)}`,
      tone: "open",
    };
  }

  return {
    label: "Lukket nu",
    tone: "muted",
  };
}

function formatOpeningHours(hours) {
  const weekday = hours[1];
  const saturday = hours[6];

  return {
    saturday: `Lør ${saturday.open.replace(":", ".")}-${saturday.close.replace(
      ":",
      ".",
    )}`,
    weekday: `Man-fre ${weekday.open.replace(":", ".")}-${weekday.close.replace(
      ":",
      ".",
    )}`,
  };
}

function StoreMarquee({ direction = "normal", images, name }) {
  const repeatedImages = [...images, ...images];

  return (
    <div className="store-marquee overflow-hidden">
      <div className="store-marquee-track flex w-max gap-4" data-direction={direction}>
        {repeatedImages.map((image, index) => (
          <div
            key={`${name}-${index}`}
            className="relative h-56 w-[18rem] shrink-0 overflow-hidden rounded-[1.25rem] bg-divider md:h-72 md:w-[30rem] xl:h-80 xl:w-[36rem]"
          >
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Stores() {
  const [now, setNow] = useState(() => new Date());
  const statuses = useMemo(
    () => stores.map((store) => getStoreStatus(store, now)),
    [now],
  );

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <main className="flex-1 bg-background">
      <section className="border-b border-border py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-primary">
              Butikker
            </p>
            <h1 className="page-title mt-4 font-normal text-heading">
              Find Det Kollektive Klædeskab i København og Roskilde
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-body md:text-lg md:leading-8">
              Dit medlemskab giver adgang til begge garderober, så du kan bytte
              og finde nye favoritter der, hvor det passer dig bedst.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="space-y-12 md:space-y-16">
            {stores.map((store, index) => {
              const openingHours = formatOpeningHours(store.hours);
              const status = statuses[index];
              const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
                store.mapQuery,
              )}&output=embed`;

              return (
                <article
                  key={store.city}
                  className={[
                    "grid gap-8",
                    index > 0
                      ? "border-t border-border pt-12 md:pt-16"
                      : "",
                    "lg:grid-cols-[minmax(17rem,0.42fr)_minmax(0,1fr)] lg:gap-10",
                  ].join(" ")}
                >
                  <div className="lg:sticky lg:top-28 lg:self-start">
                    <div>
                      <p className="fluid-kicker font-medium uppercase text-primary">
                        {store.city}
                      </p>
                      <h2 className="section-title mt-3 font-medium text-heading">
                        Butikken i {store.city}
                      </h2>
                      <p className="mt-5 text-base leading-7 text-body">
                        {store.description}
                      </p>

                      <div className="mt-7 space-y-5 border-t border-border pt-6">
                        <div className="flex items-start gap-3">
                          <MapPin
                            className="mt-1 h-5 w-5 shrink-0 text-primary"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                              Adresse
                            </p>
                            <p className="mt-2 text-base leading-7 text-heading">
                              {store.address}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock
                            className="mt-1 h-5 w-5 shrink-0 text-primary"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                              Åbningstider
                            </p>
                            <div className="mt-2 space-y-1 text-base leading-7 text-heading">
                              <p>{openingHours.weekday}</p>
                              <p>{openingHours.saturday}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <Clock
                            className="mt-1 h-5 w-5 shrink-0 text-primary"
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />
                          <div>
                            <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                              Status
                            </p>
                            <p
                              className={[
                                "mt-2 text-base leading-7 font-semibold",
                                status.tone === "open"
                                  ? "text-success"
                                  : "text-body",
                              ].join(" ")}
                            >
                              {status.label}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-6 text-sm leading-6 text-body">
                        {store.note}
                      </p>

                      <a
                        href={store.mapsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                      >
                        Se rute på Google Maps
                        <ArrowUpRight
                          className="h-4 w-4"
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="space-y-5 overflow-hidden">
                    <div className="relative aspect-[16/8] overflow-hidden rounded-[1.25rem] bg-divider">
                      <img
                        src={store.images[0]}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        aria-hidden="true"
                      />
                    </div>

                    <div className="overflow-hidden rounded-[1.25rem] border border-border bg-surface">
                      <iframe
                        title={`Google Maps kort til ${store.city}`}
                        src={mapSrc}
                        className="h-80 w-full border-0 md:h-96"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>

                    <StoreMarquee
                      direction={index % 2 === 1 ? "reverse" : "normal"}
                      images={store.images}
                      name={store.city}
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
