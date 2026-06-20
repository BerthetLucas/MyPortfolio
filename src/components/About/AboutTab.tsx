import meImage from '@/assets/me.jpeg';
import { MotionSection } from '../MotionComponents/MotionSection';

const stack: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  Backend: ['NestJS', 'Node.js'],
  Outils: ['Docker', 'CI/CD', 'Playwright', 'Git'],
};

export const AboutTab = () => (
  <MotionSection
    className="flex flex-col gap-8 py-6 max-w-2xl mx-auto 2xl:flex-row 2xl:gap-16 2xl:max-w-none 2xl:items-center"
    delay={0.1}
  >
    {/* Bio */}
    <div className="flex gap-6 items-start flex-col sm:flex-row 2xl:flex-col 2xl:gap-8 2xl:max-w-3xl">
      <img
        src={meImage.src}
        alt=""
        className="w-24 h-24 rounded-full object-cover border-2 border-border/20 shrink-0 2xl:w-32 2xl:h-32"
        width={96}
        height={96}
        loading="lazy"
      />
      <div className="flex flex-col gap-2 2xl:gap-4">
        <h2 className="text-lg font-bold 2xl:text-3xl">Lucas Berthet</h2>
        <p className="text-sm leading-relaxed text-muted-foreground text-justify 2xl:text-base 2xl:leading-loose">
          Développeur web à Lyon, le JavaScript est mon cœur de métier : React
          et Next.js côté front, Node.js côté back. Je suis convaincu qu'un bon
          développeur ne peut pas se contenter de sa zone de confort ; je me
          forme en continu et chaque projet est une occasion d'aller plus loin.
          J'intègre une véritable vision produit à mon travail : la maintenance
          et l'évolutivité de mes projets sont, pour moi, tout aussi
          essentielles que le code lui-même.
        </p>
        <span className="text-xs text-muted-foreground 2xl:text-sm">
          <span aria-hidden="true">📍</span> Lyon, France
        </span>
      </div>
    </div>

    {/* Stack */}
    <div className="flex flex-col gap-4 2xl:gap-8">
      <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold 2xl:text-sm">
        Stack technique
      </p>
      {Object.entries(stack).map(([category, techs]) => (
        <div key={category} className="flex flex-col gap-2 2xl:gap-3">
          <p className="text-xs text-muted-foreground 2xl:text-sm">
            {category}
          </p>
          <div className="flex flex-wrap gap-2 2xl:gap-3">
            {techs.map(tech => (
              <p
                key={tech}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-xs shadow-sm w-fit text-sm 2xl:px-5 2xl:py-2.5 2xl:text-base"
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
