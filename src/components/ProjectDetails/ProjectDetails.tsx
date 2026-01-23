import { Link, useParams } from 'react-router';
import projects from '@/data/projects.json';
import { TypographyH1 } from '../Typographie/TypographieH1';
import { BackButton } from './BackButton';
import { TechItems } from './TechItems';
import { SkillsCard } from './SkillsCard';
import { MotionMain } from '../MotionComponents/MotionMain';
import { Footer } from '../Layout/Footer';
import { ScrollRestoration } from 'react-router';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TypographyP } from '../Typographie/TypographieP';
import { Button } from '../ui/button';

export const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projects.projects[Number(projectId) - 1];

  return (
    <>
      <ScrollRestoration />
      <MotionMain
        delay={0.1}
        className="flex flex-col items-center justify-around min-h-screen mx-5 gap-10 mt-5"
      >
        <div className="w-full flex items-center">
          <BackButton />
          <div className="flex-1 flex justify-center flex-col items-center gap-5">
            <TypographyH1>{project?.title}</TypographyH1>
            <TechItems technologies={project?.technologies} />
          </div>
        </div>
        <div className="w-7/8 md:w-1/2 flex flex-col items-center gap-5">
          <Link
            to={project?.url}
            target="_blank"
            className="hover:grayscale-100 transition-all duration-300 inline-block"
          >
            <img
              src={project?.image}
              alt=""
              loading="eager"
              fetchPriority="high"
              className="rounded-lg"
            />
          </Link>
          <Button asChild>
            <Link to={project?.url} target="_blank">
              Voir le projet
            </Link>
          </Button>
        </div>
        <Card className="w-7/8 md:w-1/2 py-4">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Le projet</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div>
              <TypographyP>{project?.description_details}</TypographyP>
            </div>
            <h3 className="font-bold">Compétences</h3>
            <div className="flex flex-wrap gap-2">
              {project?.skills.map(skill => (
                <SkillsCard key={skill} skill={skill} />
              ))}
            </div>
          </CardContent>
        </Card>
        <BackButton showOnMobile />
      </MotionMain>
      <Footer />
    </>
  );
};
