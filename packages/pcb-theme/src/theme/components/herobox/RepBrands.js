import Link from "@frontity/components/link";
import { connect, css, styled } from "frontity";
import React from "react";

import ceramicPro from "../../assets/ceramic-pro.svg";
import evolve from "../../assets/evolve-logo.png";
import flexishield from "../../assets/flexishield.png";
import legendppf from "../../assets/legend-ppf.png";
import reaction from "../../assets/reaction-logo.png";
import suntek from "../../assets/suntek.png";

import * as Mixins from "../../styles/Mixins";
import * as Variables from "../../styles/Variables";

const RepBrandsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 2.5rem 2rem;
  background-color: ${Variables.colorGray1RGBA};
`;

const Brand = styled.li`
  ${Mixins.liCleanUp};
`;

const SunTek = styled.img`
  width: 10rem;
  @media (max-width: ${Variables.query1000}) {
    width: 8rem;
  }
`;

const Reaction = styled.img`
  width: 35rem;
  @media (max-width: ${Variables.query1000}) {
    width: 20rem;
  }
`;

const Evolve = styled.img`
  width: 25rem;
  @media (max-width: ${Variables.query1000}) {
    width: 15rem;
  }
`;

const CeramicPro = styled.img`
  @media (max-width: ${Variables.query1000}) {
    width: 25rem;
  }
`;

const LegendPPF = styled.img`
  width: 35rem;
  @media (max-width: ${Variables.query1000}) {
    width: 20rem;
  }
`;

const FlexishieldPPF = styled.img`
  width: 35rem;
  @media (max-width: ${Variables.query1000}) {
    width: 20rem;
  }
`;

const getPage = (link) => {
  let page;
  switch (link) {
    case "/":
      page = "home";
      break;
    case "/reviews/":
      page = "reviews";
      break;
    case "/paint-protection-film-clear-bra-fort-worth-tx/":
      page = "ppf";
      break;
    case "/window-tint-fort-worth-tx/":
      page = "wt";
      break;
  }
  return page;
};

const repBrands = [
  {
    name: "SunTek Logo",
    link: "https://suntekfilms.com/suntek-paint-protection",
    tag: SunTek,
    included: ["home", "reviews", "ppf", "wt"],
    img: {
      src: suntek,
      alt: "SunTek Certified Dealer",
    },
  },
  {
    name: "SunTek Reaction Logo",
    link: "https://suntekfilms.com/paintprotection/ppf-reaction",
    tag: Reaction,
    included: ["home", "reviews", "ppf"],
    img: {
      src: reaction,
      alt: "SunTek Reaction Official Logo",
    },
  },
  {
    name: "Legend PPF Logo",
    link: "https://legendppf.com/ppf-prime/",
    tag: LegendPPF,
    included: ["home", "ppf"],
    img: {
      src: legendppf,
      alt: "Legend PPF Official Logo",
    },
  },
  {
    name: "Flexishield PPF Logo",
    link: "https://www.flexishieldusa.com/products/color-paint-protection-film-ppf/",
    tag: FlexishieldPPF,
    included: ["home", "ppf"],
    img: {
      src: flexishield,
      alt: "Flexishield PPF Official Logo",
    },
  },
  {
    name: "SunTek Evolve Logo",
    link: "https://suntekfilms.com/automotive/evolve",
    tag: Evolve,
    included: ["home", "reviews", "wt"],
    img: {
      src: evolve,
      alt: "SunTek Evolve Official Logo",
    },
  },
  {
    name: "Ceramic Pro",
    link: "https://ceramicpro.com/",
    tag: CeramicPro,
    included: ["home", "reviews", "ppf"],
    img: {
      src: ceramicPro,
      alt: "Ceramic Pro Official Logo",
    },
  },
  {
    name: "BBB Accredited Business",
    link: "https://www.bbb.org/us/tx/fort-worth/profile/car-window-tinting/performance-clear-bra-0825-1000215058/#sealclick",
    tag: "img",
    included: ["home", "reviews", "ppf", "wt"],
    img: {
      src: "https://seal-austin.bbb.org/seals/darkgray-seal-280-80-bbb-1000215058.png",
      alt: "Performance Clear Bra BBB Business Review",
    },
  },
];

const RepBrands = ({ state }) => {
  const page = getPage(state.router.link);
  const filteredBrands = repBrands.filter((logo) =>
    logo.included.includes(page)
  );
  return (
    <RepBrandsContainer>
      {filteredBrands.map((brand) => {
        return (
          <Brand key={brand.name}>
            <Link link={brand.link} target="_blank">
              <brand.tag src={brand.img.src} alt={brand.img.alt} />
            </Link>
          </Brand>
        );
      })}
    </RepBrandsContainer>
  );
};

export default connect(RepBrands);
