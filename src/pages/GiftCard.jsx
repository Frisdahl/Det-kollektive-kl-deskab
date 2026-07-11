import { ArrowUpRight, Gift, MapPin, Printer } from 'lucide-react'
import { Container } from '../components/layout/Container'
import heroImage from '../assets/images/hero-img.webp'

const giftOptions = [
  {
    icon: Printer,
    title: 'Digitalt gavekort',
    text: 'Køb en digital kopi, download den og print eller send den direkte videre.',
  },
  {
    icon: MapPin,
    title: 'Fysisk gavekort',
    text: 'Kom forbi butikken på Istedgade 79, 1650 København V og køb et fysisk julegavekort.',
  },
  {
    icon: Gift,
    title: 'Dansk og engelsk',
    text: 'Gavekortet har dansk på den ene side og engelsk på den anden.',
  },
]

export function GiftCard() {
  return (
    <main className="flex-1">
      <section className="bg-background pt-10 pb-24 md:pt-14 md:pb-40 lg:pb-48">
        <Container>
          <div className="grid gap-8 md:grid-cols-[minmax(0,0.82fr)_minmax(24rem,1.18fr)] md:items-center lg:gap-12">
            <div className="max-w-xl py-5">
              <p className="fluid-kicker mb-5 font-medium uppercase text-primary">
                Gavekort
              </p>
              <h1 className="page-title font-normal text-heading">
                Vil du give et medlemskab i gave?
              </h1>
              <div className="mt-6 max-w-md space-y-4 text-base leading-7 text-body md:text-lg md:leading-8">
                <p>
                  Er du vild med secondhand og cirkulære ideer, og vil du give
                  den glæde videre til en, du holder af i gave?
                </p>
                <p>
                  Vælg en digital kopi online, eller kom forbi butikken på
                  Istedgade 79 og køb et fysisk gavekort.
                </p>
              </div>

              <a
                href="https://detkollektiveklaedeskab.dk/kurv/"
                className="mt-8 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Køb digitalt gavekort her
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </a>
            </div>

            <div className="lg:w-full lg:max-w-[46rem] lg:justify-self-end">
              <div className="grid gap-5">
                <div className="relative min-h-[19rem] overflow-hidden rounded-[1.2rem] bg-heading md:min-h-[23rem]">
                  <img
                    src={heroImage}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center"
                    aria-hidden="true"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 media-overlay-strong"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2 md:left-5 md:top-5">
                    <span className="rounded-full bg-surface/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Gavekort
                    </span>
                    <span className="rounded-full bg-heading/58 px-3 py-1.5 text-xs font-semibold text-surface backdrop-blur-sm">
                      digitalt eller fysisk
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-surface md:p-6">
                    <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-divider">
                      Secondhand
                    </p>
                    <p className="mt-2 max-w-sm text-xl leading-7 font-semibold md:text-[1.35rem] md:leading-8">
                      En gave, der kan bruges igen og igen.
                    </p>
                  </div>
                </div>

                <div className="border-t border-divider pt-6 text-heading">
                  <div className="grid gap-7 md:grid-cols-3 md:gap-8">
                    {giftOptions.map((option, index) => (
                      <div
                        key={option.title}
                        className="flex gap-4"
                      >
                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-divider text-primary">
                          <option.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                        </span>
                        <div>
                          <p className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </p>
                          <h2 className="card-title mt-2.5 font-['Manrope'] font-bold">
                            {option.title}
                          </h2>
                          <p className="mt-3 text-sm leading-6 text-body">
                            {option.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
