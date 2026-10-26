// Shared service catalogue used by Home, Services, and the Booking widget.
// Three services, each with three bookable durations — the "3 services x 3 times"
// structure the booking calendar reads from.

export type ServiceDuration = {
  id: string;
  label: string;
  minutes: number;
  price: number;
};

export type Service = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  // Calendar this service books into — one calendar per service.
  calendarId: string;
  durations: ServiceDuration[];
  includes: string[];
};

export const services: Service[] = [
  {
    id: "signature-cut",
    name: "Striženje",
    tagline: "Po vaših željah",
    description:
      "Striženje po vaših željah, prilagojeno obliki obraza in vrsti las. Na koncu lase sfeniram in vam svetujem, kako jih urediti doma.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/e699c019-9546-4999-845e-df4e5463d09c.png",
    calendarId: "zcSaUB20E0hanvdDYHKZ",
    durations: [
      { id: "cut-45", label: "Kratki lasje", minutes: 45, price: 75 },
      { id: "cut-75", label: "Srednje dolgi in dolgi lasje", minutes: 75, price: 120 },
      {
        id: "cut-105",
        label: "Striženje in fen frizura",
        minutes: 105,
        price: 165,
      },
    ],
    includes: ["Pogovor o željah", "Umivanje las", "Striženje", "Feniranje in nasveti za doma"],
  },
  {
    id: "lived-in-color",
    name: "Barvanje",
    tagline: "Barvanje in prameni",
    description:
      "Barvanje izrastka, celih las ali naravni prameni (balayage). Odtenek izbereva skupaj, da vam bo lepo pristajal.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/da199502-a8ce-4f18-8a70-d55c26b716ab.png",
    calendarId: "nJBezo5OzBQplg8jzXzb",
    durations: [
      { id: "color-60", label: "Barvanje izrastka", minutes: 60, price: 90 },
      { id: "color-90", label: "Barvanje celih las", minutes: 90, price: 150 },
      {
        id: "color-120",
        label: "Naravni prameni (balayage)",
        minutes: 120,
        price: 220,
      },
    ],
    includes: ["Pogovor o barvi", "Barvanje", "Nega po barvanju", "Feniranje"],
  },
  {
    id: "the-ritual",
    name: "Nega las",
    tagline: "Za suhe in poškodovane lase",
    description:
      "Za suhe, poškodovane ali barvane lase. Maska, masaža lasišča in feniranje vrnejo lasem mehkobo in sijaj.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/6d046731-c34c-4a87-ac20-f21908200673.png",
    calendarId: "GODrhmBDRdxGIPyPUmju",
    durations: [
      { id: "ritual-45", label: "Osnovna nega", minutes: 45, price: 55 },
      { id: "ritual-60", label: "Nega z masažo lasišča", minutes: 60, price: 95 },
      {
        id: "ritual-90",
        label: "Keratinska nega",
        minutes: 90,
        price: 150,
      },
    ],
    includes: [
      "Pregled lasišča",
      "Maska za lase",
      "Masaža lasišča",
      "Keratin (pri keratinski negi)",
      "Feniranje",
    ],
  },
];

export function getService(id: string | null | undefined): Service | undefined {
  return services.find((s) => s.id === id);
}

export function getDuration(
  service: Service,
  durationId: string | null | undefined,
): ServiceDuration | undefined {
  if (!durationId) return undefined;
  return service.durations.find((d) => d.id === durationId);
}

export function formatPrice(value: number): string {
  return `${value} €`;
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m === 0 ? `${h} h` : `${h} h ${m} min`;
}
