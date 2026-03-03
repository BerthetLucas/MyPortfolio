import { Button } from '../ui/button';
import { ArrowLeftIcon } from '../Icon/ArrowLeftIcon';
import { useWebHaptics } from 'web-haptics/react';

interface BackButtonProps {
  showOnMobile?: boolean;
}

export const BackButton = ({ showOnMobile }: BackButtonProps) => {
  const { trigger } = useWebHaptics();
  const handleBackClick = () => {
    trigger([{ duration: 15 }], { intensity: 0.4 });
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  if (showOnMobile) {
    return (
      <Button
        variant="outline"
        size="lg"
        className="rounded-full h-24 w-24 md:hidden"
        onClick={handleBackClick}
      >
        <ArrowLeftIcon className="size-10" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      onClick={handleBackClick}
      className="hidden md:block w-fit h-fit"
    >
      <ArrowLeftIcon className="size-10" />
    </Button>
  );
};
