const findPostTaxonomyChoices = (postTaxonomyChoiceIndices, frontityState) => {
  const postTaxonomyChoices = [];

  for (const postTaxonomyChoiceIdx of postTaxonomyChoiceIndices) {
    const name = frontityState[postTaxonomyChoiceIdx].name;
    postTaxonomyChoices.push(name);
  }

  return postTaxonomyChoices;
};

const performFilteringOfPosts = (
  filterBy,
  posts,
  frontityState,
  whatToFilter
) => {
  const filteredPosts = [];

  for (const post of posts) {
    const postData = frontityState[post.type][post.id];
    const postTaxonomyChoices = findPostTaxonomyChoices(
      filterBy === "category" ? postData.categories : postData.tags,
      filterBy === "category" ? frontityState.category : frontityState.tag
    );
    const doesHaveCorrectTaxonomyChoice =
      postTaxonomyChoices.filter((item) => item === whatToFilter).length !== 0;
    if (doesHaveCorrectTaxonomyChoice) filteredPosts.push(post);
  }

  return filteredPosts;
};

const filterPosts = (posts, filterState, frontityState) => {
  // *
  // NOTHING HAS BEEN SELECTED TO FILTER
  // *
  if (
    filterState.selectedCategory === "All" &&
    filterState.selectedTag === "All"
  ) {
    return posts;
  }

  // *
  // SOMETHING HAS BEEN SELECTED
  // *
  const filteredPosts = [];

  // *
  // FILTER BY CATEGORY, NOT TAG
  // *
  if (
    filterState.selectedCategory !== "All" &&
    filterState.selectedTag === "All"
  ) {
    const filteredPostsByCategory = performFilteringOfPosts(
      "category",
      posts,
      frontityState,
      filterState.selectedCategory
    );
    filteredPostsByCategory.forEach((post) => filteredPosts.push(post));
  }

  // *
  // FILTER BY TAG, NOT CATEGORY
  // *
  if (
    filterState.selectedCategory === "All" &&
    filterState.selectedTag !== "All"
  ) {
    const filteredPostsByTag = performFilteringOfPosts(
      "tag",
      posts,
      frontityState,
      filterState.selectedTag
    );
    filteredPostsByTag.forEach((post) => filteredPosts.push(post));
  }

  // *
  // FILTER BY BOTH CATEGORY AND TAG
  // *
  if (
    filterState.selectedCategory !== "All" &&
    filterState.selectedTag !== "All"
  ) {
    const filteredPostsByCategory = performFilteringOfPosts(
      "category",
      posts,
      frontityState,
      filterState.selectedCategory
    );
    const filteredPostsByCategoryAndTag = performFilteringOfPosts(
      "tag",
      filteredPostsByCategory,
      frontityState,
      filterState.selectedTag
    );
    filteredPostsByCategoryAndTag.forEach((post) => filteredPosts.push(post));
  }

  return filteredPosts;
};

export default filterPosts;
