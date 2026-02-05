import { Children, useEffect, useState } from 'react';
import testVideo from '../assets/test.mp4';
import testWhiteVideo from '../assets/testwhite.mp4';
import Silk from './Silk';
import ColorBends from './ColorBends';

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

  if (!isDark) {
    return (
      <div className="absolute inset-0 z-0 opacity-70">
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={['#e69233', '#e8a530', '#ecbe41']}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={undefined}
          parallax={0.5}
          noise={0.1}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <Silk
        speed={5}
        scale={1}
        color="#45485c"
        noiseIntensity={4.1}
        rotation={0}
      />
    </div>
  );
};
