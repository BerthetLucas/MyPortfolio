import { useEffect, useState } from 'react';
import testVideo from '../assets/test.mp4';
import testWhiteVideo from '../assets/testwhite.mp4';

export const BackgroundVideo = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    setIsDark(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);

    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, []);

  if (!mounted) return null;

  return (
    <video
      src={isDark ? testVideo : testWhiteVideo}
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-20 absolute top-0 left-0 z-0"
    />
  );
};
