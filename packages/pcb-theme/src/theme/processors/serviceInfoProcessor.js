import React from "react";

import TabbedServiceInfo from "./components/TabbedServiceInfo";

const tabbedServiceInfoProcessor = {
  name: "Tabbed Service Information",
  priority: 5,
  test: ({ node }) => {
    return node?.props?.className?.includes(
      "wp-block-group" && "tabbed-service-data"
    );
  },
  processor: ({ node, state }) => {
    const shortHand = node?.children[0]?.children;

    // section header, always will be first
    const sectionHeader = shortHand[0]?.children[0]?.content;

    // button tabs, controls what is shown to user
    const tabButtons = shortHand[1]?.children.map((_, i) => {
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
    const pricesData = priceRows.map(typePrices => {
      return typePrices.children.slice(1).map((price) => {
        return price.children[0].content;
      })
    })
    const prices = {};
    types.forEach((type, index) => {
      prices[type] = {};
      locations.forEach((location, i) => {
        prices[type][location] = pricesData[index][i]
      })
    })

    // images
    const imageRow = rowsLocations.slice(types.length, types.length + 1);
    const [imageData] = imageRow.map((imageRowObj) => {
      return imageRowObj.children.slice(1).map((image) => {
        return image.children[0].props;
      })
    })
    const images = {};
    locations.forEach((location, i) => {
      images[location] = imageData[i]
    })

    // descriptions
    const descriptionsRows = rowsLocations.slice(types.length + 1).length > 0 ? rowsLocations.slice(types.length + 1) : [rowsTypes[2]];
    const [descriptions] =
      descriptionsRows.map((descriptionRow) => {
        const descriptionTitle = descriptionRow.children[0].children[0].content;
        const descriptionContent = descriptionRow.children
          .slice(1)
          .map((description) => {
            return description.children[0].content;
          });
        const returned = {};
        locations.forEach((location, i) => {
          if(descriptionTitle.includes('*')) {
            returned[location] = {
            title: descriptionTitle,
            content: descriptionContent[i],
            }
          } else {
            returned[location] = {
              content: descriptionContent[i],
            }
          }
        });
        return returned;
      });

    // values
    const valuesArr = [];
    const values = {};
    rowsTypes[0].children.slice(1).map((valueRow) => {
      valuesArr.push(valueRow.children[0].content)
    });
    types.forEach((type, i) => {
      values[type] = valuesArr[i]
    })

    // benefits
    const benefitsArr = [];
    const benefits = {};
    rowsTypes[1].children.slice(1).map(benefitRow => {
      benefitsArr.push(benefitRow.children[0].content)
    })
    types.forEach((type, i) => {
      benefits[type] = benefitsArr[i]
    })

    // common benefits
    const commonBenefits = [];
    if (shortHand.slice(-2, -1)[0].component === 'div') {
      const commonBenefitsData = shortHand.slice(-2, -1)[0].children[0].children.slice(1);
      commonBenefitsData.map((benefitObj) => {
        commonBenefits.push(benefitObj.children[0].content);   
      })
    }

    // final data object sent to component
    const data = {
      prices,
      images,
      descriptions,
      values,
      benefits,
      commonBenefits
    }

    return {
      component: TabbedServiceInfo,
      props: {
        state,
        sectionHeader,
        tabButtons,
        data
      },
    };
  },
};

export default tabbedServiceInfoProcessor;
