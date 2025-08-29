import { Lightbulb } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Lightbulb className="text-cyan-400" size={32} />
      <span className="text-xl font-bold text-white">Mike Solutions</span>
    </div>
  );
}
