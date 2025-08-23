import { useEffect } from 'react';

interface ResponsiveMetaProps {
  title?: string;
  description?: string;
  viewport?: string;
}

export function ResponsiveMeta({ 
  title = "Mike Kagera - ICT Professional & Software Developer",
  description = "Passionate about using ICT to improve public service delivery, drive organizational efficiency, and empower users through smart, sustainable tech solutions.",
  viewport = "width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes"
}: ResponsiveMetaProps) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    // Set viewport meta
    let metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      metaViewport = document.createElement('meta');
      metaViewport.setAttribute('name', 'viewport');
      document.head.appendChild(metaViewport);
    }
    metaViewport.setAttribute('content', viewport);
    
    // Set additional mobile optimization meta tags
    const mobileMetaTags = [
      { name: 'theme-color', content: '#0f172a' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-tap-highlight', content: 'no' }
    ];
    
    mobileMetaTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        document.head.appendChild(metaTag);
      }
      metaTag.setAttribute('content', tag.content);
    });
    
    // Set mobile-specific CSS
    const mobileCSS = `
      @media (max-width: 768px) {
        html {
          font-size: 14px;
        }
        body {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        input, textarea, select {
          font-size: 16px !important;
        }
      }
    `;
    
    let styleElement = document.getElementById('mobile-responsive-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'mobile-responsive-styles';
      document.head.appendChild(styleElement);
    }
    styleElement.textContent = mobileCSS;
    
  }, [title, description, viewport]);

  return null; // This component doesn't render anything
}