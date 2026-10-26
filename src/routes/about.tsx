import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Naša zgodba — Salon Lipa frizerski atelje" },
      {
        name: "description",
        content:
          "Zgodba, filozofija in ekipa Salona Lipa — frizerski atelje v Ljubljani, zgrajen na poslušanju, obrtništvu in tihem luksuzu.",
      },
      { property: "og:title", content: "Naša zgodba — Salon Lipa frizerski atelje" },
      {
        property: "og:description",
        content:
          "Spoznaj ekipo in filozofijo Salona Lipa — frizerski atelje, zgrajen na poslušanju, obrtništvu in tihem luksuzu.",
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
    title: "Najprej poslušamo",
    body: "Začnemo s tvojo lasno zgodovino, navadami in tistim, kar resnično želiš. Striža sledi pogovoru.",
  },
  {
    icon: Sparkles,
    title: "Obrtništvo, ki drži",
    body: "Izurjene roke, dobri izdelki in pričeske, ki jih doma ponoviš — lase, ki je videti namerno tretji dan, ne le prvega.",
  },
  {
    icon: Leaf,
    title: "Nežno kot privzeto",
    body: "Barva z nizko vsebnostjo amoniaka, vgrajena bond nega in soba polna rastlin. Bolje za tvoje lase — in za zrak.",
  },
];

const team = [
  {
    name: "Lipa Marais",
    role: "Ustanoviteljica in mojstrica striže",
    bio: "Dvajset let za stola in še vedno zaljubljena v dober posvet. Lipa je salon zgradila na enem pravilu: gostja naj se nikoli ne počuti v naglici.",
  },
  {
    name: "Noor Adeyemi",
    role: "Višja koloristka",
    bio: "Noor naslika balayage kot akvarel — mehko, »lived-in« in odporljivo na zraslost. Izšolana v Londonu, ukoreninjena v Ljubljani.",
  },
  {
    name: "Sofia Lin",
    role: "Frizerska in vodja tretmajev",
    bio: "Sofia vodi Ritual: terapija lasišča, bond nega in tisto oblikovanje, zaradi katerega naslednji termin naročiš že na poti ven.",
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
              Naša zgodba
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[0.95] text-foreground sm:text-6xl">
              Salon, zgrajen
              <br />
              <span className="text-primary">na poslušanju.</span>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Salon Lipa je nastal leta 2014 z enim stolom, izposojenim umivalnikom in trdovratnim
              prepričanjem: ženska naj iz salona odide bolj kot ona sama, ne manj.
            </p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border/60">
            <img
              src={interiorImage}
              alt="Topel, rožnato obarvan interier Salona Lipa"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Kako se je začelo
        </p>
        <h2 className="mt-4 font-display text-3xl leading-snug text-foreground sm:text-4xl">
          „Hotela sem sobo, kjer ima frizerska čas — in ženska v stolu brez pritiska."
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Tako Lipa opisuje prve mesece. Stol je ostal. Pravilo tudi. V desetletje smo zrasli v
          majhen, skrben atelje — šest stolov, barvni pult, soba za tretmaje in ekipa frizerk,
          izurjenih, da slišijo lase, ki ga opišeš, in lase, ki ga misliš. Obdržali smo tudi mehko
          stikalo in čaj.
        </p>
      </section>

      {/* Values */}
      <section className="border-y border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              V kaj verjamemo
            </p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
              Tri majhna pravila
            </h2>
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Roke</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">
            Spoštaj tvoje frizerske
          </h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
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
              alt="Frizerska v Salon Lipa oblikuje lase gostje"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Prostor
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
              Toplo stikalo, mehki toni, brez naglice.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Skriti ob Rožni ulici je naš atelje vse loke, medenina in rožnato — miren kot žep
              stran od avenije. Privij se s čajem, pusti telefon z grmi navzdol in pusti, da je ura
              tvoja.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Obišči nas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
