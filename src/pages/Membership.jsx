import { ArrowUpRight, Check, GraduationCap, Leaf, Shirt, UsersRound } from 'lucide-react'
import { Container } from '../components/layout/Container'
import membershipHeroImage from '../assets/images/ryd-op.webp'
import memberPortraitOne from '../assets/images/slider-img-1.webp'
import memberPortraitTwo from '../assets/images/slider-img-2.webp'
import memberPortraitThree from '../assets/images/slider-img-4.webp'
import memberPortraitFour from '../assets/images/slider-img-5.webp'

const memberships = [
  {
    description: 'For dig der vil bruge garderoben fleksibelt fra måned til måned.',
    details: ['Første måned 99 kr.', 'Derefter 199 kr. pr. måned', '250 point i opstart'],
    icon: Shirt,
    name: 'Almindeligt',
    price: '199 kr.',
    suffix: 'pr. måned',
  },
  {
    badge: 'Populær',
    description: 'For studerende der vil have adgang til samme fællesskab til en lavere pris.',
    details: ['25% studierabat hver måned', 'Første måned gratis', '250 point i opstart'],
    icon: GraduationCap,
    name: 'Studie',
    price: '149 kr.',
    suffix: 'pr. måned',
  },
  {
    description: 'For mor eller far og barn mellem 16-20 år, der vil dele medlemskabet.',
    details: ['Første måned 149 kr.', 'Derefter 299 kr. pr. måned', 'Adgang til begge butikker'],
    icon: UsersRound,
    name: 'Familie',
    price: '299 kr.',
    suffix: 'pr. måned',
  },
  {
    description: 'For dig der betaler for et helt år, sparer penge og støtter cirkulær mode.',
    details: ['1800 kr. pr. år', 'Spar 600 kr. om året', 'Svarende til 150 kr. pr. måned'],
    icon: Leaf,
    name: 'Klima',
    price: '1800 kr.',
    suffix: 'pr. år',
  },
]

const membershipNotes = [
  'Brug dit medlemskab i både København og Roskilde fra den dag du tilmelder dig.',
  'Du får 250 point i opstart, så snart vi kan se dig i systemet.',
  'Vælg det medlemskab der passer bedst til lige præcis dig eller jer.',
]

const memberPortraits = [
  {
    alt: 'Glad medlem i Det Kollektive Klædeskab',
    className: 'left-9 top-4 h-44 w-44 -rotate-6 md:h-52 md:w-52 lg:left-12',
    src: memberPortraitOne,
  },
  {
    alt: 'Medlem med secondhand fund',
    className: 'right-12 top-2 h-40 w-40 rotate-8 md:h-48 md:w-48 lg:right-16',
    src: memberPortraitTwo,
  },
  {
    alt: 'Smilende medlem i garderoben',
    className: 'bottom-9 left-20 h-36 w-36 rotate-10 md:h-44 md:w-44 lg:left-24',
    src: memberPortraitThree,
  },
  {
    alt: 'Medlem finder tøj i fællesskabet',
    className: 'bottom-3 right-12 h-48 w-48 -rotate-3 md:h-60 md:w-60 lg:right-16',
    src: memberPortraitFour,
  },
]

export function Membership() {
  return (
    <main className="flex-1">
      <section className="border-b border-[#E6DED6] bg-[#f9f4f1] py-10 md:py-14">
        <Container>
          <div className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.78fr)] lg:gap-14">
            <div className="max-w-xl py-6">
              <p className="fluid-kicker mb-5 font-medium uppercase text-[#8A776B]">
                Medlemskab
              </p>
              <h1 className="text-[clamp(2.35rem,4.3vw,3.9rem)] leading-[0.98] font-normal tracking-tight text-[#2A2926]">
                Vælg dit medlemskab
              </h1>
              <div className="mt-6 max-w-md space-y-4 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                <p>Du melder dig ind online herunder.</p>
                <p>
                  Vi har 4 forskellige medlemskabstyper – Almindeligt, Studie,
                  Familie eller Klima.
                </p>
              </div>
            </div>

            <div className="relative mx-auto min-h-[26rem] w-full max-w-[36rem] lg:min-h-[29rem]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DCC8B6]/70 md:h-88 md:w-88"
              />
              {memberPortraits.map((portrait) => (
                <div
                  key={portrait.src}
                  className={[
                    'absolute overflow-hidden rounded-full border-[6px] border-[#FDFBF8] bg-[#DCC8B6] shadow-[0_14px_34px_rgba(42,41,38,0.14)]',
                    portrait.className,
                  ].join(' ')}
                >
                  <img
                    src={portrait.src}
                    alt={portrait.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
              <div className="absolute left-1/2 top-1/2 z-10 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FDFBF8] px-5 py-4 text-center text-[#2A2926] shadow-[0_14px_34px_rgba(42,41,38,0.14)]">
                <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.12em] text-[#8A776B]">
                  Fællesskab
                </p>
                <p className="mt-1 text-sm leading-5">
                  Find nyt uden at købe nyt
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="pt-12 pb-20 md:pt-14 md:pb-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-3 md:gap-0">
            {membershipNotes.map((note, index) => (
              <div
                key={note}
                className={[
                  "flex gap-4 text-[#2A2926] md:px-6",
                  index > 0 ? "md:border-l md:border-[#DCC8B6]" : "",
                ].join(" ")}
              >
                <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DCC8B6] text-[#8A776B]">
                  <Check className="h-4 w-4" strokeWidth={2.2} />
                </span>
                <div>
                  <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[#2A2926] md:text-base md:leading-7">
                    {note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-[1.5rem] bg-[#DCC8B6] shadow-[0_20px_70px_rgba(42,41,38,0.1)] lg:grid lg:min-h-[26rem] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
            <div className="relative min-h-[20rem] lg:min-h-full">
              <img
                src={membershipHeroImage}
                alt="Medlemmer finder tøj i Det Kollektive Klædeskab"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,41,38,0.18),rgba(42,41,38,0)_58%)]"
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-10 text-[#2A2926] md:px-10 lg:px-12">
              <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                Garderoben i praksis
              </p>
              <h2 className="fluid-title-md mt-3 max-w-xl font-medium tracking-tight">
                Find nyt uden at købe nyt
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
                Medlemskabet giver dig adgang til en levende garderobe, hvor
                styles cirkulerer videre og får nyt liv hos næste medlem.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {memberships.map((membership, index) => (
              <article
                key={membership.name}
                className={[
                  "relative flex min-h-[31rem] flex-col overflow-hidden rounded-[1.5rem] border bg-[#FDFBF8] p-6 text-[#2A2926]",
                  index === 1
                    ? "border-[#DCC8B6] shadow-[0_24px_70px_rgba(42,41,38,0.16)]"
                    : "border-[#E6DED6] shadow-[0_14px_45px_rgba(42,41,38,0.08)]",
                ].join(" ")}
              >
                <div
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-0 top-0",
                    index === 1 ? "h-1.5 bg-[#DCC8B6]" : "h-1 bg-[#E6DED6]",
                  ].join(" ")}
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "flex h-12 w-12 items-center justify-center rounded-full text-[#8A776B] ring-1",
                      index === 1
                        ? "bg-[#DCC8B6] ring-[#DCC8B6]"
                        : "bg-[#f9f4f1] ring-[#E6DED6]",
                    ].join(" ")}
                  >
                    <membership.icon className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  {membership.badge ? (
                    <span className="rounded-full border border-[#DCC8B6] bg-[#f9f4f1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A776B]">
                      {membership.badge}
                    </span>
                  ) : null}
                </div>

                <div className="mt-8">
                  <p className="font-['Manrope'] text-sm font-semibold uppercase tracking-[0.12em] text-[#8A776B]">
                    Medlemskab
                  </p>
                  <h2 className="mt-3 font-['Manrope'] text-2xl font-bold tracking-normal">
                    {membership.name}
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#6F655F]">
                    {membership.description}
                  </p>
                </div>

                <div className="mt-7 flex items-end gap-2">
                  <p className="font-['DM_Serif_Display'] text-5xl font-normal tracking-normal">
                    {membership.price}
                  </p>
                  <p className="pb-1 text-sm text-[#6F655F]">{membership.suffix}</p>
                </div>

                <ul className="mt-7 mb-8 space-y-3 rounded-2xl bg-[#f9f4f1] p-5 text-sm leading-6">
                  {membership.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#E6DED6] text-[#8A776B]">
                        <Check className="h-3 w-3" strokeWidth={2.2} />
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://app.detkollektiveklaedeskab.dk/login"
                  className="mt-auto inline-flex cursor-pointer items-center justify-between rounded-full bg-[#2A2926] px-5 py-3 text-sm font-semibold text-[#FDFBF8] transition-colors hover:bg-[#8A776B] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A776B]"
                >
                  Vælg medlemskab
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
