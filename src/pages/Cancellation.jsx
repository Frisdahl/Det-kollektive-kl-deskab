import { ArrowRight, Check, Heart, Lock, Mail } from "lucide-react";
import cancellationImage from "../assets/images/afmeld-img.webp";
import { Container } from "../components/layout/Container";

const cancellationReasons = [
  "Jeg bruger ikke medlemskabet nok",
  "Prisen passer ikke lige nu",
  "Udvalget passer ikke til mig",
  "Jeg flytter eller bor ikke tæt nok på",
  "Jeg holder en pause",
  "Andet",
];

const inputClasses =
  "w-full rounded-[0.95rem] border border-divider bg-[#fcf8f7] px-4 py-3 text-base text-heading outline-none transition-colors placeholder:text-body/55 focus:border-primary focus:bg-[#fcf8f7]";

export function Cancellation() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const reasons = formData.getAll("reasons");
    const message = [
      "Hej Det Kollektive Klædeskab",
      "",
      "Jeg vil gerne afmelde mit medlemskab.",
      "",
      `Navn: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Tlf: ${formData.get("phone")}`,
      `Årsag: ${reasons.length ? reasons.join(", ") : "Ikke angivet"}`,
      "",
      `Uddybning: ${formData.get("message") || "Ikke angivet"}`,
    ].join("\n");

    window.location.href = `mailto:kontakt@detkollektiveklaedeskab.dk?subject=${encodeURIComponent(
      "Afmelding af medlemskab",
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <main className="flex-1">
      <section className="relative isolate overflow-hidden bg-background py-16 md:py-24 lg:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 left-0 -z-10 hidden h-[46rem] w-[42rem] lg:block xl:h-[52rem] xl:w-[48rem]"
        >
          <img
            src={cancellationImage}
            alt=""
            className="h-full w-full scale-115 object-cover object-left-bottom"
          />
        </div>

        <Container className="relative z-10">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(34rem,1fr)] lg:gap-20 xl:gap-28">
            <aside className="lg:pb-8">
              <div className="max-w-xl">
                <p className="fluid-kicker mb-7 font-medium uppercase text-primary">
                  Afmeld medlemskab
                </p>
                <h1 className="page-title max-w-lg font-normal text-heading">
                  Vi hjælper dig med at afslutte dit medlemskab
                </h1>
                <div className="mt-8 h-px w-14 bg-primary/35" />
                <p className="mt-8 max-w-md text-base leading-8 text-body md:text-lg md:leading-8">
                  Udfyld formularen herunder, så får vi de oplysninger, vi skal
                  bruge for at behandle din afmeldelse hurtigt og ordentligt.
                </p>
              </div>

              <div className="mt-12 grid max-w-md gap-8">
                <div className="rounded-[1.35rem] border border-divider p-7">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-surface">
                    <Heart className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 font-['DM_Serif_Display'] text-2xl font-normal leading-tight text-heading">
                    Du er altid velkommen tilbage
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-body">
                    Sæt dit medlemskab på pause, hvis du bare har brug for en
                    pause. Så gemmer vi dine fordele til dig.
                  </p>
                  <a
                    href="mailto:kontakt@detkollektiveklaedeskab.dk?subject=Pause%20medlemskab"
                    className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-heading transition-colors hover:text-primary"
                  >
                    Læs mere om pause
                    <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
                  </a>
                </div>

                <div className="flex gap-4">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-heading" strokeWidth={1.7} aria-hidden="true" />
                  <div>
                    <h2 className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-heading">
                      Kontakt os
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-body">
                      Har du spørgsmål, er du altid velkommen til at skrive til
                      os.
                    </p>
                    <a
                      href="mailto:kontakt@detkollektiveklaedeskab.dk"
                      className="text-sm text-heading underline decoration-divider decoration-2 underline-offset-4 transition-colors hover:text-primary"
                    >
                      kontakt@detkollektiveklaedeskab.dk
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <form
              className="rounded-[1.5rem] border border-background/70 bg-[#fcf8f7] p-6 shadow-[0_18px_50px_color-mix(in_srgb,var(--color-heading)_8%,transparent)] backdrop-blur md:p-9 lg:p-12 xl:p-14"
              onSubmit={handleSubmit}
            >
              <div>
                <p className="font-['Manrope'] text-sm font-bold uppercase tracking-[0.18em] text-heading">
                  Dine oplysninger
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 md:col-span-2">
                  <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Navn
                  </span>
                  <input
                    className={inputClasses}
                    name="name"
                    type="text"
                    placeholder="Dit navn"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Email
                  </span>
                  <input
                    className={inputClasses}
                    name="email"
                    type="email"
                    placeholder="din@email.dk"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-primary">
                    Telefon
                  </span>
                  <input
                    className={inputClasses}
                    name="phone"
                    type="tel"
                    placeholder="+45 12 34 56 78"
                    required
                  />
                </label>
              </div>

              <fieldset className="mt-10">
                <legend className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-heading">
                  Hvorfor afmelder du?
                </legend>
                <p className="mt-3 text-sm leading-6 text-body">
                  Vælg den eller de årsager, der passer bedst.
                </p>
                <div className="mt-4 grid gap-2.5">
                  {cancellationReasons.map((reason) => (
                    <label
                      key={reason}
                      className="flex min-h-14 cursor-pointer items-center gap-3 rounded-[0.9rem] border border-divider bg-[#fcf8f7] px-4 py-3 text-heading transition-colors hover:border-primary/45"
                    >
                      <input
                        type="checkbox"
                        name="reasons"
                        value={reason}
                        className="peer sr-only"
                      />
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[0.35rem] border border-divider bg-[#fcf8f7] text-[#fcf8f7] transition-colors peer-checked:border-primary peer-checked:bg-primary">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-6 text-heading">{reason}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="mt-10 grid gap-2">
                <span className="font-['Manrope'] text-xs font-bold uppercase tracking-[0.16em] text-heading">
                  Vil du uddybe?
                </span>
                <span className="text-sm leading-6 text-body">
                  Fortæl os gerne mere (valgfrit)
                </span>
                <textarea
                  className={`${inputClasses} min-h-36 resize-none`}
                  name="message"
                  placeholder="Skriv gerne lidt mere, hvis der er noget vi skal vide..."
                />
              </label>

              <button
                type="submit"
                className="mt-8 inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-surface transition-colors hover:bg-primary-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Send afmeldelse
                <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
              </button>

              <p className="mt-5 flex items-start justify-center gap-3 text-center text-sm leading-6 text-body">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} aria-hidden="true" />
                Dine oplysninger behandles fortroligt og slettes efter endt
                proces.
              </p>
            </form>
          </div>
        </Container>
      </section>
    </main>
  );
}
