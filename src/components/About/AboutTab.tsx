import meImage from '@/assets/me.jpeg';

const stack: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Astro', 'Tailwind'],
  Backend: ['NestJS', 'Node.js', 'Firebase', 'Supabase'],
  Outils: ['Docker', 'CI/CD', 'Playwright', 'Git'],
};

export const AboutTab = () => (
  <div className="flex flex-col gap-8 py-6 max-w-2xl mx-auto">
    <div className="flex gap-6 items-start flex-col sm:flex-row">
      <img
        src={meImage.src}
        alt="Lucas Berthet"
        className="w-24 h-24 rounded-full object-cover border-2 border-border/20 flex-shrink-0"
        width={96}
        height={96}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Lucas Berthet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Développeur web curieux, en permanence en train d'explorer et de me former aux nouvelles
          technologies. J'aime construire des projets qui résolvent de vrais problèmes — avec soin
          pour le code et le design. Autant à l'aise sur un backend robuste que sur une interface
          soignée.
        </p>
        <span className="text-xs text-muted-foreground">📍 Lyon, France</span>
      </div>
    </div>

    <div className="flex flex-col gap-4">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">
        Stack technique
      </p>
      {Object.entries(stack).map(([category, techs]) => (
        <div key={category} className="flex flex-col gap-2">
          <p className="text-xs text-muted-foreground">{category}</p>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded border border-border/30 bg-muted/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
