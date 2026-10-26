import { Link } from "@tanstack/react-router";
import { Clock, Instagram, MapPin, Phone, Scissors } from "lucide-react";

const hours = [
  { day: "Ponedeljek – Sobota", time: "7:00 — 20:00" },
  { day: "Nedelja", time: "Zaprto" },
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
                Argania&nbsp;studio
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Frizerski studio v Ljubljani. Striženje, barvanje in nega las.
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
                  Grablovičeva ulica 54
                  <br />
                  1000 Ljubljana
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href="tel:+38670806246" className="hover:text-foreground">
                  070 806 246
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>Po predhodnem dogovoru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
              Delovni čas
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
          <p>
            © {new Date().getFullYear()} Argania studio, frizerske storitve, Jasminka Bašić s.p.
          </p>
          <p>Grablovičeva ulica 54, 1000 Ljubljana</p>
        </div>
      </div>
    </footer>
  );
}
