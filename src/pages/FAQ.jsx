import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { membershipFaqItems } from '../data/membershipFaqItems'

export function FAQ() {
  return (
    <main className="flex-1">
      <section className="bg-background py-20 md:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="fluid-kicker mb-5 font-medium uppercase text-primary">
              Medlems-FAQ
            </p>
            <h1 className="page-title font-normal text-heading">
              Spørgsmål om medlemskab
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-body md:text-lg md:leading-8">
              Her finder du svar på de mest almindelige spørgsmål om point,
              aflevering, adgang til garderoben og afmelding.
            </p>
          </div>

          <div className="mt-14 grid gap-5">
            {membershipFaqItems.map((item) => (
              <article
                key={item.question}
                className="rounded-[1.25rem] border border-border bg-surface p-6 shadow-[var(--shadow-card)] md:p-8"
              >
                <h2 className="font-['Manrope'] text-lg font-semibold leading-tight text-heading md:text-xl">
                  {item.question}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-body md:text-lg md:leading-8">
                  {item.answer}
                </p>
                {item.question === 'Hvordan afmelder jeg mit medlemskab?' ? (
                  <Link
                    to="/afmeld-medlemskab"
                    className="mt-5 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-primary-hover"
                  >
                    Gå til afmeldelse
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
