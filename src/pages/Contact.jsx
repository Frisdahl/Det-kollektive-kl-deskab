import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Container } from '../components/layout/Container'
import contactImage from '../assets/images/slider-img-6.webp'

const contactDetails = [
  {
    href: 'mailto:kontakt@detkollektiveklaedeskab.dk',
    icon: Mail,
    label: 'Email',
    value: 'kontakt@detkollektiveklaedeskab.dk',
  },
  {
    href: 'tel:+4531314181',
    icon: Phone,
    label: 'Tlf',
    value: '+45 31 31 41 81',
  },
  {
    href: 'https://maps.google.com/?q=Istedgade%2079%2C%201650%20K%C3%B8benhavn%20V',
    icon: MapPin,
    label: 'Adresse',
    value: 'Istedgade 79, 1650 København V',
  },
]

const inputClasses =
  'w-full rounded-[1rem] border border-divider bg-surface px-4 py-3 text-base text-heading outline-none transition-colors placeholder:text-body/55 focus:border-primary focus:bg-surface'

export function Contact() {
  return (
    <main className="flex-1">
      <section className="bg-background pt-10 pb-24 md:pt-14 md:pb-32">
        <Container>
          <div className="max-w-3xl">
            <p className="fluid-kicker mb-5 font-medium uppercase text-primary">
              Kontakt
            </p>
            <h1 className="page-title font-normal text-heading">
              Har du spørgsmål til medlemskab, gavekort eller garderoben?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-body md:text-lg md:leading-8">
              Skriv til os, hvis du vil høre mere om konceptet, butikkerne
              eller dit medlemskab. Vi vender tilbage hurtigst muligt.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-stretch lg:gap-24">
            <div className="flex h-full flex-col gap-6">
              <div>
                <p className="fluid-kicker font-medium uppercase text-primary">
                  Kontaktoplysninger
                </p>

                <div className="mt-8 grid gap-7">
                  {contactDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex gap-4"
                    >
                      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-divider text-primary">
                        <detail.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                          {detail.label}
                        </span>
                        <a
                          href={detail.href}
                          className="mt-2 inline-block text-lg leading-7 text-heading underline decoration-divider decoration-2 underline-offset-4 transition-colors hover:text-primary"
                          target={detail.label === 'Adresse' ? '_blank' : undefined}
                          rel={detail.label === 'Adresse' ? 'noreferrer' : undefined}
                        >
                          {detail.value}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-hidden rounded-[1.35rem] bg-heading shadow-[var(--shadow-card)]">
                <div className="relative h-full min-h-56">
                  <img
                    src={contactImage}
                    alt="Det Kollektive Klædeskab"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 media-overlay-medium"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="fluid-kicker font-medium uppercase text-primary">
                  Send besked
                </p>
                <h2 className="section-title mt-3 max-w-sm font-normal text-heading">
                  Vi hjælper dig videre
                </h2>
              </div>

              <form className="grid gap-6" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Navn
                  </span>
                  <input className={inputClasses} name="name" type="text" placeholder="Dit navn" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Email
                  </span>
                  <input className={inputClasses} name="email" type="email" placeholder="din@email.dk" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Tlf
                  </span>
                  <input className={inputClasses} name="phone" type="tel" placeholder="+45" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    Besked
                  </span>
                  <textarea
                    className={`${inputClasses} min-h-36 resize-none`}
                    name="message"
                    placeholder="Skriv din besked her"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Send besked
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
