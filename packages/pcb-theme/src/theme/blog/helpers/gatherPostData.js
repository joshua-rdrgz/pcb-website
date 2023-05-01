const gatherPostData = (post, state, media) => {
  const postData = {
    title: post.title.rendered,
    author: state.source.author[post.author].name,
    categories: post.categories.map((_, categoryIdx) => {
      return state.source.category[post.categories[categoryIdx]].name;
    }),
    date: new Date(post.date).toLocaleDateString("en-us", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
    tags: post.tags.map((_, tagIdx) => {
      return state.source.tag[post.tags[tagIdx]].name;
    }),
    featuredMedia: media.filter(
      (image) => image.id === post.featured_media
    ),
    excerpt: post.excerpt.rendered,
    id: post.id,
    link: post.link,
  };

  return postData;
};

export default gatherPostData;