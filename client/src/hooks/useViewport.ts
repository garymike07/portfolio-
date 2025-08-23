import { useState, useEffect } from 'react';

export interface ViewportInfo {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLandscape: boolean;
  isPortrait: boolean;
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function useViewport(): ViewportInfo {
  const [viewport, setViewport] = useState<ViewportInfo>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLandscape: false,
    isPortrait: false,
    breakpoint: 'xs'
  });

  useEffect(() => {
    function updateViewport() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Determine breakpoint
      let breakpoint: ViewportInfo['breakpoint'] = 'xs';
      if (width >= 1536) breakpoint = '2xl';
      else if (width >= 1280) breakpoint = 'xl';
      else if (width >= 1024) breakpoint = 'lg';
      else if (width >= 768) breakpoint = 'md';
      else if (width >= 640) breakpoint = 'sm';
      
      // Determine device type
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Determine orientation
      const isLandscape = width > height;
      const isPortrait = height > width;

      setViewport({
        width,
        height,
        isMobile,
        isTablet,
        isDesktop,
        isLandscape,
        isPortrait,
        breakpoint
      });
    }

    // Set initial viewport
    updateViewport();
    
    // Add event listener
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
    };
  }, []);

  return viewport;
}