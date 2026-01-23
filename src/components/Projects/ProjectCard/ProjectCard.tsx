import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProjectCardFooter } from './ProjectCardFooter';
import useIsMobile from '@/hooks/use-is-mobile';

interface ProjectCardProps {
  projectId: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export const ProjectCard = ({
  projectId,
  title,
  description,
  technologies,
  image,
}: ProjectCardProps) => {
  const { isMobile } = useIsMobile();

  return (
    <a href={`/projectDetails/${projectId}`} className="block w-full max-w-3xl">
      <Card className="w-full transition-all duration-300 hover:shadow-lg md:flex md:flex-row hover:grayscale-0 hover:scale-102 cursor-pointer">
        <div className="flex flex-1 flex-col justify-between gap-2">
          <CardHeader className="pt-6">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            <CardDescription className="text-sm">{description}</CardDescription>
          </CardHeader>
          <ProjectCardFooter technologies={technologies} />
        </div>
        {!isMobile && (
          <div className="w-full md:w-1/2 md:min-w-[280px] relative aspect-video md:aspect-auto">
            <img
              src={image}
              alt="Project Image"
              className="absolute inset-0 h-full w-full object-cover rounded-e-xl"
            />
          </div>
        )}
      </Card>
    </a>
  );
};
