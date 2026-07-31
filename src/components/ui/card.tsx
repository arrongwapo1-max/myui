import { Button } from "@/components/ui/button";

type CardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "tertiary";
};

export function Card({
  title,
  description,
  buttonLabel,
  buttonVariant = "primary",
}: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:border-slate-900 hover:shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
          Case Study
        </div>
        <h2 className="mb-3 text-2xl font-bold text-slate-950 transition-colors duration-300 group-hover:text-slate-900">
          {title}
        </h2>

        <p className="mb-6 text-slate-600 leading-relaxed">
          {description}
        </p>

        <Button variant={buttonVariant} className="px-5 py-2.5">
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
} 