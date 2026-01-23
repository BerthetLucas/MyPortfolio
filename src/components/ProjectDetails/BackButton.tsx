'use client';

import { Button } from '../ui/button';
import { ArrowLeftIcon } from '../Icon/ArrowLeftIcon';

interface BackButtonProps {
  showOnMobile?: boolean;
}

export const BackButton = ({ showOnMobile }: BackButtonProps) => {
  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      window.history.back();
    }
  };

  if (showOnMobile) {
    return (
      <Button
        variant="outline"
        size="xl"
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
