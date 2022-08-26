import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react"; 
 
import IEComponentRenderer from "IEComponentRenderer.js";
import IelectrofixLandingPage from "IELECTRO.js";
import AboutUs from "AboutUs.js";
import ContactUs from "ContactUs.js";
import TermsOfService from "TermsOfService.js";
import PrivacyPolicy from "PrivacyPolicy.js"; 

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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

// export default IelectrofixLandingPage;

// export default LoginPage;
// export default SignupPage;
// export default PricingPage;
// export default AboutUsPage;
// export default ContactUsPage;
// export default BlogIndexPage;

// export default TermsOfServicePage;
// export default PrivacyPolicyPage;
 
