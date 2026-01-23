import { CogIcon } from 'lucide-react';
import { CardFooter } from '@/components/ui/card';

interface ProjectCardFooterProps {
  technologies: string[];
}

export const ProjectCardFooter = ({ technologies }: ProjectCardFooterProps) => {
  return (
    <CardFooter className="flex items-center gap-2 my-2">
      <CogIcon className="h-8 w-auto" />
      {technologies.map(technology => (
        <img
          key={technology}
          src={technology}
          alt="Project Image"
          className="h-9 w-auto"
        />
      ))}
    </CardFooter>
  );
};
