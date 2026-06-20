import { useEffect, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
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
        <ShaderGradientCanvas
          style={{ width: '100%', height: '100%' }}
          fov={45}
          pixelDensity={1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            brightness={1.3}
            cAzimuthAngle={60}
            cDistance={7.1}
            cPolarAngle={90}
            cameraZoom={17.1}
            color1="#8fd2ff"
            color2="#d49cff"
            color3="#57ffca"
            envPreset="dawn"
            grain="off"
            lightType="3d"
            positionX={0}
            positionY={-0.15}
            positionZ={0}
            range="disabled"
            rangeEnd={40}
            rangeStart={0}
            reflection={0.1}
            rotationX={0}
            rotationY={0}
            rotationZ={0}
            shader="defaults"
            type="sphere"
            uAmplitude={1.3}
            uDensity={0.8}
            uFrequency={5.5}
            uSpeed={0.3}
            uStrength={1}
            uTime={0}
            wireframe={false}
          />
        </ShaderGradientCanvas>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0 opacity-30">
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        fov={45}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          brightness={0.7}
          cAzimuthAngle={270}
          cDistance={0.5}
          cPolarAngle={180}
          cameraZoom={15.09}
          color1="#c46676"
          color2="#ff810a"
          color3="#cece48"
          envPreset="city"
          grain="on"
          lightType="env"
          positionX={-0.1}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.4}
          rotationX={0}
          rotationY={130}
          rotationZ={70}
          shader="defaults"
          type="sphere"
          uAmplitude={3.2}
          uDensity={0.8}
          uFrequency={5.5}
          uSpeed={0.4}
          uStrength={0.3}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};
