import Link from "@frontity/components/link";

const PostPreview = ({ blogData }) => {
  return (
    <article>
      <h2>{blogData.title}</h2>
      <span>
        by {blogData.author} |{" "}
        {blogData.categories.map((categoryName, categoryIdx) => {
          if (blogData.categories.length - 1 === categoryIdx) {
            return categoryName;
          } else {
            return `${categoryName}, `;
          }
        })}{" "}
        | {blogData.date} |{" "}
        {blogData.tags.map((tagName, tagIdx) => {
          if (blogData.tags.length - 1 === tagIdx) {
            return tagName;
          } else {
            return `${tagName}, `;
          }
        })}
      </span>
      <figure>
        <img src={blogData.featuredMedia[0].guid.rendered} />
      </figure>
      <p>{blogData.excerpt}</p>
      <Link link={blogData.link}>
        <button>Read More</button>
      </Link>
    </article>
  );
};

export default PostPreview;
