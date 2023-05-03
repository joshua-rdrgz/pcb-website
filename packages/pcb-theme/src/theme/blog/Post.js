import { connect, styled, css } from "frontity";
import Breadcrumbs from "./post-components/Breadcrumbs";

import gatherPostData from "./helpers/gatherPostData";

import * as variables from "./styles/variables";

const HeroboxSection = styled.section`
  ${({ bgImgURL }) => css`
    background-image: linear-gradient(
        ${variables.colorPrimary800Op85},
        ${variables.colorPrimary800Op85}
      ),
      url(${bgImgURL});
    background-color: ${variables.colorNeutral900};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  `}
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing4};
  text-align: center;
  padding: ${variables.spacing48};
`;

const H1 = styled.h1`
  color: ${variables.colorPureWhite};
  ${variables.textHeading4};
  @media (min-width: ${variables.breakpoint600}) {
    padding: 10rem;
    ${variables.textHeading1Bold};
  }
`;

const Span = styled.span`
  color: ${variables.colorNeutral200};
  ${variables.textBody14};
`;

// *
// GENERAL STYLINGS TO EVERY POST
// *
const PostContentDiv = styled.div`
  & h1, h2, h3, h4, h5, h6 {
    font-family: trade-gothic-next-compressed, sans-serif;
    font-style: normal;
    color: ${variables.colorPureBlack};
  }
  & section {
    display: flex;
    flex-direction: column;
    gap: ${variables.spacing24};
    padding: ${variables.spacing16} ${variables.spacing12};
  } 
  & figure {
    max-width: 100%;
  }
  & img {
    max-width: 100%;
    border-radius: ${variables.spacing2};
    border: 1px solid ${variables.colorNeutral900};
  }
  & p {
    ${variables.textBody12};
    color: ${variables.colorNeutral900};
  }
  & ul, & ol {
    padding: ${variables.spacing4} ${variables.spacing16};
    ${variables.textBody12};
  }
  & blockquote {
    padding-left: ${variables.spacing12};
    margin: ${variables.spacing4} ${variables.spacing16};
    border-left: 3px solid ${variables.colorNeutral900};
  }
`;

const Post = ({ state, libraries }) => {
  // *
  // GRAB HTML2REACT COMPONENTS TO REGISTER PROCESSORS
  // *
  const Html2React = libraries.html2react.Component;

  // *
  // GATHER DATA ABOUT POST FROM FRONTITY
  // *
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  // *
  // GATHER WORDPRESS MEDIA
  // *
  const { data: media } = state.source.get("media");

  // *
  // COLLECT ALL INFO NEEDED INTO 1 PLACE
  // *
  const postData = gatherPostData(post, state, media);

  return (
    <>
      <HeroboxSection bgImgURL={postData.featuredMedia[0].guid.rendered}>
        <H1>{post.title.rendered}</H1>
        <Span>
          by {postData.author} |{" "}
          {postData.categories.map((categoryName, categoryIdx) => {
            if (postData.categories.length - 1 === categoryIdx) {
              return categoryName;
            } else {
              return `${categoryName}, `;
            }
          })}{" "}
          | {postData.date} |{" "}
          {postData.tags.map((tagName, tagIdx) => {
            if (postData.tags.length - 1 === tagIdx) {
              return tagName;
            } else {
              return `${tagName}, `;
            }
          })}
        </Span>
      </HeroboxSection>
      <Breadcrumbs
        postData={{ postTitle: postData.title, postLink: postData.link }}
      />
      <PostContentDiv>
        <Html2React html={post.content.rendered} />
      </PostContentDiv>
    </>
  );
};

export default connect(Post);
