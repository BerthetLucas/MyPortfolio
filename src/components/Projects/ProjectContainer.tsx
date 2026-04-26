import { MotionSection } from '../MotionComponents/MotionSection';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { WIPProjectCard } from './ProjectCard/WIPProjectCard';
import projects from '@/data/projects.json';
import questHubImage from '@/assets/questHub.png';
import sharingLinkImage from '@/assets/sharing-link-transformer.png';
import claraVidoniImage from '@/assets/claravidoni.png';
import wipImage from '@/assets/wip.png';
import biribiImage from '@/assets/biribiImage.png';

const projectImages: { [key: string]: string } = {
  '1': questHubImage.src,
  '2': sharingLinkImage.src,
  '3': claraVidoniImage.src,
  '4': wipImage.src,
  '5': biribiImage.src,
};

export const ProjectContainer = () => {
  const doneProjects = projects.projects.filter(p => p.status === 'done');
  const wipProject = projects.projects.find(p => p.status === 'wip');

  return (
    <MotionSection
      delay={0.2}
      className="flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:justify-center mt-10 2xl:mt-20 2xl:gap-16"
    >
      {doneProjects.map(project => (
        <ProjectCard
          key={project.id}
          projectId={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={projectImages[project.id]}
        />
      ))}
      {wipProject && (
        <div className="flex flex-col items-center justify-center w-full">
          <WIPProjectCard
            projectId={wipProject.id}
            title={wipProject.title}
            description={wipProject.description}
            technologies={wipProject.technologies}
            image={projectImages[wipProject.id]}
          />
        </div>
      )}
    </MotionSection>
  );
};
