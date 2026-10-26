// Small formatting helpers shared by the booking flow.
// Slovenian locale for dates and times.

export const dateKey = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(
    2,
    "0",
  )}`;

export const formatTime = (iso: string) =>
  new Date(iso).toLocaleTimeString("sl-SI", {
    hour: "numeric",
    minute: "2-digit",
  });

export const formatDateLong = (d: Date) =>
  d.toLocaleDateString("sl-SI", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
