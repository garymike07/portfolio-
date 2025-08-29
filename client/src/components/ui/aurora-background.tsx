import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children?: ReactNode;
  className?: string;
}

export function AuroraBackground({ children, className }: AuroraBackgroundProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 h-[60vh] w-[60vh] rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-1/4 h-[50vh] w-[50vh] rounded-full bg-purple-500/20 blur-3xl animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-1/3 h-[40vh] w-[40vh] rounded-full bg-blue-500/20 blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_60%)]" />
      </div>
      {children}
    </div>
  );
}

