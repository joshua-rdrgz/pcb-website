import { loadable } from "frontity";

const TabbedServiceInfo = loadable(() =>
  import("./components/tabbedserviceinfo/TabbedServiceInfo")
);

const tabbedServiceInfoProcessor = {
  name: "Tabbed Service Information",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes(
      "wp-block-group" && "tabbed-service-data"
    );
  },
  processor: ({ node }) => {
    const content = node?.children[0]?.children;

    // defines the instance as 'window-tint' or not
    const isWindowTint = node?.props?.className?.includes("wt");

    // HTML anchor for Herobox to target
    const anchorHTML = node.props.id;

    // section header, always will be first
    const sectionHeader = content[0]?.children[0]?.content;
    const sectionDescription = content[1]?.children[0]?.content;

    // button tabs, controls what is shown to user
    const typeButtons = content[2]?.children.map((_, i) => {
      return content[2]?.children[i].children[0].children[0].content;
    });

    // DATA

    // locations
    const locations =
      content[3]?.children[0]?.children[0]?.children[0]?.children
        .slice(1)
        .map((location) => {
          return location.children[0].content;
        });

    // types
    const types = content[2]?.children.map((type) => {
      return type.children[0].children[0].content;
    });

    // locations rows
    const rowsLocations = content[3]?.children[0]?.children[1]?.children;

    // prices
    const priceRows = rowsLocations.slice(0, types.length);
    const prices = priceRows.map((typePrices) => {
      return typePrices.children.slice(1).map((price) => {
        return price.children[0]?.content;
      });
    });

    // images
    const images = content[4].children[0].props;

    // descriptions
    const descriptionsRows = rowsLocations.slice(-2);
    const descriptions = descriptionsRows.map((descriptionRow) => {
      const descriptionTitle = descriptionRow.children[0].children[0].content;
      const descriptionContent = descriptionRow.children
        .slice(1)
        .map((description) => {
          return description.children[0]?.content;
        });
      return [descriptionTitle, descriptionContent];
    });

    // values - not supported on Window Tint page
    const determineValues = (isWindowTint) => {
      if (!isWindowTint) {
        const valuesRows = rowsLocations.slice(
          typeButtons.length,
          typeButtons.length * 2
        );
        const values = valuesRows.map((valueRow) => {
          return valueRow.children.slice(1).map((value) => {
            const valueDescriptor = value.children[0]?.children[0]?.content;
            const valueSuffix = value.children[1]?.content;
            return [valueDescriptor, valueSuffix];
          });
        });
        return values;
      }
      return null;
    };

    // benefits
    const benefits = [];
    content[5]?.children[0]?.children[1]?.children[0].children
      .slice(1)
      .map((benefitRow) => {
        benefits.push(benefitRow.children[0].content);
      });

    // common benefits
    const commonBenefits = [];
    if (content.slice(-2, -1)[0].component === "div") {
      const commonBenefitsData = content
        .slice(-2, -1)[0]
        .children[0].children.slice(1);
      commonBenefitsData.map((benefitObj) => {
        commonBenefits.push(benefitObj.children[0].content);
      });
    }

    // final data object sent to component
    const data = {
      locations,
      types,
      prices,
      images,
      descriptions,
      values: determineValues(isWindowTint),
      benefits,
      commonBenefits,
    };

    // Button Content
    const buttonContent =
      content?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonLink = content
      ?.at(-1)
      ?.children[0].children[0]?.props?.href?.split("/")
      .slice(3)
      .join("/");

    return {
      component: TabbedServiceInfo,
      props: {
        anchorHTML,
        isWindowTint,
        sectionHeader,
        sectionDescription,
        typeButtons,
        data,
        buttonContent,
        buttonLink,
      },
    };
  },
};

export default tabbedServiceInfoProcessor;
