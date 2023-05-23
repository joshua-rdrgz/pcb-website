import { useEffect } from "react";

const useCustomSEO = () => {
  useEffect(() => {
    const isWpDomain = window.location.host.includes('localhost:3000');

    if (isWpDomain) {
      const metaTags = document.head.querySelectorAll('meta[name="robots"]');
      console.log(metaTags);

      // Remove existing "index" directive meta tags
      metaTags.forEach((tag) => {
        const content = tag.getAttribute('content');
        if (content && content.toLowerCase().includes("index")) {
          console.log('we`ve found an index tag, time to remove.');
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
