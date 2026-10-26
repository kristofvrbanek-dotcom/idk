import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "O studiu — Argania studio" },
      {
        name: "description",
        content: "Spoznajte Argania studio, frizerski studio Jasminke Bašić v Ljubljani.",
      },
      { property: "og:title", content: "O studiu — Argania studio" },
      {
        property: "og:description",
        content: "Spoznajte Argania studio, frizerski studio Jasminke Bašić v Ljubljani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const interiorImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/87e900a9-b77f-44ab-a6b4-26f9d930ac69.png";
const stylistImage =
  "https://vibe.filesafe.space/1792471744635170663/assets/a315eeee-78c4-43ee-aa8e-930e3c11c01b.png";

const values = [
  {
    icon: Heart,
    title: "Najprej poslušam",
    body: "Začneva s pogovorom o vaših laseh, navadah in željah. Striženje sledi pogovoru.",
  },
  {
    icon: Sparkles,
    title: "Skrbno delo",
    body: "Kakovostni izdelki in pričeska, ki jo zlahka uredite tudi doma in je lepa tudi tretji dan, ne le prvi.",
  },
  {
    icon: Leaf,
    title: "Nežno do las",
    body: "Lase obravnavam nežno in izbiram izdelke, ki jih po nepotrebnem ne obremenjujejo.",
  },
];

const team = [
  {
    name: "Jasminka Bašić",
    role: "Lastnica in frizerka",
    bio: "Jasminka vodi Argania studio. Pri njej vas čakata oseben pristop in dovolj časa za pogovor o tem, kaj si želite.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              O studiu
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
              Studio, kjer <br /> <span className="text-primary">si vzamem čas.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Argania studio je frizerski studio v Ljubljani, ki ga vodi Jasminka Bašić. Studio
              deluje od leta 2016.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border/60">
            <img
              src={interiorImage}
              alt="Notranjost frizerskega studia"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Moj pristop
        </p>
        <h2 className="mt-4 font-display text-3xl leading-snug text-foreground sm:text-4xl">
          Pričeska, ki vam ustreza tudi doma.
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Ker delam sama, se lahko vsaki stranki posvetim v celoti. Najprej se pogovoriva o vaših
          željah, navadah in stanju las, nato predlagam striženje, barvanje ali nego, ki vam bo
          ustrezala. Svetujem vam tudi, kako lase urediti doma.
        </p>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Kako delam
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Tri načela</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[1.5rem] border border-border/60 bg-card p-8 text-center"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-2xl text-foreground">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Kdo sem</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">Spoznajte me</h2>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm gap-8">
          {team.map((member) => (
            <figure
              key={member.name}
              className="overflow-hidden rounded-[1.5rem] border border-border/60 bg-card"
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-accent/40" />
              <figcaption className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-2xl text-foreground">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* The space */}
      <section className="border-t border-border/60 bg-secondary/30">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div className="overflow-hidden rounded-[2rem] border border-border/60">
            <img
              src={stylistImage}
              alt="Frizerka oblikuje lase stranki"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Prostor
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Prijeten prostor, brez naglice.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Studio najdete na Grablovičevi ulici 54 v Ljubljani. Med obiskom se lahko sprostite,
              saj je ta čas namenjen samo vam.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Rezervirajte termin
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
