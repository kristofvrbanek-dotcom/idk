import type { ReactNode } from "react";
import { Clock, MapPin, Scissors, Sparkles, Star } from "lucide-react";
import { formatMinutes, formatPrice } from "@/lib/service-data";
import { formatDateLong, formatTime } from "@/lib/booking-utils";
import type { Service, ServiceDuration } from "@/lib/service-data";

export function BookingSummary({
  selectedService,
  selectedDuration,
  selectedDate,
  selectedSlot,
}: {
  selectedService: Service | undefined;
  selectedDuration: ServiceDuration | undefined;
  selectedDate: Date | undefined;
  selectedSlot: string | undefined;
}) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-secondary/40 p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Vaš termin</p>
      <div className="mt-6 space-y-5">
        <SummaryRow
          label="Storitev"
          value={selectedService?.name}
          icon={<Scissors className="h-4 w-4" />}
        />
        <SummaryRow
          label="Trajanje"
          value={
            selectedDuration
              ? `${selectedDuration.label} · ${formatMinutes(selectedDuration.minutes)}`
              : undefined
          }
          icon={<Clock className="h-4 w-4" />}
        />
        <SummaryRow
          label="Datum"
          value={selectedDate ? formatDateLong(selectedDate) : undefined}
          icon={<Sparkles className="h-4 w-4" />}
        />
        <SummaryRow
          label="Ura"
          value={selectedSlot ? formatTime(selectedSlot) : undefined}
          icon={<Clock className="h-4 w-4" />}
        />
      </div>

      <div className="mt-7 flex items-end justify-between border-t border-border/60 pt-6">
        <span className="text-sm text-muted-foreground">Skupaj</span>
        <span className="font-display text-3xl text-primary">
          {selectedDuration ? formatPrice(selectedDuration.price) : "—"}
        </span>
      </div>

      <div className="mt-7 space-y-2.5 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-primary text-primary" />
          4,9 · 320+ mnenj
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          Grablovičeva ulica 54, Ljubljana
        </p>
        <p className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          Brezplačno prestavljanje do 24 ur
        </p>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  icon,
}: {
  label: string;
  value: string | undefined;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </span>
      <span
        className={
          value
            ? "text-right text-sm font-medium text-foreground"
            : "text-right text-sm text-muted-foreground/60"
        }
      >
        {value ?? "—"}
      </span>
    </div>
  );
}
