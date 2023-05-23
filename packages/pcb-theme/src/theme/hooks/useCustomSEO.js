import { useEffect } from "react";

const useCustomSEO = () => {
  useEffect(() => {
    const isWpDomain = window.location.host.includes('wp.performanceclearbra.com');

    if (isWpDomain) {
      const metaTags = document.head.querySelectorAll('meta[name="robots"]');

      // Remove existing "index" directive meta tags
      metaTags.forEach((tag) => {
        const content = tag.getAttribute('content');
        if (content && content.toLowerCase().includes("index")) {
          tag.parentNode.removeChild(tag);
        }
      });

      // Add "noindex" directive meta tag
      const metaTag = document.createElement('meta');
      metaTag.name = 'robots';
      metaTag.content = 'noindex';
      document.head.appendChild(metaTag);
    }
  }, []);

  return null;
};

export default useCustomSEO;
