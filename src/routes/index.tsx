import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Sparkles, MapPin, Clock } from "lucide-react";
import { services, formatPrice } from "@/lib/service-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Argania studio — frizerski studio v Ljubljani" },
      {
        name: "description",
        content:
          "Argania studio je frizerski studio v Ljubljani. Striženje, barvanje in nega las. Rezervirajte termin na spletu.",
      },
      { property: "og:title", content: "Argania studio — frizerski studio v Ljubljani" },
      {
        property: "og:description",
        content:
          "Striženje, barvanje in nega las v Argania studiu v Ljubljani. Rezervirajte termin na spletu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const heroImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/5b4f2e02-cab2-45e8-b2b9-7c12bcac53c5.png";
const interiorImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/87e900a9-b77f-44ab-a6b4-26f9d930ac69.png";
const ritualImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/6d046731-c34c-4a87-ac20-f21908200673.png";
const stylistImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/a315eeee-78c4-43ee-aa8e-930e3c11c01b.png";

const galleryImages = [
  {
    src: "https://vibe.filesafe.space/1792471744635170663/assets/e699c019-9546-4999-845e-df4e5463d09c.png",
    alt: "Bob pričeska",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://vibe.filesafe.space/1792471744635170663/assets/da199502-a8ce-4f18-8a70-d55c26b716ab.png",
    alt: "Mehki valovi z balayage barvanjem",
    span: "",
  },
  {
    src: "https://vibe.filesafe.space/1792471744635170663/assets/6d046731-c34c-4a87-ac20-f21908200673.png",
    alt: "Sijoči blond prameni",
    span: "",
  },
  {
    src: "https://vibe.filesafe.space/1792471744635170663/assets/a315eeee-78c4-43ee-aa8e-930e3c11c01b.png",
    alt: "Frizerka oblikuje lase stranki",
    span: "md:col-span-2",
  },
];

const testimonials = [
  {
    quote:
      "Nikoli še nisem bila bolj sama pri sebi, ko sem stopila iz salona. Lipa me je poslušala — in mi dala strižo, ki je nisem znala prositi.",
    name: "Mariana D.",
    detail: "Striženje",
  },
  {
    quote:
      "Balayage zraste tako mehko, da stalno pozabim, da bi morala nazaj. To je tista čarovnija. (Seveda pa vseeno pridem.)",
    name: "Priya S.",
    detail: "Barvanje",
  },
  {
    quote:
      "Po ostri zimi mi je Ritual vrnil lase v življenje. Masaža lasišča je sama po sebi vredna cene.",
    name: "Eloise T.",
    detail: "Nega las",
  },
];

function Index() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-20">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Frizerski studio · Ljubljana
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl lg:text-7xl">
              Vaši lasje,
              <br />
              <span className="text-primary">v dobrih rokah.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              V Argania studiu vas čaka striženje, barvanje in nega las brez hitenja. Vzamem si čas,
              da skupaj najdeva pričesko, ki vam ustreza.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Rezervirajte termin
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/40"
              >
                Storitve in cene
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <Star className="h-4 w-4 fill-primary text-primary" />
                4,9 · 320+ mnenj
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Grablovičeva ulica 54, Ljubljana
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                Po predhodnem dogovoru
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/25 to-transparent blur-2xl"
              />
              <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
                <img
                  src={heroImage}
                  alt="Ženska z bujnimi, valovitimi lasmi"
                  className="aspect-[3/4] w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card/90 p-4 shadow-lg backdrop-blur sm:block">
                <p className="font-display text-2xl text-foreground">12 let</p>
                <p className="text-xs text-muted-foreground">izkušenj</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy band */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:py-24">
          <div className="overflow-hidden rounded-[1.75rem] border border-border/60">
            <img
              src={interiorImage}
              alt="Notranjost frizerskega studia"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              O studiu
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Majhen studio, <br /> oseben pristop.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Vsak obisk se začne s pogovorom. Povejte mi, kaj si želite in koliko časa zjutraj
              namenite urejanju las. Nato vam predlagam pričesko, ki vam bo ustrezala in jo boste
              zlahka uredili tudi doma. Brez hitenja in brez vsiljevanja.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Več o studiu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Storitve
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Kaj vam lahko ponudim
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Vse storitve
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.id}
              to="/services"
              className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-border/60 bg-card transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {s.tagline}
                </p>
                <h3 className="mt-2 font-display text-2xl text-foreground">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    od {formatPrice(s.durations[0]?.price ?? 0)}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-foreground transition-colors group-hover:text-primary">
                    Podrobnosti
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Navdih
              </p>
              <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
                Ideje za novo pričesko
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Striženje, barvanje in oblikovanje. Če vam je kakšna pričeska všeč, mi sliko pokažite
              ob obisku.
            </p>
          </div>
          <div className="mt-10 grid auto-rows-[12rem] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[14rem]">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-2xl border border-border/60 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ritual split feature */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="order-2 overflow-hidden rounded-[2rem] border border-border/60 lg:order-1">
            <img
              src={ritualImage}
              alt="Sijoči, zdravi lasje po negi"
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Nega las
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Nega za <br /> utrujene lase.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Globinska nega, masaža lasišča in skrbno sušenje. Primerna je za suhe, poškodovane ali
              barvane lase, ki potrebujejo več vlage in sijaja.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted-foreground">
              {(services[2]?.includes ?? []).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/book"
              search={{ service: "the-ritual" }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Rezervirajte nego · od {formatPrice(services[2]?.durations[0]?.price ?? 0)}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Mnenja strank
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Kaj pravijo stranke
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-[1.5rem] border border-border/60 bg-card p-7 text-left"
              >
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/90">
                  „{t.quote}“
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 bg-primary px-8 py-16 text-center text-primary-foreground sm:px-16">
          <div
            aria-hidden
            className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
          />
          <p className="text-xs font-semibold uppercase tracking-[0.22em]">Rezervacija</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">
            Rezervirajte <br /> svoj termin.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-base text-primary-foreground/85">
            Izberite storitev in prost termin na spletu ali me pokličite.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
            >
              Rezervirajte zdaj
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+38670806246"
              className="inline-flex items-center rounded-full border border-primary-foreground/40 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Pokličite 070 806 246
            </a>
          </div>
        </div>
      </section>

      {/* Quiet closer image */}
      <div className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border/60">
          <img
            src={stylistImage}
            alt="Frizerka oblikuje lase stranki"
            className="aspect-[4/3] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
