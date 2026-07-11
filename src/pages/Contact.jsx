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
  'w-full rounded-[1rem] border border-[#DCC8B6] bg-[#FDFBF8] px-4 py-3 text-base text-[#2A2926] outline-none transition-colors placeholder:text-[#6F655F]/55 focus:border-[#8A776B] focus:bg-white'

export function Contact() {
  return (
    <main className="flex-1">
      <section className="bg-[#f9f4f1] pt-10 pb-24 md:pt-14 md:pb-32">
        <Container>
          <div className="max-w-3xl">
            <p className="fluid-kicker mb-5 font-medium uppercase text-[#8A776B]">
              Kontakt
            </p>
            <h1 className="page-title font-normal text-[#2A2926]">
              Har du spørgsmål til medlemskab, gavekort eller garderoben?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
              Skriv til os, hvis du vil høre mere om konceptet, butikkerne
              eller dit medlemskab. Vi vender tilbage hurtigst muligt.
            </p>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(24rem,1.1fr)] lg:items-stretch lg:gap-24">
            <div className="flex h-full flex-col gap-6">
              <div>
                <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                  Kontaktoplysninger
                </p>

                <div className="mt-8 grid gap-7">
                  {contactDetails.map((detail) => (
                    <div
                      key={detail.label}
                      className="flex gap-4"
                    >
                      <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#DCC8B6] text-[#8A776B]">
                        <detail.icon className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                          {detail.label}
                        </span>
                        <a
                          href={detail.href}
                          className="mt-2 inline-block text-lg leading-7 text-[#2A2926] underline decoration-[#DCC8B6] decoration-2 underline-offset-4 transition-colors hover:text-[#8A776B]"
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

              <div className="flex-1 overflow-hidden rounded-[1.35rem] bg-[#2A2926] shadow-[0_14px_42px_rgba(42,41,38,0.12)]">
                <div className="relative h-full min-h-56">
                  <img
                    src={contactImage}
                    alt="Det Kollektive Klædeskab"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(42,41,38,0.42),rgba(42,41,38,0)_70%)]"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
                  Send besked
                </p>
                <h2 className="section-title mt-3 max-w-sm font-normal text-[#2A2926]">
                  Vi hjælper dig videre
                </h2>
              </div>

              <form className="grid gap-6" onSubmit={(event) => event.preventDefault()}>
                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                    Navn
                  </span>
                  <input className={inputClasses} name="name" type="text" placeholder="Dit navn" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                    Email
                  </span>
                  <input className={inputClasses} name="email" type="email" placeholder="din@email.dk" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
                    Tlf
                  </span>
                  <input className={inputClasses} name="phone" type="tel" placeholder="+45" />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-semibold uppercase tracking-[0.14em] text-[#8A776B]">
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
                  className="mt-2 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-[#CFAFA7] px-6 py-3 text-sm font-semibold text-[#2A2926] transition-colors hover:bg-[#DCC8B6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DCC8B6]"
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
