import { styled } from "frontity";
import Link from "@frontity/components/link";
import * as variables from "../styles/variables";

const Div = styled.div`
  text-align: center;
  color: ${variables.colorNeutral600};
  display: flex;
  justify-content: center;
  padding: ${variables.spacing8} 0;
  ${variables.textBody12};
  @media (min-width: ${variables.breakpoint600}) {
    padding: ${variables.spacing12} 0;
    ${variables.textBody16Bold}
  }
`;

const Span = styled.span`
  background-color: ${variables.colorNeutral300};
  padding: ${variables.spacing4} ${variables.spacing8};
  border-radius: ${variables.spacing2};
`;

const FrontityLink = styled(Link)`
  text-decoration: none;
  color: ${variables.colorNeutral600};
  cursor: pointer;
`;

const HighlightedFrontityLink = styled(Link)`
  text-decoration: none;
  color: ${variables.colorNeutral900};
  cursor: pointer;
`;

const Breadcrumbs = ({ postData }) => {
  const { postLink, postTitle } = postData;
  return (
    <Div>
      <Span>
        <FrontityLink link="/">Home</FrontityLink> /{"   "}
        <FrontityLink link="/blog">Blog</FrontityLink> /{"   "}
        <HighlightedFrontityLink link={postLink}>
          {postTitle}
        </HighlightedFrontityLink>
      </Span>
    </Div>
  );
};

export default Breadcrumbs;
