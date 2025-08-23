import { ReactNode } from 'react';
import { useViewport } from '@/hooks/useViewport';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

export function ResponsiveContainer({ 
  children, 
  className = '', 
  padding = 'medium',
  maxWidth = 'xl'
}: ResponsiveContainerProps) {
  const { isMobile, isTablet } = useViewport();

  const paddingClasses = {
    none: '',
    small: 'px-4 py-6',
    medium: isMobile ? 'px-4 py-8' : isTablet ? 'px-6 py-12' : 'px-8 py-16',
    large: isMobile ? 'px-4 py-12' : isTablet ? 'px-8 py-16' : 'px-12 py-20'
  };

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-6xl',
    '2xl': 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={`container mx-auto ${paddingClasses[padding]} ${maxWidthClasses[maxWidth]} ${className}`}>
      {children}
    </div>
  );
}