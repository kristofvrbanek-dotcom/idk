import { ArrowRight, Check } from "lucide-react";
import { formatMinutes, formatPrice } from "@/lib/service-data";
import { formatDateLong, formatTime } from "@/lib/booking-utils";
import type { Service, ServiceDuration } from "@/lib/service-data";

export function BookingConfirmation({
  service,
  duration,
  slot,
  date,
  onReset,
}: {
  service: Service;
  duration: ServiceDuration;
  slot: string;
  date: Date | undefined;
  onReset: () => void;
}) {
  return (
    <section className="mx-auto max-w-2xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="rounded-[2rem] border border-primary/20 bg-card p-9 text-center sm:p-14">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="h-7 w-7" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
          Termin je rezerviran
        </p>
        <h1 className="mt-4 font-display text-4xl leading-tight text-foreground sm:text-5xl">
          Hvala, se vidimo kmalu!
        </h1>
        <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
          Potrditev ste prejeli po e-pošti. Če boste termin morali prestaviti, me pokličite vsaj 24
          ur prej.
        </p>

        <div className="mt-9 rounded-2xl border border-border/60 bg-background/60 p-6 text-left">
          <div className="grid gap-4 sm:grid-cols-2">
            <ConfirmItem label="Storitev" value={service.name} />
            <ConfirmItem
              label="Trajanje"
              value={`${duration.label} · ${formatMinutes(duration.minutes)}`}
            />
            <ConfirmItem label="Datum" value={date ? formatDateLong(date) : "—"} />
            <ConfirmItem label="Ura" value={formatTime(slot)} />
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-5">
            <span className="text-sm text-muted-foreground">Cena</span>
            <span className="font-display text-2xl text-primary">
              {formatPrice(duration.price)}
            </span>
          </div>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Rezervirajte nov termin
            <ArrowRight className="h-4 w-4" />
          </button>
          <a
            href="tel:+38670806246"
            className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/40"
          >
            Pokličite 070 806 246
          </a>
        </div>
      </div>
    </section>
  );
}

function ConfirmItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1 font-medium text-foreground">{value}</p>
    </div>
  );
}
