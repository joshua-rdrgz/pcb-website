import React from "react";
import { styled, connect } from "frontity";
import Link from "@frontity/components/link";

import bestOfFtWorth from "../../../assets/best-of-ft-worth.svg";
import ceramicPro from "../../../assets/ceramic-pro.svg";
import suntek from "../../../assets/suntek.png";
import reaction from "../../../assets/reaction-logo.png";
import evolve from "../../../assets/evolve-logo.png";

import * as Variables from "../../../styles/Variables";
import * as Mixins from "../../../styles/Mixins";

const Brand = styled.li`
  ${Mixins.liCleanUp};
`;

const SunTek = styled.img`
  width: 10rem;
  @media (max-width: ${Variables.queryLG}) {
    width: 8rem;
  }
`;

const Reaction = styled.img`
  width: 35rem;
  @media (max-width: ${Variables.queryLG}) {
    width: 20rem;
  }
`;

const BestOfFtWorth = styled.img`
  @media (max-width: ${Variables.queryLG}) {
    width: 25rem;
  }
`;

const Evolve = styled.img`
  width: 25rem;
  @media (max-width: ${Variables.queryLG}) {
    width: 15rem;
  }
`;

const CeramicPro = styled.img`
  @media (max-width: ${Variables.queryLG}) {
    width: 25rem;
  }
`;

const repBrands = [
  {
    name: "SunTek Logo",
    link: "https://suntekfilms.com/suntek-paint-protection",
    tag: SunTek,
    included: ["home", "about", "ppf", "wt"],
    img: {
      src: suntek,
      alt: "SunTek Certified Dealer",
    },
  },
  {
    name: "SunTek Reaction Logo",
    link: "https://suntekfilms.com/paintprotection/ppf-reaction",
    tag: Reaction,
    included: ["home", "about", "ppf"],
    img: {
      src: reaction,
      alt: "SunTek Reaction Official Logo",
    },
  },
  {
    name: "SunTek Evolve Logo",
    link: "https://suntekfilms.com/automotive/evolve",
    tag: Evolve,
    included: ["home", "about", "wt"],
    img: {
      src: evolve,
      alt: "SunTek Evolve Official Logo",
    },
  },
  {
    name: "Ceramic Pro",
    link: "https://ceramicpro.com/",
    tag: CeramicPro,
    included: ["home", "about", "ppf"],
    img: {
      src: ceramicPro,
      alt: "Ceramic Pro Official Logo",
    },
  },
  {
    name: "Best of Fort Worth by Preferred Mechanic",
    link: "https://preferredmechanic.com/report/window-tinting-places/near_fort-worth-tarrant-county,tx/",
    tag: BestOfFtWorth,
    included: ["home", "about", "ppf", "wt"],
    img: {
      src: bestOfFtWorth,
      alt: "Performance Clear Bra rated #1 of Automotive Tinting Companies in Fort Worth, Texas",
    },
  },
];

const RepBrands = ({ page }) => {
  const filteredBrands = repBrands.filter((logo) =>
    logo.included.includes(page)
  );
  return filteredBrands.map((brand) => {
    return (
      <Brand key={brand.name}>
        <Link link={brand.link} target="_blank">
          <brand.tag src={brand.img.src} alt={brand.img.alt} />
        </Link>
      </Brand>
    );
  });
};

export default connect(RepBrands);
