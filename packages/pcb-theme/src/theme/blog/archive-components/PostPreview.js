import { styled } from "frontity";
import Link from "@frontity/components/link";
import * as variables from "../styles/variables";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing16};
  background-color: ${variables.colorNeutral100};
  padding: ${variables.spacing20} ${variables.spacing24};
  border-radius: ${variables.spacing4};
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing2};
  text-align: center;
`;

const FrontityLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

const H2 = styled.h2`
  color: ${variables.colorNeutral900};
  ${variables.textHeading6};
  text-decoration: none;
`;

const Span = styled.span`
  color: ${variables.colorNeutral700};
  ${variables.textBody12};
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing8};
`;

const Figure = styled.figure`
  max-width: 100%;
  margin: 0 auto;
`;

const Img = styled.img`
  max-width: 100%;
  border: 1px solid ${variables.colorNeutral900};
  border-radius: ${variables.spacing2};
`;

const Div = styled.div`
  color: ${variables.colorNeutral800};
  ${variables.textBody12};
  padding: 0 ${variables.spacing4};
`;

const Button = styled.button`
  color: ${variables.colorNeutral100};
  background-color: ${variables.colorAccent700};
  border: none;
  border-radius: ${variables.spacing2};
  ${variables.textBody14Bold};
  padding: ${variables.spacing4};
  cursor: pointer;
`;

const PostPreview = ({ blogData }) => {
  return (
    <Article>
      <TitleSection>
        <FrontityLink link={blogData.link}>
          <H2>{blogData.title}</H2>
        </FrontityLink>
        <Span>
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
        </Span>
      </TitleSection>
      <ContentSection>
        <Link link={blogData.link}>
          <Figure>
            <Img src={blogData.featuredMedia[0].guid.rendered} />
          </Figure>
        </Link>
        <Div dangerouslySetInnerHTML={{ __html: blogData.excerpt }} />
      </ContentSection>
      <FrontityLink link={blogData.link}>
        <Button>Read More</Button>
      </FrontityLink>
    </Article>
  );
};

export default PostPreview;
