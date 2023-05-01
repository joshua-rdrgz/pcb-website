import React from "react";
import Link from "@frontity/components/link";

const Breadcrumbs = ({ postData }) => {
  const { postLink, postTitle } = postData;
  return (
    <div>
      <Link link="/">Home</Link> / <Link link="/blog">Blog</Link> /{" "}
      <Link link={postLink}>{postTitle}</Link>
    </div>
  );
};

export default Breadcrumbs;
