import App from "./theme/App";
import link from "@frontity/html2react/processors/link";
import iframe from "@frontity/html2react/processors/iframe";
import menuHandler from "./theme/handlers/menu-handler";
import mediaHandler from "./theme/handlers/media-handler";

import heroboxProcessor from "./theme/processors/heroboxProcessor";
import cardsProcessor from "./theme/processors/cardsProcessor";
import galleryTabProcessor from "./theme/processors/galleryTabProcessor";
import testimonialProcessor from "./theme/processors/testimonialProcessor";
import pageBreakProcessor from "./theme/processors/pageBreakProcessor";
import aboutUsTabProcessor from "./theme/processors/aboutUsTabProcessor";
import faqProcessor from "./theme/processors/faqProcessor";
import videoProcessor from "./theme/processors/videoProcessor";
import tabbedServiceInfoProcessor from "./theme/processors/serviceInfoProcessor";
import contactProcessor from "./theme/processors/contactProcessor";
import thankYouProcessor from "./theme/processors/thankYouProcessor";
import postSectionProcessor from "./theme/blog/processors/postSectionProcessor";
import postHandler from "./theme/handlers/post-handler";

export default {
  name: "pcb-theme",
  roots: {
    theme: App,
  },
  state: {
    theme: {
      gallery: {
        galleryPos: 4,
      },
      header: {
        scrollPos: 0,
        topBarHeight: 0,
        headerHeight: 0,
        menuActiveTabs: [],
      },
      herobox: {
        activeRepBrands: "",
      },
      testimonials: {
        isExcerpt: [],
        viewportWidth: 0,
      },
      faq: {
        FAQToggleData: [[], []],
      },
      tabbedServiceInfo: {
        currentPageData: {},
        typeButtons: [],
        locationButtons: [],
      },

      headerMenuID: 3,
      footerPagesID: 4,
      footerResourcesID: 5,
    },
  },
  actions: {
    theme: {
      header: {
        initActiveTabs:
          ({ state }) =>
          (menu) => {
            const menuActiveData = [];
            menu.forEach((_) => {
              menuActiveData.push(false);
            });
            state.theme.header.menuActiveTabs.push(menuActiveData);
          },
        setActiveTab:
          ({ state }) =>
          (menus, currentMenuIndex) => {
            const settingActiveTab = (menuLocation) => {
              for (const [i, menuItem] of menus.entries()) {
                // turn every value false
                if (
                  state.theme.header.menuActiveTabs[menuLocation][i] === true
                ) {
                  state.theme.header.menuActiveTabs[menuLocation][i] = false;
                }
                // set correct value true
                if (
                  `/${menuItem?.url.split("/").at(-2)}/` === state.router.link
                ) {
                  if (menuItem.parent !== 0) {
                    const parentFilter = menus.filter(
                      (menuItem) => menuItem.acf.parent === "yes"
                    );
                    const parentID =
                      parentFilter.length === 1
                        ? parentFilter[0].id
                        : parentFilter.find(
                            (parentItem) => parentItem.id === menuItem.parent
                          ).id;
                    const parentPos = menus.findIndex(
                      (menuItem) => menuItem.id === parentID
                    );
                    state.theme.header.menuActiveTabs[menuLocation][i] = true;
                    state.theme.header.menuActiveTabs[menuLocation][
                      parentPos
                    ] = true;
                  }
                  state.theme.header.menuActiveTabs[menuLocation][i] = true;
                }
              }
            };
            settingActiveTab(currentMenuIndex);
          },
      },
      herobox: {
        setActiveRepBrands:
          ({ state }) =>
          (page) => {
            state.theme.herobox.activeRepBrands = page;
          },
      },
      testimonials: {
        initTestimonials:
          ({ state }) =>
          (testimonial) => {
            state.theme.testimonials.isExcerpt.push(testimonial);
          },
        openTestimonial:
          ({ state }) =>
          (index) => {
            state.theme.testimonials.isExcerpt[index] = false;
          },
        setViewportWidth:
          ({ state }) =>
          (outerWidth) => {
            state.theme.testimonials.viewportWidth = outerWidth;
          },
      },
      faq: {
        addFAQToggleData:
          ({ state }) =>
          (data, index = 0) => {
            state.theme.faq.FAQToggleData[index] = [
              ...state.theme.faq.FAQToggleData[index],
              data,
            ];
          },
        setFAQToggleData:
          ({ state }) =>
          (faqsBlockIndex, faqIndex) => {
            state.theme.faq.FAQToggleData[faqsBlockIndex].map((faq) => {
              if (faq.index === faqIndex) {
                faq.open = !faq.open;
              }
            });
          },
      },
      tabbedServiceInfo: {
        setCurrentPageData:
          ({ state }) =>
          (data) => {
            state.theme.tabbedServiceInfo.currentPageData = data;
          },
        setButtons:
          ({ state }) =>
          (page, data) => {
            state.theme.tabbedServiceInfo[page] = data;
          },
        setActiveTab:
          ({ state }) =>
          (page, index) => {
            state.theme.tabbedServiceInfo[page].map((_, i) => {
              if (i === index) {
                state.theme.tabbedServiceInfo[page][i] = true;
              } else {
                state.theme.tabbedServiceInfo[page][i] = false;
              }
            });
          },
      },
    },
  },
  libraries: {
    html2react: {
      processors: [
        link,
        iframe,
        pageBreakProcessor,
        heroboxProcessor,
        cardsProcessor,
        galleryTabProcessor,
        testimonialProcessor,
        aboutUsTabProcessor,
        faqProcessor,
        videoProcessor,
        tabbedServiceInfoProcessor,
        contactProcessor,
        thankYouProcessor,
        postSectionProcessor,
      ],
    },
    source: {
      handlers: [menuHandler, mediaHandler, postHandler],
    },
  },
};
