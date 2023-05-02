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
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    padding: ${variables.spacing20} ${variables.spacing32};
    gap: ${variables.spacing24};
  }
  @media (min-width: ${variables.breakpoint1300}) {
    max-width: 30rem;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing2};
  text-align: center;
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    gap: ${variables.spacing4};
  }
`;

const FrontityLink = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

const H2 = styled.h2`
  color: ${variables.colorNeutral900};
  ${variables.textHeading6};
  text-decoration: none;
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    ${variables.textHeading3Bold};
  }
`;

const Span = styled.span`
  color: ${variables.colorNeutral700};
  ${variables.textBody12};
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    ${variables.textBody16};
  }
`;

const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing8};
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    gap: ${variables.spacing16};
  }
`;

const Figure = styled.figure`
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    max-width: 50%;
  }
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
  @media (min-width: ${variables.breakpoint600}) and (max-width: ${variables.breakpoint1300}) {
    ${variables.textBody16};
  }
`;

const Button = styled.button`
  color: ${variables.colorNeutral100};
  background-color: ${variables.colorAccent700};
  border: none;
  border-radius: ${variables.spacing2};
  ${variables.textBody14Bold};
  padding: ${variables.spacing4};
  cursor: pointer;
  @media (min-width: ${variables.breakpoint500}) {
    ${variables.textBody20Bold};
    padding: ${variables.spacing8} ${variables.spacing24};
  }
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
