import type { FormEvent } from "react";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function DetailsStep({
  values,
  onChange,
  submitting,
  onBack,
  onSubmit,
}: {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    notes: string;
  };
  onChange: {
    firstName: (v: string) => void;
    lastName: (v: string) => void;
    email: (v: string) => void;
    phone: (v: string) => void;
    notes: (v: string) => void;
  };
  submitting: boolean;
  onBack: () => void;
  onSubmit: (e: FormEvent) => void;
}) {
  const emailValid = /.+@.+\..+/.test(values.email);
  const canSubmit =
    values.firstName.trim() && values.lastName.trim() && emailValid && values.phone.trim();

  return (
    <form onSubmit={onSubmit}>
      <h2 className="font-display text-3xl text-foreground">Vaši podatki</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Potrebujem jih za rezervacijo termina in pošiljanje potrditve.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">Ime</Label>
          <Input
            id="firstName"
            value={values.firstName}
            onChange={(e) => onChange.firstName(e.target.value)}
            placeholder="Mojca"
            required
            autoComplete="given-name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Priimek</Label>
          <Input
            id="lastName"
            value={values.lastName}
            onChange={(e) => onChange.lastName(e.target.value)}
            placeholder="Novak"
            required
            autoComplete="family-name"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-pošta</Label>
          <Input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => onChange.email(e.target.value)}
            placeholder="mojca@primer.si"
            required
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => onChange.phone(e.target.value)}
            placeholder="051 234 567"
            required
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <Label htmlFor="notes">Opomba (neobvezno)</Label>
        <textarea
          id="notes"
          value={values.notes}
          onChange={(e) => onChange.notes(e.target.value)}
          placeholder="Je še kaj, kar naj vem pred vašim obiskom?"
          className="flex min-h-[96px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        />
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
          type="submit"
          disabled={!canSubmit || submitting}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Rezerviram…
            </>
          ) : (
            <>
              Potrdite rezervacijo
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
