type LogoProps = {
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-xl text-sm font-extrabold text-white ${
          inverted ? "bg-accent" : "bg-navy"
        }`}
      >
        TV
      </span>
      <span className={`text-xl font-extrabold tracking-tight ${inverted ? "text-white" : "text-deep-navy"}`}>
        Tutor<span className={inverted ? "text-accent-soft" : "text-accent"}>Ville</span>
      </span>
    </span>
  );
}
