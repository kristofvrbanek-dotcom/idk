// Booking data layer — wired to the connected calendar.
// Availability is read from the calendar's free-slots endpoint and
// bookings are submitted to the vibe booking endpoint, which handles
// contact creation + appointment booking in one request.

export const CALENDAR_ID = "zcSaUB20E0hanvdDYHKZ";
export const LOCATION_ID = "OvJHtiiqLefbKtHXk1WN";

const BOOKING_API_URL = "https://backend.leadconnectorhq.com";
const VIBE_API_URL = "https://backend.leadconnectorhq.com/vibe-ai";

// Registered custom-field ids for the two non-standard booking values.
export const SERVICE_FIELD_ID = "y58g0uiQ4HaXAXk2TxaA";
export const CHAIR_TIME_FIELD_ID = "ja33Zz31Tj4YUnYa1tUU";

export type CustomFieldValue = { id: string; field_value: string };

export type BookingPayload = {
  locationId: string;
  calendarId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  selectedSlot: string;
  selectedTimezone?: string;
  sessionId?: string;
  customFields?: CustomFieldValue[];
  // Appointment length in minutes — tells the calendar how long to block.
  duration?: number;
} & Partial<
  Record<
    | "notes"
    | "address1"
    | "city"
    | "state"
    | "postalCode"
    | "country"
    | "companyName"
    | "website"
    | "gender"
    | "dateOfBirth"
    | "timezone",
    string
  >
>;

export const getBrowserTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// Clamp a requested range to today-or-later and a 31-day maximum window.
export const clampAvailabilityRange = (startMs: number, endMs: number) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = Math.max(startMs, today.getTime());
  const maxEndDate = startDate + 31 * 24 * 60 * 60 * 1000;
  const endDate = Math.min(Math.max(endMs, startDate), maxEndDate);

  return { startDate, endDate };
};

export type FreeSlotsResponse = Record<string, { slots: string[] }>;

export const fetchCalendarFreeSlots = async (
  calendarId: string,
  startMs: number,
  endMs: number,
  durationMinutes?: number,
): Promise<FreeSlotsResponse> => {
  const { startDate, endDate } = clampAvailabilityRange(startMs, endMs);
  const params = new URLSearchParams({
    startDate: String(startDate),
    endDate: String(endDate),
    timezone: getBrowserTimezone(),
  });
  // Forward the chosen appointment length so the calendar returns slots
  // spaced for that duration (45 / 60 / 75 / 90 / 105 / 120 min) instead of
  // its default slot length.
  if (durationMinutes) params.set("duration", String(durationMinutes));

  const response = await fetch(`${BOOKING_API_URL}/calendars/${calendarId}/free-slots?${params}`);
  if (!response.ok) throw new Error("Failed to fetch calendar availability");
  return (await response.json()) as FreeSlotsResponse;
};

export const submitCalendarBooking = async (payload: BookingPayload) => {
  const response = await fetch(`${VIBE_API_URL}/booking/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      selectedTimezone: payload.selectedTimezone ?? getBrowserTimezone(),
      sessionId: payload.sessionId ?? crypto.randomUUID(),
      customFields: payload.customFields ?? [],
      // Forward the appointment length so the calendar blocks the right
      // amount of time instead of falling back to its default slot.
      ...(payload.duration ? { duration: payload.duration } : {}),
    }),
  });

  if (!response.ok) throw new Error("Booking submission failed");
  return response.json();
};
