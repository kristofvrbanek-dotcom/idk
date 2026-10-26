import { ArrowRight, Clock } from "lucide-react";
import {
  formatMinutes,
  formatPrice,
  services,
  type Service,
  type ServiceDuration,
} from "@/lib/service-data";

export function ServiceStep({
  selectedService,
  selectedDuration,
  onSelectService,
  onSelectDuration,
  onContinue,
}: {
  selectedService: Service | undefined;
  selectedDuration: ServiceDuration | undefined;
  onSelectService: (s: Service) => void;
  onSelectDuration: (d: ServiceDuration) => void;
  onContinue: () => void;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl text-foreground">Izberi storitev</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Tri storitve s podpisom, vsaka prilagojena tvojim lasom.
      </p>

      <div className="mt-7 grid gap-4 sm:grid-cols-3">
        {services.map((s) => {
          const active = selectedService?.id === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onSelectService(s)}
              className={`group flex flex-col overflow-hidden rounded-2xl border text-left transition-all ${
                active
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border/60 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                  {s.tagline}
                </p>
                <h3 className="mt-1.5 font-display text-xl text-foreground">{s.name}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <p className="mt-3 text-xs font-medium text-foreground">
                  od {formatPrice(s.durations[0]?.price ?? 0)}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {selectedService && (
        <div className="mt-9">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Izberi čas v stolu
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {selectedService.durations.map((d) => {
              const active = selectedDuration?.id === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => onSelectDuration(d)}
                  className={`flex flex-col rounded-xl border p-4 text-left transition-all ${
                    active
                      ? "border-primary bg-primary/10 ring-2 ring-primary/30"
                      : "border-border bg-background hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <span className="text-sm font-semibold text-foreground">{d.label}</span>
                  <span className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {formatMinutes(d.minutes)}
                  </span>
                  <span className="mt-3 font-display text-2xl text-primary">
                    {formatPrice(d.price)}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 flex justify-end">
            <button
              type="button"
              disabled={!selectedDuration}
              onClick={onContinue}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              Nadaljuj na datum in čas
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
