import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  staggerChildren?: boolean;
  delay?: number;
}

const container = (stagger: boolean, delay: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger ? 0.1 : 0,
      delayChildren: delay,
    },
  },
});

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function AnimatedSection({ children, className, staggerChildren = true, delay = 0 }: AnimatedSectionProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={container(staggerChildren, delay)}
      className={className}
    >
      <motion.div variants={item}>{children}</motion.div>
    </motion.section>
  );
}

