import { styled } from "frontity";
import * as variables from "../styles/variables";
import dropdown from "../assets/dropdown.svg";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing16};
  padding: ${variables.spacing20};
  background-color: ${variables.colorNeutral600};
  @media (min-width: ${variables.breakpoint600}) {
    flex-direction: row;
  }
`;

const FormFieldDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing2};
  @media (min-width: ${variables.breakpoint600}) {
    flex-grow: 1;
  }
`;

const Label = styled.label`
  color: ${variables.colorNeutral100};
  ${variables.textBody12};
  padding: 0 ${variables.spacing4};
`;

const Select = styled.select`
  padding: ${variables.spacing8};
  ${variables.textBody12Bold};
  border-radius: ${variables.spacing4};
  border: none;
  appearance: none;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  background-size: ${variables.spacing24};
  background-position: right;
  cursor: pointer;
  &:focus {
    outline-color: ${variables.colorPrimary700};
  }
`;

const Option = styled.option`
  ${variables.textBody12};
  @media (min-width: ${variables.breakpoint600}) {
    ${variables.textBody14};
  }
`;

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
    <Form>
      <FormFieldDiv>
        <Label htmlFor="category">Type of Blog Post</Label>
        <Select
          name="category"
          id="category"
          onChange={(e) => onChangeHandler(e, "category")}
        >
          <Option value="All">All</Option>
          <Option value="Article">Article</Option>
          <Option value="News">News</Option>
          <Option value="Case Study">Case Study</Option>
        </Select>
      </FormFieldDiv>
      <FormFieldDiv>
        <Label htmlFor="tag">Type of Service</Label>
        <Select name="tag" id="tag" onChange={(e) => onChangeHandler(e, "tag")}>
          <Option value="All">All</Option>
          <Option value="Paint Protection Film">Paint Protection Film</Option>
          <Option value="Window Tint">Window Tint</Option>
          <Option value="Ceramic Coating">Ceramic Coating</Option>
        </Select>
      </FormFieldDiv>
    </Form>
  );
};

export default Filter;
