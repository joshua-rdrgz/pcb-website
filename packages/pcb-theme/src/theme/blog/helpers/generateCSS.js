const filterForCustomCSSClasses = (classes) => {
  if (classes) {
    const classesArray = classes.split(" ");

    // *
    // FIND RELEVANT CSS CLASSES ===> 
    // !C (Custom Rule), 
    // !F (Flex), 
    // !M#### (Media Query Custom Rule)
    // *
    const generalRulesets = classesArray.filter((cssClass) =>
      cssClass.startsWith("!C")
    );
    const isFlexClass = classesArray.some((rule) => rule === "!F");
    const customMediaQueryRulesets = classesArray.filter((cssClass) =>
      cssClass.startsWith("!M")
    );

    // *
    // SLICE REMOVES "!C" or "!M" FROM RULESET
    // *
    return {
      generalRulesets: generalRulesets?.map((rule) => rule.slice(2)),
      mediaQueryRulesets: customMediaQueryRulesets?.map((rule) =>
        rule.slice(2)
      ),
      isFlexClass,
    };
  }
  return null;
};

const generateCSS = (classes) => {
  const filteredClasses = filterForCustomCSSClasses(classes);

  if (filteredClasses) {
    const { generalRulesets, mediaQueryRulesets, isFlexClass } =
      filteredClasses;

    // *
    // GENERATE PROPER CSS FROM CLASSES
    // *
    const generalRules = generalRulesets?.map((customClass) => {
      const [property, value] = customClass.split("&");
      return `${property}: ${value};`;
    });

    const mediaQueryRules = mediaQueryRulesets?.map((mediaQueryRuleset) => {
      const [breakpoint, property, value] = mediaQueryRuleset.split("&");
      return `@media (min-width: ${
        +breakpoint / 16
      }em) {${property}: ${value};}`;
    });

    const flexRules = `display: flex; flex-direction: column;`;

    const rulesets = generalRules.concat(mediaQueryRules);

    // *
    // RETURN CSS
    // *
    if (isFlexClass) {
      rulesets.push(flexRules);
      return rulesets.join(" ");
    }

    return rulesets.join(" ");
  }

  return null;
};

export default generateCSS;
