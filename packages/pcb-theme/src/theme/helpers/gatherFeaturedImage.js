const gatherFeaturedImage = (state, data) => {
  const media = state.source.get("media");
  const mediaID = state.source.page[data.id]?.featured_media;
  const [fMedia] = media.data.filter((media) => media.id === mediaID);
  const backgroundImage = fMedia?.guid.rendered;
  return backgroundImage;
};

export default gatherFeaturedImage;