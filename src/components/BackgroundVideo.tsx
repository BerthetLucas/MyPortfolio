import { useEffect, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';

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
          axesHelper="off"
          bgColor1="#000000"
          bgColor2="#000000"
          brightness={1}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          color1="#606080"
          color2="#8d7dca"
          color3="#212121"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="on"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          shader="defaults"
          type="waterPlane"
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
          wireframe={false}
        />
      </ShaderGradientCanvas>
    </div>
  );
};
