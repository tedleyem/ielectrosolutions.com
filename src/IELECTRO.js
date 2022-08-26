import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "ie-components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "ie-components/features/ielectro-features.js";
import MainFeature from "ie-components/features/TwoColWithButton.js";
import FAQ from "ie-components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "ie-components/footers/ielectro-Footer.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg"
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg"


export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Features /> 
      <MainFeature 
        subheading="Cell Phone Repair"
        heading="IPhone and Android Repairs in store"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      /> 
      <MainFeature 
        subheading="Networking"
        heading="Highly Redundant Server Backup Solutions and more"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="IT Consulting"
        heading="Hardware Repair, Sever Mangement, Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      /> 
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
}
