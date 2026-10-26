import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { services, type Service, type ServiceDuration } from "@/lib/service-data";
import {
  CHAIR_TIME_FIELD_ID,
  LOCATION_ID,
  SERVICE_FIELD_ID,
  fetchCalendarFreeSlots,
  submitCalendarBooking,
  type FreeSlotsResponse,
} from "@/lib/booking";
import { dateKey } from "@/lib/booking-utils";
import { ServiceStep } from "@/components/booking/service-step";
import { DateTimeStep } from "@/components/booking/date-time-step";
import { DetailsStep } from "@/components/booking/details-step";
import { BookingSummary } from "@/components/booking/booking-summary";
import { BookingConfirmation } from "@/components/booking/booking-confirmation";
import {
  TRACKING_ID,
  TRACKING_LOCATION_ID,
  TRACKING_PROJECT_ID,
  getTrackingSessionId,
  postTrackingEvent,
} from "@/lib/form-tracking";

export const Route = createFileRoute("/book")({
  validateSearch: (search) =>
    z
      .object({
        service: z.string().optional(),
        duration: z.string().optional(),
      })
      .parse(search),
  head: () => ({
    meta: [
      { title: "Rezervacija termina — Argania studio" },
      {
        name: "description",
        content:
          "Rezervirajte termin v Argania studiu: izberite storitev, trajanje in prost termin.",
      },
      {
        property: "og:title",
        content: "Rezervacija termina — Argania studio",
      },
      {
        property: "og:description",
        content:
          "Rezervirajte termin v Argania studiu: izberite storitev, trajanje in prost termin.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const steps = [
  { n: 1, label: "Storitev" },
  { n: 2, label: "Datum in čas" },
  { n: 3, label: "Vaši podatki" },
];

function BookPage() {
  const { service: serviceParam, duration: durationParam } = Route.useSearch();

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | undefined>();
  const [selectedDuration, setSelectedDuration] = useState<ServiceDuration | undefined>();

  const [month, setMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [slotsByDate, setSlotsByDate] = useState<FreeSlotsResponse>({});
  const [loadingSlots, setLoadingSlots] = useState(true);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSlot, setSelectedSlot] = useState<string | undefined>();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // Pre-select a service + duration when arriving from a deep link.
  useEffect(() => {
    if (!serviceParam) return;
    const s = services.find((x) => x.id === serviceParam);
    if (!s) return;
    setSelectedService(s);
    if (durationParam) {
      const d = s.durations.find((x) => x.id === durationParam);
      if (d) setSelectedDuration(d);
    }
    setStep(2);
  }, [serviceParam, durationParam]);

  // Fetch availability for the visible month (clamped to today+31d).
  // The chosen duration is forwarded so the calendar returns slots
  // spaced for that duration instead of its default slot length.
  // Each service reads from its own calendar.
  const durationMinutes = selectedDuration?.minutes;
  const serviceCalendarId = selectedService?.calendarId;
  useEffect(() => {
    if (!serviceCalendarId) return;
    let active = true;
    const start = new Date(month.getFullYear(), month.getMonth(), 1);
    const end = new Date(month.getFullYear(), month.getMonth() + 1, 0, 23, 59, 59);
    setLoadingSlots(true);
    fetchCalendarFreeSlots(serviceCalendarId, start.getTime(), end.getTime(), durationMinutes)
      .then((data) => {
        if (active) setSlotsByDate(data);
      })
      .catch(() => {
        if (active) setSlotsByDate({});
      })
      .finally(() => {
        if (active) setLoadingSlots(false);
      });
    return () => {
      active = false;
    };
  }, [month, durationMinutes, serviceCalendarId]);

  const availableDateKeys = useMemo(() => {
    const set = new Set<string>();
    for (const [key, val] of Object.entries(slotsByDate)) {
      if (val?.slots?.length) set.add(key);
    }
    return set;
  }, [slotsByDate]);

  const timesForDate = useMemo(() => {
    if (!selectedDate) return [];
    return slotsByDate[dateKey(selectedDate)]?.slots ?? [];
  }, [selectedDate, slotsByDate]);

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today || !availableDateKeys.has(dateKey(date));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService || !selectedDuration || !selectedSlot) return;
    setSubmitting(true);
    try {
      await submitCalendarBooking({
        locationId: LOCATION_ID,
        calendarId: selectedService.calendarId,
        firstName,
        lastName,
        email,
        phone,
        selectedSlot,
        // Forward the appointment length so the calendar blocks the right
        // amount of time instead of falling back to its default slot.
        duration: selectedDuration.minutes,
        ...(notes ? { notes } : {}),
        customFields: [
          { id: SERVICE_FIELD_ID, field_value: selectedService.name },
          {
            id: CHAIR_TIME_FIELD_ID,
            field_value: `${selectedDuration.label} · ${selectedDuration.minutes} min`,
          },
        ],
      });

      // Fire-and-forget CRM tracking event for the booking submission.
      postTrackingEvent(
        {
          type: "external_form_submission",
          timestamp: Date.now(),
          formId: "booking-appointment",
          formData: {
            first_name: firstName,
            last_name: lastName,
            email,
            phone,
            calendar_notes: notes || undefined,
          },
          formLabels: {
            first_name: "Ime",
            last_name: "Priimek",
            email: "E-pošta",
            phone: "Telefon",
            calendar_notes: "Opomba",
          },
          url: window.location.href,
          title: document.title,
          path: window.location.pathname,
          userAgent: navigator.userAgent,
          trackingId: TRACKING_ID,
          locationId: TRACKING_LOCATION_ID,
          projectId: TRACKING_PROJECT_ID,
          sessionId: getTrackingSessionId(),
          properties: {
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
            source: "ai_studio",
            projectId: TRACKING_PROJECT_ID,
            formName: "Rezervacija termina",
          },
        },
        {
          customFields: {
            [SERVICE_FIELD_ID]: {
              value: selectedService.name,
              label: "Storitev",
            },
            [CHAIR_TIME_FIELD_ID]: {
              value: `${selectedDuration.label} · ${selectedDuration.minutes} min`,
              label: "Trajanje",
            },
          },
        },
      );

      setConfirmed(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      toast.error("Rezervacija ni uspela.", {
        description: "Poskusite znova ali me pokličite na 070 806 246.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const resetFlow = () => {
    setConfirmed(false);
    setStep(1);
    setSelectedService(undefined);
    setSelectedDuration(undefined);
    setSelectedDate(undefined);
    setSelectedSlot(undefined);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (confirmed && selectedService && selectedDuration && selectedSlot) {
    return (
      <BookingConfirmation
        service={selectedService}
        duration={selectedDuration}
        slot={selectedSlot}
        date={selectedDate}
        onReset={resetFlow}
      />
    );
  }

  return (
    <div>
      <section className="border-b border-border/60 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Spletna rezervacija
          </p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-foreground sm:text-6xl">
            Rezervirajte termin
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Izberite storitev, trajanje in prost termin. Potrditev prejmete po e-pošti.
          </p>

          <ol className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            {steps.map((s, i) => {
              const active = step === s.n;
              const done = step > s.n;
              return (
                <li key={s.n} className="flex items-center gap-3">
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : done
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-border bg-background text-muted-foreground"
                    }`}
                  >
                    {done ? "✓" : s.n}
                  </span>
                  <span
                    className={active ? "font-semibold text-foreground" : "text-muted-foreground"}
                  >
                    {s.label}
                  </span>
                  {i < steps.length - 1 ? <span className="h-px w-6 bg-border" /> : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div className="rounded-[2rem] border border-border/60 bg-card p-6 sm:p-9">
            {step === 1 && (
              <ServiceStep
                selectedService={selectedService}
                selectedDuration={selectedDuration}
                onSelectService={(s) => {
                  setSelectedService(s);
                  setSelectedDuration(undefined);
                }}
                onSelectDuration={setSelectedDuration}
                onContinue={() => {
                  if (selectedService && selectedDuration) setStep(2);
                }}
              />
            )}

            {step === 2 && (
              <DateTimeStep
                loadingSlots={loadingSlots}
                month={month}
                onMonthChange={setMonth}
                selectedDate={selectedDate}
                onSelectDate={(d) => {
                  setSelectedDate(d);
                  setSelectedSlot(undefined);
                }}
                isDateDisabled={isDateDisabled}
                timesForDate={timesForDate}
                selectedSlot={selectedSlot}
                onSelectSlot={setSelectedSlot}
                onBack={() => setStep(1)}
                onContinue={() => setStep(3)}
                canContinue={!!selectedSlot}
              />
            )}

            {step === 3 && (
              <DetailsStep
                values={{ firstName, lastName, email, phone, notes }}
                onChange={{
                  firstName: setFirstName,
                  lastName: setLastName,
                  email: setEmail,
                  phone: setPhone,
                  notes: setNotes,
                }}
                submitting={submitting}
                onBack={() => setStep(2)}
                onSubmit={handleSubmit}
              />
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <BookingSummary
              selectedService={selectedService}
              selectedDuration={selectedDuration}
              selectedDate={selectedDate}
              selectedSlot={selectedSlot}
            />
          </aside>
        </div>
      </section>
    </div>
  );
}
