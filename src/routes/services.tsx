import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Clock, Scissors } from "lucide-react";
import { services, formatPrice, formatMinutes, type Service } from "@/lib/service-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Storitve in cene — Argania studio" },
      {
        name: "description",
        content: "Storitve in cene v Argania studiu: striženje, barvanje in nega las.",
      },
      {
        property: "og:title",
        content: "Storitve in cene — Argania studio",
      },
      {
        property: "og:description",
        content: "Striženje, barvanje in nega las v Argania studiu v Ljubljani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Storitve</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-foreground sm:text-6xl">
            Storitve in cene
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Vsaka storitev se začne s kratkim posvetom. Izberite trajanje, ki vam ustreza, čas pa
            bom prilagodila vašim lasem.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <Scissors className="h-4 w-4 text-primary" />
              Posvet je vključen
            </span>
            <span className="inline-flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              Brezplačno prestavljanje do 24 ur
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              Šest dni v tednu
            </span>
          </div>
        </div>
      </section>

      {/* Service blocks */}
      <section className="mx-auto max-w-6xl space-y-20 px-5 py-20 sm:px-8 lg:py-28">
        {services.map((service, index) => (
          <ServiceBlock key={service.id} service={service} reversed={index % 2 === 1} />
        ))}
      </section>

      {/* Policies */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">Dobro je vedeti</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Posveti",
                body: "Vsako barvanje in striženje se začne s pogovorom. Če barvate prvič, lahko rezervirate brezplačen 15-minutni posvet.",
              },
              {
                title: "Odpoved termina",
                body: "Če termina ne morete izkoristiti, ga prosim odpovejte ali prestavite vsaj 24 ur prej.",
              },
              {
                title: "Prihod",
                body: "Pridite s čistimi in suhimi lasmi ter nekaj minut pred terminom.",
              },
            ].map((p) => (
              <div key={p.title}>
                <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3 rounded-[1.5rem] border border-border/60 bg-card p-8 text-center sm:flex-nowrap">
            <p className="flex-1 self-center text-lg text-foreground">
              Ne veste, katero storitev izbrati? Pomagam vam pri izbiri.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Rezervirajte posvet
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceBlock({ service, reversed }: { service: Service; reversed: boolean }) {
  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div
        className={`overflow-hidden rounded-[2rem] border border-border/60 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <img
          src={service.image}
          alt={service.name}
          className="aspect-square w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className={reversed ? "lg:order-1" : ""}>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          {service.tagline}
        </p>
        <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{service.name}</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{service.description}</p>

        <div className="mt-7 grid gap-2 sm:grid-cols-2">
          {service.includes.map((item) => (
            <p key={item} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3 w-3" />
              </span>
              {item}
            </p>
          ))}
        </div>

        <div className="mt-8 rounded-[1.25rem] border border-border/60 bg-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Izberite trajanje
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {service.durations.map((d) => (
              <Link
                key={d.id}
                to="/book"
                search={{ service: service.id, duration: d.id }}
                className="group flex flex-col rounded-xl border border-border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-md"
              >
                <span className="text-sm font-semibold text-foreground">{d.label}</span>
                <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {formatMinutes(d.minutes)}
                </span>
                <span className="mt-3 font-display text-2xl text-primary">
                  {formatPrice(d.price)}
                </span>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-foreground transition-colors group-hover:text-primary">
                  Rezervirajte
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
