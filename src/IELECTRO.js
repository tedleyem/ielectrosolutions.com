import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "ie-components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "ie-components/features/ielectro-features.js";
import MainFeature from "ie-components/features/TwoColWithButton.js";
import FAQ from "ie-components/faqs/ielectro-faqs.js";
import Footer from "ie-components/footers/ielectro-Footer.js";
import phonerepairIllustrationImageSrc from "images/Broken-Screen-Icons.svg"
import networkingIllustrationImageSrc from "images/datacenter-isometric-illustration.svg"
import serviceareaIllustrationImageSrc from "images/gps-navigation-concept.svg"
import evenplanningIllustrationImageSrc from "images/Group-of-Black-Men-and-Women-in-Office-Setting-B.svg"

export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features /> 
      <MainFeature 
        subheading="Cell Phone Repair"
        heading="IPhone and Android Repairs in store"
        description = "Fast and reliable service, water damage, speaker failure, lcd replacement, and more. Call us to hear about all of our services. "
        imageSrc={phonerepairIllustrationImageSrc} 
        primaryButtonText = "Call us 561-420-6471"
        buttonRounded={false}
        textOnLeft={false}
      /> 
      <MainFeature 
        subheading="Networking and Repairs"
        heading="Hardware repair, sever mangement and backup, computer security and more"
        description = "We can help you with PC tune ups, data transfers, virus removal, and more. 
        We also provide repair services for your Apple devices including iPhones, iPads, iPods, iMacs, and Macbooks.
        "
        imageSrc={networkingIllustrationImageSrc}
      // primaryButtonText = "Learn More",
      //  buttonRounded={false} 
      />
      <MainFeature 
        subheading="Areas we service"
        heading="Areas we service for In-Home Repairs"
        description = " Acreage | Atlantis | Boca Raton | Boynton Beach |
        Delray Beach | Greenacres | Highland Beach |
        Jupiter | Lake Worth | Lantana | Loxahatchee |
        North Palm Beach | Palm Beach Gardens | Palm Beach | Palm Springs |
        Royal Palm Beach | Wellington | West Palm Beach |
    "
        imageSrc={serviceareaIllustrationImageSrc} 
        textOnLeft={false}
        // primaryButtonText = "Learn More",
        //  buttonRounded={false} 
      /> 
      <MainFeature 
        subheading="Event Planning"
        heading="Need a space for your event?"
        description = "Use our shop, conveniently located near Palm Beach State college and other popular amenities to host a small event.
        Host a business function, yoga class, or more. Contact us for details"
        imageSrc={evenplanningIllustrationImageSrc} 
        // primaryButtonText = "Learn More",
        //  buttonRounded={false} 
      /> 
      <FAQ />
      <Footer />
    </AnimationRevealPage>
    
  );


  export default function App() {
    // If you want to disable the animation just use the disabled `prop` like below on your page's component
    // return <AnimationRevealPage disabled>xxxxxxxxxx</AnimationRevealPage>;
  
  
  return (
    <Router>
      <Switch>
        <Route path="/ie-components/:type/:subtype/:name">
          <IEComponentRenderer />
        </Route>
        <Route path="/ie-components/:type/:name">
          <IEComponentRenderer />
        </Route>
        <Route path="/">
          <IelectrofixLandingPage />
        </Route> 
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
        <Route path="/terms-of-service">
          <TermsOfService />
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy />
        </Route>
      </Switch>
    </Router>
  );
}

}
