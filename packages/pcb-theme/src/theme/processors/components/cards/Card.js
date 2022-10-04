import { useState } from "react";
import { styled } from "frontity";
import Link from "@frontity/components/link";
import CardContent from "./CardContent";

const Card = ({
  type,
  title,
  image,
  description,
  buttonContent,
  buttonLink,
}) => {
  if (buttonContent || buttonLink) {
    return (
      <CardLink link={buttonLink}>
        <CardContent
          type={type}
          title={title}
          image={image}
          description={description}
          hasButton={true}
          buttonContent={buttonContent}
        />
      </CardLink>
    );
  }

  return (
    <CardContent
      type={type}
      title={title}
      image={image}
      description={description}
      hasButton={false}
    />
  );
};

export default Card;

const CardLink = styled(Link)`
  &,
  &:active,
  &:visited {
    text-decoration: none;
  }
`;
