import { useState, useEffect } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.9) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 -z-10 text-liquid-gold opacity-50 translate-x-[2px] animate-pulse">
            {text}
          </span>
          <span className="absolute top-0 left-0 -z-10 text-electric-gold opacity-50 -translate-x-[2px] animate-pulse">
            {text}
          </span>
        </>
      )}
    </div>
  );
}
