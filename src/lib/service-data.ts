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
    name: "Izreži s podpisom",
    tagline: "Natančna striža in stil",
    description:
      "Strižemo po obrazu, teksturi in načinu, kako nosiš lase — vsako rezlico. Začnemo s pogovorom, končamo pa s pričesko, ki jo doma nežno ponoviš.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/e699c019-9546-4999-845e-df4e5463d09c.png",
    calendarId: "zcSaUB20E0hanvdDYHKZ",
    durations: [
      { id: "cut-45", label: "Hitra osvežitev", minutes: 45, price: 75 },
      { id: "cut-75", label: "Striža s podpisom", minutes: 75, price: 120 },
      {
        id: "cut-105",
        label: "Striža in stil",
        minutes: 105,
        price: 165,
      },
    ],
    includes: [
      "Posvet v stolu",
      "Umivanje in masaža lasišča",
      "Natančna striža",
      "Oblikovanje in nasveti za doma",
    ],
  },
  {
    id: "lived-in-color",
    name: "Barva za vsak dan",
    tagline: "Balayage in dimenzionalno barvanje",
    description:
      "Ročno nanašamo toplo, »lived-in« barvo, ki nežno zraste iz narave. Dimenzijo zgradimo okrog tvojega tona, da meja med naravno in naslikano postane sijaj.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/da199502-a8ce-4f18-8a70-d55c26b716ab.png",
    calendarId: "nJBezo5OzBQplg8jzXzb",
    durations: [
      { id: "color-60", label: "Koreninski nanos", minutes: 60, price: 90 },
      { id: "color-90", label: "Gloss in toniranje", minutes: 90, price: 150 },
      {
        id: "color-120",
        label: "Balayage in toniranje",
        minutes: 120,
        price: 220,
      },
    ],
    includes: [
      "Barvni posvet",
      "Ročni nanos",
      "Gloss in toniranje",
      "Bond nega",
      "Oblikovanje pričeske",
    ],
  },
  {
    id: "the-ritual",
    name: "Ritual",
    tagline: "Luksuzno restavrativno pakiranje",
    description:
      "Počasna, restavrativna ura za lase, ki potrebuje nežnost. Globoko kondicioniranje, terapija lasišča in zapečaten finish, ki dlake pusti mehke, sijoče in odporne.",
    image:
      "https://vibe.filesafe.space/1792471744635170663/assets/6d046731-c34c-4a87-ac20-f21908200673.png",
    calendarId: "GODrhmBDRdxGIPyPUmju",
    durations: [
      { id: "ritual-45", label: "Hitri ritual", minutes: 45, price: 55 },
      { id: "ritual-60", label: "Bond ritual", minutes: 60, price: 95 },
      {
        id: "ritual-90",
        label: "Ritual s keratinom",
        minutes: 90,
        price: 150,
      },
    ],
    includes: [
      "Dijagnoza lasišča",
      "Globoka maska",
      "Para hidracija",
      "Bond ali keratin nanos",
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
