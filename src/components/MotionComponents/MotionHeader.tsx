import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type MotionHeaderProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const MotionHeader = ({
  children,
  className,
  delay,
}: MotionHeaderProps) => {
  return (
    <motion.header
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay ?? 0 }}
      viewport={{ once: false }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.header>
  );
};
