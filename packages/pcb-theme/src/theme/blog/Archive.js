import { useState } from "react";
import { connect } from "frontity";

import Filter from "./archive-components/Filter";
import PostPreview from "./archive-components/PostPreview";

import filterPosts from "./helpers/filterPosts";
import gatherPostData from "./helpers/gatherPostData";

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
      <Filter
        filterState={{
          category: { setSelectedCategory },
          tag: { setSelectedTag },
        }}
      />
      <section>
        <div>Results shown for:</div>
        <div>Type of Blog Post: {selectedCategory}</div>
        <div>Type of Service: {selectedTag}</div>
        {filteredPosts.length === 0 && (
          <h2>
            No posts matched the filter results. Please filter for something
            else!
          </h2>
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
      </section>
    </>
  );
};

export default connect(Archive);
