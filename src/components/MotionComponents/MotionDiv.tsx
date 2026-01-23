import { motion } from 'motion/react';
import type { ReactNode } from 'react';

type MotionDivProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export const MotionDiv = ({ children, className, delay }: MotionDivProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: delay ?? 0 }}
      viewport={{ once: false }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};
