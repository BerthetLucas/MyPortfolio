import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ProjectCardFooter } from './ProjectCardFooter';
import useIsMobile from '@/hooks/use-is-mobile';
import { useWebHaptics } from 'web-haptics/react';

interface WIPProjectCardProps {
  projectId: string;
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

export const WIPProjectCard = ({
  projectId,
  title,
  description,
  technologies,
  image,
}: WIPProjectCardProps) => {
  const { isMobile } = useIsMobile();
  const { trigger } = useWebHaptics();

  const handleProjectCardClick = () => {
    trigger([{ duration: 40 }]);
  };

  return (
    <>
      <h3 className="mb-5">... Ou mes travaux en cours ?</h3>
      <a
        href={`/project-details/${projectId}`}
        className="block w-full max-w-3xl"
        onClick={handleProjectCardClick}
      >
        <Card className="w-full transition-all duration-300 hover:shadow-lg md:flex md:flex-row hover:grayscale-0 hover:scale-102 cursor-pointer">
          <div className="flex flex-1 flex-col justify-between gap-2">
            <CardHeader className="pt-6">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
            </CardHeader>
            <ProjectCardFooter technologies={technologies} />
          </div>
          {!isMobile && (
            <div className="w-full md:w-1/2 md:min-w-70 relative aspect-video md:aspect-auto">
              <img
                src={image}
                alt="Project Image"
                className="absolute inset-0 h-full w-full object-cover rounded-e-xl"
              />
            </div>
          )}
        </Card>
      </a>
    </>
  );
};
