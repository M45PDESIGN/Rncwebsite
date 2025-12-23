import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  intensity?: "subtle" | "medium" | "strong";
}

export function AnimatedCard({ 
  children, 
  className = "", 
  onClick,
  intensity = "subtle" 
}: AnimatedCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Scale values based on intensity
  const intensityMap = {
    subtle: { rotate: 2, translate: 4 },
    medium: { rotate: 5, translate: 8 },
    strong: { rotate: 8, translate: 12 }
  };

  const { rotate, translate } = intensityMap[intensity];

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [rotate, -rotate]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-rotate, rotate]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
