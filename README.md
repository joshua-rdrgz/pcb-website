# Performance Clear Bra

![Performance Clear Bra Logo](/packages/pcb-theme/src/theme/assets/pcb-logo.svg)

This project contains the main marketing website for the company [Performance Clear Bra](https://performanceclearbra.com).  It was built using [Frontity](https://frontity.com), a [React](https://reactjs.org) framework that combines React as a frontend and [WordPress](https://wordpress.org) as a backend.  It features standard marketing website materials, such as galleries and testimonials, and even includes a two-dimensional tabbed customizer so customers can see details about their specific car models and needs.

#### Table of Contents

- [How It Is Built](#how-it-is-built)
  - [Frontity](#frontity)
  - [Frontity Processors](#frontity-processors)
- [Features Of The Site](#features-of-the-site)
  - [Herobox](#herobox)
  - [Services](#services)
  - [Gallery](#gallery)
  - [Testimonials](#testimonials)
  - [Video](#video)
  - [Tabbed Service Info](#tabbed-service-info)
  - [FAQs](#faqs)
  - [About Page Cards](#about-page-cards)
- [Updates Planned For The Site](#updates-planned-for-the-site)

## How It Is Built

This section is a high-level overview of how the Performance Clear Bra site was built using the [Frontity](https://frontity.com) framework.

### Frontity

This project was built using the [Frontity](https://frontity.com) framework.  This framework combines [React](https://reactjs.org) as a frontend with [WordPress](https://wordpress.org) as a backend via the [WordPress Rest API](https://developer.wordpress.org/rest-api/).

At a high level, the site's design is built like that of a [React](https://reactjs.org) application using [React Router](https://reactrouter.com/en/main).  The [App.js][app] file renders both the [Header.js][header] file and the [Footer.js][footer] file for every page.  Between the two, the present `<Switch>` component dynamically chooses what page content is based on the URL that the user is currently visiting.

The benefit of combining [React](https://reactjs.org) and [WordPress](https://wordpress.org) together is so that the WordPress theme can take advantage of React's Single-Page-Application (SPA) nature, creating a blazing fast experience untraditional with regular WordPress PHP themes.

[app]: /packages/pcb-theme/src/theme/App.js
[header]: /packages/pcb-theme/src/theme/layout/main/Header.js
[footer]: /packages/pcb-theme/src/theme/layout/main/Footer.js

### Frontity Processors

The [PageContent.js][page-content] file renders the page contents of whatever the URL is via the use of [Frontity processors](https://gitbook-docs.frontity.org/guides/using-processors).  A processor in Frontity is an object that scans the content coming from the [WordPress Rest API](https://developer.wordpress.org/rest-api/), matches specific content with a test condition, and upon that match executes a function that transforms the WordPress content into something new.

The bulk of what is rendered in the [PageContent.js][page-content] file is transformed via these [processors].  The WordPress content is built via grouping content together into components that can trigger these processors.  When the processor triggers, it gathers all the data from the WordPress content, feeds the data to a custom React component, and then renders that React component with the data that the processor gathered.  Using this approach, the Frontity site is able to dynamically transform WordPress page content into React components.

[page-content]: /packages/pcb-theme/src/theme/layout/main/PageContent.js
[processors]: /packages/pcb-theme/src/theme/processors/

## Features Of The Site

This section describes all the features that the Performance Clear Bra website provides.

### Main React Components

The following is a list of the main React Components that are rendered to create the site.  These are the components that are rendered via the [Frontity processors](#frontity-processors).

- [Herobox](#herobox)
- [Services](#services)
- [Gallery](#gallery)
- [Testimonials](#testimonials)
- [Video](#video)
- [Tabbed Service Info](#tabbed-service-info)
- [FAQs](#faqs)
- [About Page Cards](#about-page-cards)

### Herobox

The [Herobox][herobox] React component consists of a WordPress group comprising of a Heading, a SubHeading, and a Call-To-Action Button.  It displays those items respectively, as well as taking the featured image of the WordPress page and displaying it as the background of the herobox.

In addition, it also dynamically produces Rep Brands that Performance Clear Bra is associated with.  These Rep Brands will vary depending on what page the user visits.

[herobox]: /packages/pcb-theme/src/theme/processors/components/herobox/Herobox.js

### Services

The [Services][services] React component consists of a WordPress group containing a section heading, any number of cards (each within its own WordPress group), and an optional Call-To-Action Button.  Each card contains a Heading, an image, a description, and a button.

This React component can be displayed anywhere the site needs to display cards.  It is used underneath the Herobox component, as well as underneath the Contact component on Landing Pages exclusively.

[services]: /packages/pcb-theme/src/theme/processors/cardsProcessor.js

### Gallery

The [Gallery][gallery] React component consists of a WordPress group containing a section heading, a WordPress gallery, and a Call-To-Action button.

This React Component transforms that content into a scrolling gallery, where users can either click the left or right arrows on the screen to scroll between the pictures of the gallery.

The WordPress administrator has the option to include an aside, which will present the gallery on one side of the screen, and some optional text on the other side.  This aside is used mainly for the Landing Pages.

The WordPress administrator also has the option to include captions on each picture.  If a caption is present, the React component will render them underneath the image.  If not, nothing is rendered.

[gallery]: /packages/pcb-theme/src/theme/processors/components/gallery/GalleryTab.js

### Testimonials

The [Testimonials][testimonials] React component consists of a WordPress group containing a section heading, an HTML code snippet bringing in the [TrustIndex.io] plugin (which is used to fetch all of Performance Clear Bra's Google testimonials), and a Call-To-Action button.  

This React component takes in all of the testimonial content and displays the content as seen on the live site.  Each testimonial, if long enough, is cut into an excerpt, that will expand to the full testimonial when clicking "Read more".  Every testimonial will slightly raise on hover, as well.

The testimonials can be updated via updating the WordPress TrustIndex.io plugin.

[testimonials]: /packages/pcb-theme/src/theme/processors/components/testimonials/TestimonialComponent.js

### Video

The [Video][video] React component consists of a WordPress group containing a section heading and a video component in it's own WordPress group (either 1 or 2).

The WordPress administrator can update the number of videos between 1 and 2, and whether or not the component will have a light theme (white background) or dark theme (black background).

[video]: /packages/pcb-theme/src/theme/processors/components/Video.js

### Tabbed Service Info

The [Tabbed Service Info][tabbed-service-info] React component is the most complex component of the site so far.  It takes in a Heading, two WordPress tables (and more) fitting all of the component's information, and a Call-To-Action button.

There are several subcomponents of the Tabbed Service Info component.  Each sub-component is responsible for displaying different information on the page depending on what settings the user has picked.

There are 2 independent groups of settings that the user can pick from.  On the [Paint Protection Film](https://performanceclearbra.com/paint-protection-film/) page, the settings are between Film Type (Reaction or Ultra) and Car Location (Partial Front, Full Front, Full Car, Add-Ons, Wear-and-Tear, etc).  On the [Window Tint](https://performanceclearbra.com/window-tint/) page, the settings are Car type (Tesla, Sedan, SUV, Truck) and Tint location (Main Windows, Winshield, Visor Strip, Sunroof).  Every independent matchup has its own information to display to the user:

The [Image] component is made up of one CSS sprite file, and renders different portions of the CSS sprite image depending on what the user clicks.

The [Value] component (only displayed on the Paint Protection Film page) displays the value of what the user has selected.

The [Price] component (only visible on the Window Tint page, but the option to include this is available to both service pages) shows the prices of what the user has clicked.

The [Description] component renders a short description(s) of what the user has clicked.

The [Benefits] component renders a list of benefits that come with what the user has clicked.

[tabbed-service-info]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/
[Image]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/TabbedServiceImage.js
[Value]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/TabbedServiceValue.js "Paint Protection Film only"
[Price]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/TabbedServicePrice.js
[Description]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/TabbedServiceDescription.js
[Benefits]: /packages/pcb-theme/src/theme/processors/components/tabbedserviceinfo/TabbedServiceBenefits.js

### FAQs

The [FAQs] React component is comprised of a WordPress group of a heading, as well as either 1 or 2 lists of FAQ question-answer sets (each coming within their own WordPress group).  The component then renders the questions with answers available as a drop-down when the user clicks on the question.

[FAQs]: /packages/pcb-theme/src/theme/processors/components/FAQ.js

### About Page Cards

The [About Page Cards] React component consists of a WordPress group containing a different number of cards that hold information about Performance Clear Bra.  There is a Values card, and a Meet the Team card.

This Services React component transforms those cards into their respective format on the site.  It can take 1 or 2 cards, but can be easily configured to hold as many as the WordPress administrator wants.

This React component is only displayed on the About page of the site, right underneath the Herobox and Video.

[About Page Cards]: /packages/pcb-theme/src/theme/processors/aboutUsTabProcessor.js

## Updates Planned For The Site

The following are a list of updates planned to expand the site's functionality.  They are labelled as Determined (meaning they for sure will be updated) or Potential (meaning they only have the possibility of being updated).

1. Tabbed Service Info Refactor
  - We aim to refactor the Tabbed Service Info React component so that the WordPress each service page can hold up to 3 sets of tabs (meaning a 3-dimensional component, unlike the 2-dimensional component present now).  
  - This will be used on the Window Tint page, with the 3 sets of tabs being: Car Types, Window Locations, and Film Types.
2. Testimonial Refactor
  - We aim to refactor the Testimonial React component to manually fetch Google reviews on its own, allowing for fine-grain control over which reviews are displayed on the site.  The Trustindex.io plugin does not currently allow for fine-grain control, as it only pulls in the most recent reviews of the company.  With this refactor, the company should be able to hand-pick reviews to display on the site.
3. Blog Posts
  - The idea is to create a blog for the site that the company can use to start making posts about the services they provide.  This will help with SEO purposes, as well as give their brand authority online.