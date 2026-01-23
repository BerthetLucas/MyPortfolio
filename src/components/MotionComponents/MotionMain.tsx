import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type MotionMainProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const MotionMain = ({ children, className, delay }: MotionMainProps) => {
  return (
    <motion.main
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay ?? 0 }}
      viewport={{ once: false }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.main>
  );
};
