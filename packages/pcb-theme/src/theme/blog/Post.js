import { connect } from "frontity";
import Breadcrumbs from "./post-components/Breadcrumbs";

import gatherPostData from "./helpers/gatherPostData";

const Post = ({ state }) => {
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
      <Breadcrumbs
        postData={{ postTitle: postData.title, postLink: postData.link }}
      />
      <h1>{post.title.rendered}</h1>
      <span>
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
      </span>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
};

export default connect(Post);
