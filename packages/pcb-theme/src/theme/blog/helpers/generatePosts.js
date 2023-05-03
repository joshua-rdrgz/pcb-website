import { styled } from "frontity";

import PostPreview from "../archive-components/PostPreview";
import gatherPostData from "./gatherPostData";

import * as variables from "../styles/variables";

const ArchiveH2 = styled.h2`
  text-align: center;
  color: ${variables.colorNeutral100};
  ${variables.textHeading6Bold};
  padding: ${variables.spacing16};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textHeading3Bold};
  }
`;

const RelatedSpan = styled.span`
  text-align: center;
  color: ${variables.colorNeutral200};
  padding: ${variables.spacing16};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textHeading5Bold};
  }
`;

const generatePosts = (type, posts, state, media) => {
  let postsToUse;

  if (type === "related") {
    const postsExcludingSelf = posts.filter(
      (post) => `/${post.slug}/` !== state.router.link
    );
    postsToUse = postsExcludingSelf;
  }
  if (type === "archive") {
    postsToUse = posts;
  }

  return (
    <>
      {postsToUse.length === 0 &&
        (type === "archive" ? (
          <ArchiveH2>
            No posts matched the filter results. Please filter for something
            else!
          </ArchiveH2>
        ) : (
          <RelatedSpan>
            No posts related to this post. Please check back later!
          </RelatedSpan>
        ))}
      {postsToUse.map((post) => {
        const postData = state.source[post.type][post.id];
        const postPreviewData = gatherPostData(postData, state, media);

        return (
          <PostPreview key={post.id} blogData={postPreviewData} type={type} />
        );
      })}
    </>
  );
};

export default generatePosts;
