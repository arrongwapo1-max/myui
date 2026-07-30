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
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-300
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        ease-in-out
        hover:-translate-y-2
        hover:border-black
        hover:shadow-2xl
        hover:shadow-gray-400/40
      "
    >
      {/* Subtle gray hover background */}
      <div
        className="
          absolute
          inset-0
          bg-gray-100
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        <h2
          className="
            text-2xl
            font-bold
            text-gray-900
            mb-3
            transition-colors
            duration-300
            group-hover:text-black
          "
        >
          {title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6">
          {description}
        </p>

        <Button variant={buttonVariant}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
} 