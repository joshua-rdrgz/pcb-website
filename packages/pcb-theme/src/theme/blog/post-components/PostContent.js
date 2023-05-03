import { styled, css } from "frontity";
import generateCSS from "../helpers/generateCSS";
import * as variables from "../styles/variables";

// *
// CREATES COMPONENT WITH CORRECT STYLES,
// DIV IS REPLACED WITH CORRECT TAG AT RUNTIME
// *
const StyledComponent = styled.div`
  // *
  // SETTING UP DEFAULT STYLINGS FOR HIGHLIGHT SECTIONS
  // *
  ${(props) =>
    props.isHighlightedSection &&
    css`
      background-color: ${variables.colorPrimary700};
      color: ${variables.colorNeutral100} !important;
      ${props.as.startsWith("h") &&
      css`
        color: ${variables.colorPureWhite} !important;
      `}
      ${props.as === "img" &&
      css`
        border: 1px solid ${variables.colorNeutral500} !important;
      `}
      ${props.as === "blockquote" &&
      css`
        border-left: 3px solid ${variables.colorNeutral100} !important;
      `}
    `}
  // *
  // CUSTOM RULESETS FROM WORDPRESS
  // *
  ${({ cssRulesets }) =>
    css`
      ${cssRulesets}
    `}
`;

const PostContent = ({ content, isHighlightedSection, tag, classes }) => {
  const rulesets = generateCSS(classes);

  return (
    <StyledComponent
      as={tag}
      cssRulesets={rulesets ? rulesets : null}
      isHighlightedSection={isHighlightedSection}
    >
      {content.map((element, elementIdx) => {
        const {
          tag: elementTag,
          content: elementContent,
          classes: elementClasses,
        } = element;
        const isLeafElement = !Array.isArray(elementContent);
        const elementRulesets = generateCSS(elementClasses);

        // *
        // IS LEAF ELEMENT AND HAS NO CHILDREN
        // *
        if (isLeafElement) {
          // *
          // ELEMENT IS AN IMG
          // *
          if (elementTag === "img") {
            return (
              <StyledComponent
                key={`element-${elementTag}-${elementIdx}`}
                as={"img"}
                {...elementContent}
                cssRulesets={elementRulesets ? elementRulesets : null}
                isHighlightedSection={isHighlightedSection}
                width={null}
                height={null}
              />
            );
          }

          // *
          // ELEMENT IS ANYTING BUT AN IMG
          // *
          return (
            <StyledComponent
              key={`element-${elementTag}-${elementIdx}`}
              as={elementTag}
              cssRulesets={elementRulesets ? elementRulesets : null}
              isHighlightedSection={isHighlightedSection}
            >
              {elementContent}
            </StyledComponent>
          );
        }

        // *
        // IS NOT LEAF ELEMENT AND HAS CHILDREN
        // *
        return (
          <PostContent
            key={`element-${elementTag}-${elementIdx}`}
            content={elementContent}
            isHighlightedSection={isHighlightedSection}
            tag={elementTag}
            classes={elementClasses}
          />
        );
      })}
    </StyledComponent>
  );
};

export default PostContent;
