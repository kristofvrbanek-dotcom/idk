import { Link } from "@tanstack/react-router";
import { Clock, Instagram, Mail, MapPin, Phone, Scissors } from "lucide-react";

const hours = [
  { day: "Ponedeljek", time: "Zaprto" },
  { day: "Torek – Petek", time: "9:00 — 19:00" },
  { day: "Sobota", time: "9:00 — 18:00" },
  { day: "Nedelja", time: "10:00 — 16:00" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Scissors className="h-4 w-4" />
              </span>
              <span className="font-display text-2xl leading-none text-foreground">
                Salon&nbsp;Lipa
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Frizerski atelje za natančnost, mehkobo in tisto samozavest, ki s tabo odide skozi
              vrata.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="mailto:zivjo@salonlipa.si"
                aria-label="E-pošta"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Obišči nas
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Rožna ulica 248, št. 4<br />
                  1000 Ljubljana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+38615123456" className="hover:text-foreground">
                  051 234 567
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Po dogovoru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Ure
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {hours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className="text-foreground/80">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Salon Lipa. Vse pravice pridržane.</p>
          <p>Z roko v roki za moderno žensko.</p>
        </div>
      </div>
    </footer>
  );
}
