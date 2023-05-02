import { useState } from "react";
import { connect, styled } from "frontity";

import Filter from "./archive-components/Filter";
import PostPreview from "./archive-components/PostPreview";

import filterPosts from "./helpers/filterPosts";
import gatherPostData from "./helpers/gatherPostData";

import * as variables from "./styles/variables";

const HeroboxSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${variables.colorPureBlack};
`;

const H1 = styled.h1`
  color: ${variables.colorNeutral100};
  ${variables.textHeading4Bold};
  padding: ${variables.spacing48};
  @media (min-width: ${variables.breakpoint600}) {
    padding: 10rem;
    ${variables.textHeading1Bold};
  }
`;

const SearchResultsSection = styled.section`
  background-color: ${variables.colorNeutral900};
`;

const SearchParamsSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: ${variables.spacing8};
  color: ${variables.colorNeutral500};
  padding: ${variables.spacing20};
  border-bottom: 1px solid ${variables.colorNeutral700};
`;

const SearchParamsHeaderP = styled.p`
  ${variables.textBody12};
`;

const SearchParamsBodyP = styled.p`
  ${variables.textBody16};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textBody18};
  }
`;

const Span = styled.span`
  color: ${variables.colorNeutral300};
`;

const H2 = styled.h2`
  text-align: center;
  color: ${variables.colorNeutral100};
  ${variables.textHeading6Bold};
  padding: ${variables.spacing16};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textHeading3Bold};
  }
`;

const SearchResultsContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing12};
  padding: ${variables.spacing32} ${variables.spacing12};
  @media (min-width: ${variables.breakpoint600}) {
    gap: ${variables.spacing32};
    padding: ${variables.spacing32} ${variables.spacing28};
  }
`;

const Archive = ({ state }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTag, setSelectedTag] = useState("All");

  // *
  // GRAB FRONTITY DATA FOR ALL WORDPRESS POSTS AND MEDIA
  // *
  const data = state.source.get(state.router.link);
  const { data: media } = state.source.get("media");

  // *
  // FILTER POSTS BASED ON CATEGORIES AND TAGS
  // *
  const filteredPosts = filterPosts(
    data.items,
    { selectedCategory, selectedTag },
    state.source
  );

  return (
    <>
      <HeroboxSection>
        <H1>Blog</H1>
      </HeroboxSection>
      <Filter
        filterState={{
          category: { setSelectedCategory },
          tag: { setSelectedTag },
        }}
      />
      <SearchResultsSection>
        <SearchParamsSection>
          <SearchParamsHeaderP>Results shown for:</SearchParamsHeaderP>
          <div>
            <SearchParamsBodyP>
              Type of Blog Post: <Span>{selectedCategory}</Span>
            </SearchParamsBodyP>
            <SearchParamsBodyP>
              Type of Service: <Span>{selectedTag}</Span>
            </SearchParamsBodyP>
          </div>
        </SearchParamsSection>
        <SearchResultsContentSection>
          {filteredPosts.length === 0 && (
            <H2>
              No posts matched the filter results. Please filter for something
              else!
            </H2>
          )}
          {filteredPosts.map((item) => {
            // *
            // GRAB POST DATA
            // *
            const post = state.source[item.type][item.id];
            // *
            // GATHER PREVIEW DATA
            // *
            const postPreviewData = gatherPostData(post, state, media);
            // *
            // RENDER POST PREVIEW
            // *
            return <PostPreview key={item.id} blogData={postPreviewData} />;
          })}
        </SearchResultsContentSection>
      </SearchResultsSection>
    </>
  );
};

export default connect(Archive);
