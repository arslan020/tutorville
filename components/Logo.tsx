type LogoProps = {
  /** Use the light version of the logo on dark backgrounds (footer). */
  inverted?: boolean;
};

export default function Logo({ inverted = false }: LogoProps) {
  return (
    <img
      src={inverted ? "/logo-light.png?v=4" : "/logo.png?v=4"}
      alt="TutorVille"
      className={`w-auto object-contain ${inverted ? "h-20" : "h-14 sm:h-16"}`}
    />
  );
}
