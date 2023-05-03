import { connect, styled, css } from "frontity";
import Breadcrumbs from "./post-components/Breadcrumbs";

import gatherPostData from "./helpers/gatherPostData";
import generatePosts from "./helpers/generatePosts";
import filterPosts from "./helpers/filterPosts";

import * as variables from "./styles/variables";
import generalPostStyles from "./styles/generalPostStyles";

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
  @media (min-width: ${variables.breakpoint600}) {
    padding: 10rem;
  }
  @media (min-width: ${variables.breakpoint950}) {
    padding: 15rem;
  }
  @media (min-width: ${variables.breakpoint1300}) {
    padding: 20rem;
  }
`;

const H1 = styled.h1`
  color: ${variables.colorPureWhite};
  ${variables.textHeading4};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textHeading1Bold};
  }
`;

const Span = styled.span`
  color: ${variables.colorNeutral200};
  ${variables.textBody14};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textBody16};
  }
  @media (min-width: ${variables.breakpoint950}) {
    ${variables.textBody18};
  }
  @media (min-width: ${variables.breakpoint1300}) {
    ${variables.textBody20};
  }
`;

const PostContentDiv = styled.div`
  @media (min-width: ${variables.breakpoint1300}) {
    display: flex;
  }
`;

const MainContentSection = styled.section`
  ${generalPostStyles};
  @media (min-width: ${variables.breakpoint1300}) {
    flex-grow: 1;
  }
`;

const Aside = styled.aside`
  display: none;
  @media (min-width: ${variables.breakpoint1300}) {
    width: 350rem;
    display: flex;
    flex-direction: column;
    gap: ${variables.spacing32};
    background-color: ${variables.colorNeutral500};
  }
`;

const AsideSpan = styled.span`
  text-align: center;
  padding-top: ${variables.spacing24};
  color: ${variables.colorNeutral700};
  ${variables.textHeading4};
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

  const posts = state.source.get("posts").posts;

  // *
  // GATHER WORDPRESS MEDIA
  // *
  const { data: media } = state.source.get("media");

  // *
  // COLLECT ALL INFO NEEDED INTO 1 PLACE
  // *
  const postData = gatherPostData(post, state, media);
  const relatedPosts = filterPosts(
    posts,
    { selectedCategory: "All", selectedTag: postData.tags[0] },
    state.source
  );

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
      <PostContentDiv>
        <MainContentSection>
          <Breadcrumbs
            postData={{ postTitle: postData.title, postLink: postData.link }}
          />
          <Html2React html={post.content.rendered} />
        </MainContentSection>
        <Aside>
          <AsideSpan>See More Like This Post</AsideSpan>
          {generatePosts("related", relatedPosts, state, media)}
        </Aside>
      </PostContentDiv>
    </>
  );
};

export default connect(Post);
