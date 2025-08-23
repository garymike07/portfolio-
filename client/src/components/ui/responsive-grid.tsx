import { ReactNode } from 'react';
import { useViewport } from '@/hooks/useViewport';

interface ResponsiveGridProps {
  children: ReactNode;
  className?: string;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
  gap?: 'none' | 'small' | 'medium' | 'large';
}

export function ResponsiveGrid({ 
  children, 
  className = '',
  cols = { xs: 1, sm: 2, md: 2, lg: 3, xl: 3, '2xl': 4 },
  gap = 'medium'
}: ResponsiveGridProps) {
  const { breakpoint } = useViewport();

  const gapClasses = {
    none: '',
    small: 'gap-4',
    medium: 'gap-6',
    large: 'gap-8'
  };

  const getGridCols = () => {
    if (breakpoint === '2xl' && cols['2xl']) return `grid-cols-${cols['2xl']}`;
    if (breakpoint === 'xl' && cols.xl) return `grid-cols-${cols.xl}`;
    if (breakpoint === 'lg' && cols.lg) return `grid-cols-${cols.lg}`;
    if (breakpoint === 'md' && cols.md) return `grid-cols-${cols.md}`;
    if (breakpoint === 'sm' && cols.sm) return `grid-cols-${cols.sm}`;
    return `grid-cols-${cols.xs || 1}`;
  };

  return (
    <div className={`grid ${getGridCols()} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}