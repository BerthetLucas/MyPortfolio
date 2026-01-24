import { MotionSection } from '../MotionComponents/MotionSection';
import { ProjectCard } from './ProjectCard/ProjectCard';
import projects from '@/data/projects.json';
import questHubImage from '@/assets/questHub.png';
import sharingLinkImage from '@/assets/sharing-link-transformer.png';
import claraVidoniImage from '@/assets/claravidoni.png';

const projectImages: { [key: string]: string } = {
  '1': questHubImage.src,
  '2': sharingLinkImage.src,
  '3': claraVidoniImage.src,
};

export const ProjectContainer = () => {
  return (
    <MotionSection
      delay={0.2}
      className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center mt-10 2xl:mt-20 2xl:gap-16"
    >
      {projects.projects.map(project => (
        <ProjectCard
          key={project.id}
          projectId={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={projectImages[project.id]}
        />
      ))}
      <p>... et pleins d'autres idées en cours de développement !</p>
    </MotionSection>
  );
};
