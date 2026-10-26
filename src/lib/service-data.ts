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
    tagline: "Striženje in oblikovanje",
    description:
      "Striženje, prilagojeno obliki obraza, strukturi las in vašemu vsakdanu. Začneva s posvetom, končava z oblikovanjem in nasveti, kako pričesko urediti doma.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/e699c019-9546-4999-845e-df4e5463d09c.png",
    calendarId: "zcSaUB20E0hanvdDYHKZ",
    durations: [
      { id: "cut-45", label: "Osvežitev pričeske", minutes: 45, price: 75 },
      { id: "cut-75", label: "Striženje in sušenje", minutes: 75, price: 120 },
      {
        id: "cut-105",
        label: "Striženje in oblikovanje",
        minutes: 105,
        price: 165,
      },
    ],
    includes: [
      "Posvet",
      "Umivanje in masaža lasišča",
      "Striženje",
      "Oblikovanje in nasveti za doma",
    ],
  },
  {
    id: "lived-in-color",
    name: "Barvanje",
    tagline: "Balayage in barvanje las",
    description:
      "Naravni prehodi barve, ki lepo zrastejo in ne zahtevajo pogostega obnavljanja. Odtenek izbereva skupaj glede na vašo naravno barvo in polt.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/da199502-a8ce-4f18-8a70-d55c26b716ab.png",
    calendarId: "nJBezo5OzBQplg8jzXzb",
    durations: [
      { id: "color-60", label: "Barvanje izrastka", minutes: 60, price: 90 },
      { id: "color-90", label: "Toniranje in sijaj", minutes: 90, price: 150 },
      {
        id: "color-120",
        label: "Balayage in toniranje",
        minutes: 120,
        price: 220,
      },
    ],
    includes: [
      "Posvet o barvi",
      "Nanos barve",
      "Toniranje",
      "Nega za zaščito las",
      "Oblikovanje pričeske",
    ],
  },
  {
    id: "the-ritual",
    name: "Nega las",
    tagline: "Globinska nega in obnova",
    description:
      "Za suhe, poškodovane ali barvane lase. Globinska nega, masaža lasišča in skrbno sušenje vrnejo lasem mehkobo in sijaj.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/6d046731-c34c-4a87-ac20-f21908200673.png",
    calendarId: "GODrhmBDRdxGIPyPUmju",
    durations: [
      { id: "ritual-45", label: "Hitra nega", minutes: 45, price: 55 },
      { id: "ritual-60", label: "Obnovitvena nega", minutes: 60, price: 95 },
      {
        id: "ritual-90",
        label: "Nega s keratinom",
        minutes: 90,
        price: 150,
      },
    ],
    includes: [
      "Pregled lasišča",
      "Globinska maska",
      "Vlaženje s paro",
      "Obnovitveni ali keratinski nanos",
      "Sušenje in oblikovanje",
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
