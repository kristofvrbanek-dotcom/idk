import { ArrowLeft, ArrowRight, Loader2, Sparkles } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { formatDateLong, formatTime } from "@/lib/booking-utils";

export function DateTimeStep({
  loadingSlots,
  month,
  onMonthChange,
  selectedDate,
  onSelectDate,
  isDateDisabled,
  timesForDate,
  selectedSlot,
  onSelectSlot,
  onBack,
  onContinue,
  canContinue,
}: {
  loadingSlots: boolean;
  month: Date;
  onMonthChange: (d: Date) => void;
  selectedDate: Date | undefined;
  onSelectDate: (d: Date | undefined) => void;
  isDateDisabled: (d: Date) => boolean;
  timesForDate: string[];
  selectedSlot: string | undefined;
  onSelectSlot: (s: string) => void;
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl text-foreground">Izberite datum in uro</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Izberite dan in prikazali se bodo prosti termini.
      </p>

      <div className="mt-7 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-background p-4">
          {loadingSlots ? (
            <div className="flex h-64 items-center justify-center text-sm text-muted-foreground">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Nalagam proste termine…
            </div>
          ) : (
            <Calendar
              mode="single"
              month={month}
              onMonthChange={onMonthChange}
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={isDateDisabled}
              className="mx-auto"
            />
          )}
        </div>

        <div className="rounded-2xl border border-border/60 bg-background p-4">
          {selectedDate ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {formatDateLong(selectedDate)}
              </p>
              {timesForDate.length === 0 ? (
                <p className="mt-6 text-sm text-muted-foreground">
                  Ta dan ni prostih terminov. Izberite drug datum.
                </p>
              ) : (
                <div className="mt-4 grid max-h-64 grid-cols-2 gap-2.5 overflow-y-auto pr-1 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
                  {timesForDate.map((iso) => {
                    const active = selectedSlot === iso;
                    return (
                      <button
                        key={iso}
                        type="button"
                        onClick={() => onSelectSlot(iso)}
                        className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-all ${
                          active
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-sm"
                        }`}
                      >
                        {formatTime(iso)}
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <div className="flex h-full min-h-64 flex-col items-center justify-center text-center text-sm text-muted-foreground">
              <Sparkles className="mb-3 h-6 w-6 text-primary/60" />
              Izberite datum za prikaz prostih terminov.
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Nazaj
        </button>
        <button
          type="button"
          disabled={!canContinue}
          onClick={onContinue}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          Naprej: vaši podatki
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
