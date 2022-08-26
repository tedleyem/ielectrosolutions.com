import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "ie-components/headers/light.js";
import Pricing from "ie-components/pricing/TwoPlansWithDurationSwitcher.js";
import Testimonial from "ie-components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "ie-components/footers/FiveColumnWithInputForm.js";
import FAQ from "ie-components/faqs/SingleCol.js";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <Testimonial
        heading="Our Paying Customers"
      />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
