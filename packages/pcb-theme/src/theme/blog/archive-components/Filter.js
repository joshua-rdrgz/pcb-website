const Filter = ({ filterState }) => {
  const { setSelectedCategory } = filterState.category;
  const { setSelectedTag } = filterState.tag;

  const onChangeHandler = (e, type) => {
    switch (type) {
      case "category":
        setSelectedCategory(e.target.value);
        break;
      case "tag":
        setSelectedTag(e.target.value);
        break;
      default:
        throw new Error('Only select "category" or "tag"!');
    }
  };

  return (
    <form>
      <label htmlFor="category">Type of Article</label>
      <select
        name="category"
        id="category"
        onChange={(e) => onChangeHandler(e, "category")}
      >
        <option value="All">All</option>
        <option value="Article">Article</option>
        <option value="News">News</option>
        <option value="Case Study">Case Study</option>
      </select>
      <br />
      <label htmlFor="tag">Type of Service</label>
      <select name="tag" id="tag" onChange={(e) => onChangeHandler(e, "tag")}>
        <option value="All">All</option>
        <option value="Paint Protection Film">Paint Protection Film</option>
        <option value="Window Tint">Window Tint</option>
        <option value="Ceramic Coating">Ceramic Coating</option>
      </select>
    </form>
  );
};

export default Filter;
