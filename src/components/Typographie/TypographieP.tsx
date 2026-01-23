interface TypographyPProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyP({ children, className }: TypographyPProps) {
  return <p className={`leading-7 not-first:mt-6 ${className}`}>{children}</p>;
}
