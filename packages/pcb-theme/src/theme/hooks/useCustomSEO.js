import { useEffect } from "react";
import { useConnect } from "frontity";

const calculateIfPageIsCoreSite = (route, isPost, isLandingPage) => {
  const includesThankYouInURL = route.includes("thank-you");

  if (isPost) return true;
  if (isLandingPage) return false;
  if (includesThankYouInURL) return false;
  return true;
};

const useCustomSEO = () => {
  const { state } = useConnect();
  const data = state.source.get(state.router.link);
  useEffect(() => {
    const isMainDomain = window.location.host === "performanceclearbra.com";
    const isCoreSitePage = calculateIfPageIsCoreSite(
      state.router.link,
      data.isPost,
      data.isLandingPage
    );

    if (!isMainDomain || !isCoreSitePage) {
      const metaTags = document.head.querySelectorAll('meta[name="robots"]');

      // Remove existing "index" directive meta tags
      metaTags.forEach((tag) => {
        const content = tag.getAttribute("content");
        if (content && content.toLowerCase().includes("index")) {
          tag.parentNode.removeChild(tag);
        }
      });

      // Add "noindex" directive meta tag
      const metaTag = document.createElement("meta");
      metaTag.name = "robots";
      metaTag.content = "noindex, nofollow";
      document.head.appendChild(metaTag);
    }
  }, [state.router.link]);

  return null;
};

export default useCustomSEO;
