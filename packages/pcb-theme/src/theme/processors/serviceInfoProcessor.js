import React from "react";

import TabbedServiceInfo from "./components/tabbedserviceinfo/TabbedServiceInfo";

const tabbedServiceInfoProcessor = {
  name: "Tabbed Service Information",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes(
      "wp-block-group" && "tabbed-service-data"
    );
  },
  processor: ({ node }) => {
    const shortHand = node?.children[0]?.children;

    // HTML anchor for Herobox to target
    const anchorHTML = node.props.id;

    // section header, always will be first
    const sectionHeader = shortHand[0]?.children[0]?.content;

    // button tabs, controls what is shown to user
    const typeButtons = shortHand[1]?.children.map((_, i) => {
      return shortHand[1]?.children[i].children[0].children[0].content;
    });

    // DATA

    // locations
    const locations =
      shortHand[2]?.children[0]?.children[0]?.children[0]?.children
        .slice(1)
        .map((location) => {
          return location.children[0].content;
        });

    // types
    const types = shortHand[3]?.children[0]?.children[0].children[0].children
      .slice(1)
      .map((type) => {
        return type.children[0].content;
      });

    // locations rows
    const rowsLocations = shortHand[2]?.children[0]?.children[1]?.children;
    // types rows
    const rowsTypes = shortHand[3]?.children[0]?.children[1]?.children;

    // prices
    const priceRows = rowsLocations.slice(0, types.length);
    const prices = priceRows.map((typePrices) => {
      return typePrices.children.slice(1).map((price) => {
        return price.children[0]?.content;
      });
    });


    // images
    const imageRow = rowsLocations.slice(typeButtons.length, typeButtons.length * 2);
    const images = imageRow.map((imageRowObj) => {
      return imageRowObj.children.slice(1).map((image) => {
        return image.children[0]?.props;
      });
    });

    // descriptions
    const descriptionsRows =
      rowsLocations.slice(typeButtons.length * 3).length > 0
        ? rowsLocations.slice(typeButtons.length * 3)
        : [rowsTypes[1]];
    const descriptions = descriptionsRows.map((descriptionRow) => {
      const descriptionTitle = descriptionRow.children[0].children[0].content;
      const descriptionContent = descriptionRow.children
        .slice(1)
        .map((description) => {
          return description.children[0]?.content;
        });
      return [descriptionTitle, descriptionContent];
    });

    // values
    const valuesRows = rowsLocations.slice(typeButtons.length * 2, typeButtons.length * 3);
    const values = valuesRows.map((valueRow) => {
      return valueRow.children.slice(1).map((value) => {
        const valueDescriptor = value.children[0]?.children[0]?.content;
        const valueSuffix = value.children[1]?.content;
        return [valueDescriptor, valueSuffix];
      })
    });

    // benefits
    const benefits = [];
    rowsTypes[0].children.slice(1).map((benefitRow) => {
      benefits.push(benefitRow.children[0].content);
    });

    // common benefits
    const commonBenefits = [];
    if (shortHand.slice(-2, -1)[0].component === "div") {
      const commonBenefitsData = shortHand
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
      values,
      benefits,
      commonBenefits,
    };

    // Button Content
    const buttonContent =
      shortHand?.at(-1)?.children[0]?.children[0]?.children[0].content;
    const buttonFontSize = shortHand?.at(-1)?.children[0]?.props?.css?.styles;
    const buttonLink = shortHand
      ?.at(-1)
      ?.children[0].children[0]?.props?.href?.split("/")
      .reverse()[1];

    return {
      component: TabbedServiceInfo,
      props: {
        anchorHTML,
        sectionHeader,
        typeButtons,
        data,
        buttonContent,
        buttonFontSize,
        buttonLink
      },
    };
  },
};

export default tabbedServiceInfoProcessor;
