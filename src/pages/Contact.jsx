import { Container } from '../components/layout/Container'
import { SectionHeading } from '../components/ui/SectionHeading'

export function Contact() {
  return (
    <main className="flex-1">
      <section className="py-20 md:py-32">
        <Container>
          <SectionHeading as="h1" heading="Kontakt" />
        </Container>
      </section>
    </main>
  )
}
