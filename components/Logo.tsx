type LogoProps = {
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <img
      src="/logo.png?v=3"
      alt="TutorVille"
      className={`w-auto object-contain ${inverted ? "h-16" : "h-12 sm:h-14"}`}
    />
  );
}
