import { motion } from "motion/react";
import { ReactNode, useRef, useState } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowButton({ children, onClick, className = "" }: GlowButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative overflow-hidden group bg-midnight-black border border-liquid-gold text-liquid-gold font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-sm ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(212, 175, 55, 0.3), transparent 70%)`,
        }}
      />
    </motion.button>
  );
}
