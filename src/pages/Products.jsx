import { ArrowRight } from "lucide-react";
import { Container } from "../components/layout/Container";
import { productItems } from "../data/productItems";

export function Products() {
  return (
    <main className="flex-1 bg-background">
      <section className="border-b border-border py-10 md:py-14">
        <Container>
          <div className="max-w-4xl">
            <p className="fluid-kicker font-medium uppercase text-primary">
              Produkter
            </p>
            <h1 className="page-title mt-4 font-normal text-heading">
              Se udvalgte styles fra garderoben
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-body md:text-lg md:leading-8">
              Et lille overblik over produkter og pointpriser. Udvalget skifter
              løbende, når fællesskabet afleverer nye favoritter.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productItems.map((product) => (
              <article
                key={product.name}
                className="rounded-[1rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-divider">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-surface/92 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                    {product.category}
                  </span>
                </div>

                <div className="pt-3">
                  <div className="space-y-1">
                    <h2 className="font-['Manrope'] text-sm font-semibold leading-5 text-heading">
                      {product.name}
                    </h2>
                    <p className="text-xs leading-5 text-body">
                      Str. {product.size}
                    </p>
                    <p className="text-sm font-semibold leading-5 text-primary">
                      {product.points} point
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <a
            href="/medlemskab"
            className="mt-10 inline-flex w-fit cursor-pointer items-center gap-3 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-heading transition-colors hover:bg-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Bliv medlem
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
          </a>
        </Container>
      </section>
    </main>
  );
}
