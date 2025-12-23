import { motion } from "motion/react";
import { ReactNode } from "react";

interface PressableButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  disabled?: boolean;
}

export function PressableButton({ 
  children, 
  onClick, 
  className = "",
  variant = "primary",
  disabled = false
}: PressableButtonProps) {
  
  const baseClasses = "relative overflow-hidden font-bold uppercase tracking-widest text-xs transition-all";
  
  const variantClasses = {
    primary: "bg-liquid-gold text-midnight-black hover:bg-white",
    secondary: "border border-liquid-gold/30 text-liquid-gold hover:bg-liquid-gold hover:text-midnight-black",
    ghost: "text-platinum/60 hover:text-liquid-gold"
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.95,
        transition: { duration: 0.1, ease: "easeIn" }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span 
        className="relative z-10 flex items-center justify-center gap-2"
        whileTap={{ 
          y: disabled ? 0 : 1,
          transition: { duration: 0.1 }
        }}
      >
        {children}
      </motion.span>
      
      {/* Ripple effect on press */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ scale: 0, opacity: 0.5 }}
          whileTap={{ 
            scale: 2, 
            opacity: 0,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
        />
      )}
    </motion.button>
  );
}
