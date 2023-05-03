const filterForCustomCSSClasses = (classes) => {
  if (classes) {
    const customClasses = classes
      .split(" ")
      .filter((cssClass) => cssClass.startsWith("!C"));

    return customClasses.length > 0
      ? // *
        // SLICE REMOVES "!C" FROM RULESET
        // *
        customClasses.map((customClass) => customClass.slice(2))
      : null;
  }
  return null;
};

const generateCSS = (classes) => {
  const customClasses = filterForCustomCSSClasses(classes);
  return customClasses
    ?.map((customClass) => {
      const [property, value] = customClass.split("&");
      return `${property}: ${value};`;
    })
    .join(" ");
};

export default generateCSS;