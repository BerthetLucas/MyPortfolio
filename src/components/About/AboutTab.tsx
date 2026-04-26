import meImage from '@/assets/me.jpeg';
import { MotionSection } from '../MotionComponents/MotionSection';

const stack: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Astro', 'Tailwind'],
  Backend: ['NestJS', 'Node.js', 'Firebase', 'Supabase'],
  Outils: ['Docker', 'CI/CD', 'Playwright', 'Git'],
};

export const AboutTab = () => (
  <MotionSection className="flex flex-col gap-8 py-6 max-w-2xl mx-auto" delay={0.1}>
    <div className="flex gap-6 items-start flex-col sm:flex-row">
      <img
        src={meImage.src}
        alt="Lucas Berthet"
        className="w-24 h-24 rounded-full object-cover border-2 border-border/20 shrink-0"
        width={96}
        height={96}
        loading="lazy"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold">Lucas Berthet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Développeur web curieux, en permanence en train d'explorer et de me
          former aux nouvelles technologies. Ces stacks sont mes spécialités,
          mais j'aime explorer d'autres technologies à travers mes projets.
        </p>
        <span className="text-xs text-muted-foreground">
          <span aria-hidden="true">📍</span> Lyon, France
        </span>
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
            {techs.map(tech => (
              <p
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xs shadow-sm w-fit text-sm"
              >
                {tech}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  </MotionSection>
);
