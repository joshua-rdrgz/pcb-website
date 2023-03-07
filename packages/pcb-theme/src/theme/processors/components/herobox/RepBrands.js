import React from "react";
import { styled, connect, css } from "frontity";
import Link from "@frontity/components/link";

import bestOfFtWorth from "../../../assets/best-of-ft-worth.svg";
import ceramicPro from "../../../assets/ceramic-pro.svg";
import suntek from "../../../assets/suntek.png";
import reaction from "../../../assets/reaction-logo.png";
import evolve from "../../../assets/evolve-logo.png";

import * as Variables from "../../../styles/Variables";
import * as Mixins from "../../../styles/Mixins";

const RepBrandsContainer = styled.ul`
  ${(props) => css`
    ${props.activeHeights};
  `}
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 2.5rem 2rem;
  background-color: ${Variables.colorGray1RGBA};
  @media (max-width: ${Variables.queryXLG}) {
  }
`;

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

const getRepBrandsData = (link) => {
  let page;
  let heightOfRepBrands; // this variable defines the Rep Brand's container's height to minimize layout shift on load.
  switch (link) {
    case "/":
      page = "home";
      heightOfRepBrands = `
        height: 155px;
        @media (max-width: 1381px) {
          height: 270px;
        }
        @media (max-width: 1000px) {
          height: 250px;
        }
        @media (max-width: 579px) {
          height: 312px;
        }
        @media (max-width: 489px) {
          height: 325px;
        }
        @media (max-width: 449px) {
          height: 390px;
        }
        @media (max-width: 329px) {
          height: 440px;
        }
      `;
      break;
    case "/about/":
      page = "about";
      heightOfRepBrands = css`
        height: 155px;
        @media (max-width: 1381px) {
          height: 270px;
        }
        @media (max-width: 1000px) {
          height: 250px;
        }
        @media (max-width: 579px) {
          height: 312px;
        }
        @media (max-width: 489px) {
          height: 325px;
        }
        @media (max-width: 449px) {
          height: 390px;
        }
        @media (max-width: 329px) {
          height: 440px;
        }
      `;
      break;
    case "/paint-protection-film/":
      page = "ppf";
      heightOfRepBrands = css`
        height: 157px;
        @media (max-width: 1121px) {
          height: 272px;
        }
        @media (max-width: 1000px) {
          height: 155px;
        }
        @media (max-width: 879px) {
          height: 250px;
        }
        @media (max-width: 579px) {
          height: 312px;
        }
        @media (max-width: 329px) {
          height: 365px;
        }
      `
      break;
    case "/window-tint/":
      page = "wt";
      heightOfRepBrands = css`
        height: 155px;
        @media (max-width: 569px) {
          height: 250px;
        }
      `;
      break;
  }
  return { page, heightOfRepBrands };
};


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
    name: "BBB Accredited Business",
    link: "https://www.bbb.org/us/tx/fort-worth/profile/car-window-tinting/performance-clear-bra-0825-1000215058/#sealclick",
    tag: 'img',
    included: ["home", "about", "ppf", "wt"],
    img: {
      src: "https://seal-austin.bbb.org/seals/darkgray-seal-280-80-bbb-1000215058.png",
      alt: "Performance Clear Bra BBB Business Review",
    }
  }
];

const RepBrands = ({ state }) => {
  const repBrandsData = getRepBrandsData(state.router.link);
  const filteredBrands = repBrands.filter((logo) =>
    logo.included.includes(repBrandsData.page)
  );
  return (
    <RepBrandsContainer activeHeights={repBrandsData.heightOfRepBrands}>
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
