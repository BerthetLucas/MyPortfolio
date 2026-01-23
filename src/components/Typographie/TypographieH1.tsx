interface TypographyH1Props {
  className?: string;
  children: React.ReactNode;
}

export function TypographyH1({ children, className }: TypographyH1Props) {
  return (
    <h1
      className={`scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance ${className}`}
    >
      {children}
    </h1>
  );
}
