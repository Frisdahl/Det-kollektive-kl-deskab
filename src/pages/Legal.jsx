import { Container } from '../components/layout/Container'

function LegalPage({ heading, text }) {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="fluid-kicker font-medium uppercase text-[#8A776B]">
              Information
            </p>
            <h1 className="fluid-title-lg mt-4 font-medium tracking-tight text-[#2A2926]">
              {heading}
            </h1>
            <p className="mt-6 text-base leading-7 text-[#6F655F] md:text-lg md:leading-8">
              {text}
            </p>
          </div>
        </Container>
      </section>
    </main>
  )
}

export function Cookies() {
  return (
    <LegalPage
      heading="Cookies"
      text="Her finder du information om cookies på Det Kollektive Klædeskab."
    />
  )
}

export function Terms() {
  return (
    <LegalPage
      heading="Vilkår"
      text="Her finder du vilkår for brug af Det Kollektive Klædeskab."
    />
  )
}

export function PrivacyPolicy() {
  return (
    <LegalPage
      heading="Privatlivspolitik"
      text="Her finder du information om, hvordan Det Kollektive Klædeskab behandler personoplysninger."
    />
  )
}
