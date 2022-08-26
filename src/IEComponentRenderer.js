import React from 'react';
import { useParams } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js" 

import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import BlogIndexPage from "pages/BlogIndex.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";

import LoginPageImageSrc from "images/demo/LoginPage.jpeg";
import SignupPageImageSrc from "images/demo/SignupPage.jpeg";
import PricingPageImageSrc from "images/demo/PricingPage.jpeg";
import AboutUsPageImageSrc from "images/demo/AboutUsPage.jpeg";
import ContactUsPageImageSrc from "images/demo/ContactUsPage.jpeg";
import BlogIndexPageImageSrc from "images/demo/BlogIndexPage.jpeg";
import TermsOfServicePageImageSrc from "images/demo/TermsOfServicePage.jpeg";
import PrivacyPolicyPageImageSrc from "images/demo/PrivacyPolicyPage.jpeg";

import BackgroundAsImageHero from "ie-components/hero/BackgroundAsImage.js";
import IllustrationAndVideoHero from "ie-components/hero/TwoColumnWithVideo.js";
import IllustrationAndInputHero from "ie-components/hero/TwoColumnWithInput.js";
import FeaturesAndTestimonialHero from "ie-components/hero/TwoColumnWithFeaturesAndTestimonial.js";
import FullWidthWithImageHero from "ie-components/hero/FullWidthWithImage.js";
import BackgroundAsImageWithCenteredContentHero from "ie-components/hero/BackgroundAsImageWithCenteredContent.js";
import IllustrationAndPrimaryBackgroundHero from "ie-components/hero/TwoColumnWithPrimaryBackground.js";

import TwoPlansWithDurationSwitcherPricing from "ie-components/pricing/TwoPlansWithDurationSwitcher.js";
import ThreePlansWithHalfPrimaryBackgroundPricing from "ie-components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import ThreePlansPricing from "ie-components/pricing/ThreePlans.js";

import ThreeColWithSideImageFeatures from "ie-components/features/ThreeColWithSideImage.js";
import TwoColWithButtonFeatures from "ie-components/features/TwoColWithButton.js";
import ThreeColSimpleFeatures from "ie-components/features/ThreeColSimple.js";
import ThreeColWithSideImageWithPrimaryBackgroundFeatures from "ie-components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import TwoColVerticalWithButtonFeatures from "ie-components/features/TwoColWithTwoFeaturesAndButtons.js";
import TwoColHorizontalWithButtonFeatures from "ie-components/features/TwoColWithTwoHorizontalFeaturesAndButton.js";
import WithStepsAndImageFeatures from "ie-components/features/TwoColWithSteps.js";
import ThreeColumnDashedBorderFeatures from "ie-components/features/DashedBorderSixFeatures";
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures from "ie-components/features/ThreeColCenteredStatsPrimaryBackground.js";
import WithStatsAndImageFeatures from "ie-components/features/TwoColSingleFeatureWithStats.js";
import WithStatsAndImage2Features from "ie-components/features/TwoColSingleFeatureWithStats2.js";
import VerticalWithAlternateImageAndTextFeatures from "ie-components/features/VerticalWithAlternateImageAndText.js";

import SliderCards from "ie-components/cards/ThreeColSlider.js";
import TrendingCards from "ie-components/cards/TwoTrendingPreviewCardsWithImage.js";
import PortfolioCards from "ie-components/cards/PortfolioTwoCardsWithImage.js";
import TabGridCards from "ie-components/cards/TabCardGrid.js";
import ProfileThreeColGridCards from "ie-components/cards/ProfileThreeColGrid.js"
import ThreeColContactDetailsCards from "ie-components/cards/ThreeColContactDetails.js"

import ThreeColSimpleWithImageBlog from "ie-components/blogs/ThreeColSimpleWithImage.js";
import ThreeColSimpleWithImageAndDashedBorderBlog from "ie-components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import PopularAndRecentPostsBlog from "ie-components/blogs/PopularAndRecentBlogPosts.js";
import GridWithFeaturedPostBlog from "ie-components/blogs/GridWithFeaturedPost.js";

import TwoColumnWithImageTestimonial from "ie-components/testimonials/TwoColumnWithImage.js";
import TwoColumnWithImageAndProfilePictureReviewTestimonial from "ie-components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import TwoColumnWithImageAndRatingTestimonial from "ie-components/testimonials/TwoColumnWithImageAndRating.js";
import ThreeColumnWithProfileImageTestimonial from "ie-components/testimonials/ThreeColumnWithProfileImage.js";
import SimplePrimaryBackgroundTestimonial from "ie-components/testimonials/SimplePrimaryBackground.js";

import SimpleWithSideImageFAQS from "ie-components/faqs/SimpleWithSideImage.js";
import SingleColFAQS from "ie-components/faqs/SingleCol.js";
import TwoColumnPrimaryBackgroundFAQS from "ie-components/faqs/TwoColumnPrimaryBackground.js";

import SimpleContactUsForm from "ie-components/forms/SimpleContactUs.js";
import SimpleSubscribeNewsletterForm from "ie-components/forms/SimpleSubscribeNewsletter.js";
import TwoColContactUsForm from "ie-components/forms/TwoColContactUsWithIllustration.js";
import TwoColContactUsFullForm from "ie-components/forms/TwoColContactUsWithIllustrationFullForm.js";

import GetStartedCTA from "ie-components/cta/GetStarted.js";
import GetStartedLightCTA from "ie-components/cta/GetStartedLight.js";
import DownloadAppCTA from "ie-components/cta/DownloadApp.js";

import SimpleFiveColumnFooter from "ie-components/footers/SimpleFiveColumn.js";
import FiveColumnWithInputFormFooter from "ie-components/footers/FiveColumnWithInputForm.js";
import FiveColumnWithBackgroundFooter from "ie-components/footers/FiveColumnWithBackground.js";
import FiveColumnDarkFooter from "ie-components/footers/FiveColumnDark.js";
import MiniCenteredFooter from "ie-components/footers/MiniCenteredFooter.js";


export const components = {
  landingPages: {
  },

  innerPages: {
    LoginPage: {
      component: LoginPage,
      imageSrc: LoginPageImageSrc,
      scrollAnimationDisabled: true,
      url: "/ie-components/innerPages/LoginPage",
    },
    SignupPage: {
      component: SignupPage,
      url: `/ie-components/innerPages/SignupPage`,
      imageSrc: SignupPageImageSrc,
      scrollAnimationDisabled: true,
    },
    PricingPage: {
      component: PricingPage,
      url: `/ie-components/innerPages/PricingPage`,
      imageSrc: PricingPageImageSrc,
    },
    AboutUsPage: {
      component: AboutUsPage,
      url: `/ie-components/innerPages/AboutUsPage`,
      imageSrc: AboutUsPageImageSrc,
    },
    ContactUsPage: {
      component: ContactUsPage,
      url: `/ie-components/innerPages/ContactUsPage`,
      imageSrc: ContactUsPageImageSrc,
    },
    BlogIndexPage: {
      component: BlogIndexPage,
      url: `/ie-components/innerPages/BlogIndexPage`,
      imageSrc: BlogIndexPageImageSrc,
    },
    TermsOfServicePage: {
      component: TermsOfServicePage,
      url: `/ie-components/innerPages/TermsOfServicePage`,
      imageSrc: TermsOfServicePageImageSrc,
    },
    PrivacyPolicyPage: {
      component: PrivacyPolicyPage,
      url: `/ie-components/innerPages/PrivacyPolicyPage`,
      imageSrc: PrivacyPolicyPageImageSrc,
    }
  },

  blocks: {
    Hero: {
      type: "Hero Section",
      elements: {
        BackgroundAsImage: {
          name: "With Background Image",
          component: BackgroundAsImageHero,
          url: "/ie-components/blocks/Hero/BackgroundAsImage",
        },
        IllustrationAndInput: {
          name: "With Image Illustration and Input",
          component: IllustrationAndInputHero,
          url: "/ie-components/blocks/Hero/IllustrationAndInput",
        },
        IllustrationAndVideo: {
          name: "With Image Illustration and Video",
          component: IllustrationAndVideoHero,
          url: "/ie-components/blocks/Hero/IllustrationAndVideo",
        },
        FeaturesAndTestimonial: {
          name: "With Features And Customer Testimonial",
          component: FeaturesAndTestimonialHero,
          url: "/ie-components/blocks/Hero/FeaturesAndTestimonial",
        },
        FullWidthWithImage: {
          name: "Full Width With Image",
          component: FullWidthWithImageHero,
          url: "/ie-components/blocks/Hero/FullWidthWithImage",
        },
        BackgroundAsImageWithCenteredContent: {
          name: "Full Width Background Image with centered content",
          component: BackgroundAsImageWithCenteredContentHero,
          url: "/ie-components/blocks/Hero/BackgroundAsImageWithCenteredContent",
        },
        IllustrationAndPrimaryBackground: {
          name: "Primary Background With Illustration",
          component: IllustrationAndPrimaryBackgroundHero,
          url: "/ie-components/blocks/Hero/IllustrationAndPrimaryBackground",
        },
      }
    },
    Pricing: {
      type: "Pricing Section",
      elements: {
        TwoPlansWithDurationSwitcher: {
          name: "Two Plans With Duration Switcher",
          component: TwoPlansWithDurationSwitcherPricing,
          url: "/ie-components/blocks/Pricing/TwoPlansWithDurationSwitcher",
        },
        ThreePlansWithHalfPrimaryBackground: {
          name: "Three Plans With Primary Background at Top",
          component: ThreePlansWithHalfPrimaryBackgroundPricing,
          url: "/ie-components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground",
        },
        ThreePlans: {
          name: "Simple Three Plans",
          component: ThreePlansPricing,
          url: "/ie-components/blocks/Pricing/ThreePlans",
        },
      }
    },
    Features: {
      type: "Features Section",
      elements: {
        ThreeColWithSideImage: {
          name: "Three Column With Side Image",
          component: ThreeColWithSideImageFeatures,
          url: "/ie-components/blocks/Features/ThreeColWithSideImage",
        },
         TwoColWithButton: {
          name: "Two Column With Image and Action Button",
          component: TwoColWithButtonFeatures,
          url: "/ie-components/blocks/Features/TwoColWithButton",
        },
        ThreeColSimple: {
          name: "Three Column Simple",
          component: ThreeColSimpleFeatures,
          url: "/ie-components/blocks/Features/ThreeColSimple",
        },
        ThreeColWithSideImageWithPrimaryBackground: {
          name: "Three Column With Side Image With Primary Background",
          component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
          url: "/ie-components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground",
        },
        TwoColHorizontalWithButton: {
          name: "Two Column With Button and Horizonatal Features with Icon",
          component: TwoColHorizontalWithButtonFeatures,
          url: "/ie-components/blocks/Features/TwoColHorizontalWithButton",
        },
        TwoColVerticalWithButton: {
          name: "Two Column With Vertical Features and Button",
          component: TwoColVerticalWithButtonFeatures,
          url: "/ie-components/blocks/Features/TwoColVerticalWithButton",
        },
        WithStepsAndImage: {
          name: "Steps with Image",
          component: WithStepsAndImageFeatures,
          url: "/ie-components/blocks/Features/WithStepsAndImage",
        },
        ThreeColumnDashedBorder: {
          name: "Three Column With Dashed Primary Border",
          component: ThreeColumnDashedBorderFeatures,
          url: "/ie-components/blocks/Features/ThreeColumnDashedBorder",
        },
        ThreeColCenteredStatsPrimaryBackground: {
          name: "Three Column With Centered Stats on Primary Background",
          component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
          url: "/ie-components/blocks/Features/ThreeColCenteredStatsPrimaryBackground",
        },
        WithStatsAndImage: {
          name: "Stats With Image",
          component: WithStatsAndImageFeatures,
          url: "/ie-components/blocks/Features/WithStatsAndImage",
        },
        WithStatsAndImage2: {
          name: "Stats With Image 2",
          component: WithStatsAndImage2Features,
          url: "/ie-components/blocks/Features/WithStatsAndImage2",
        },
        VerticalWithAlternateImageAndText: {
          name: "Vertical Feature Cards With Alternate Image and Text",
          component: VerticalWithAlternateImageAndTextFeatures,
          url: "/ie-components/blocks/Features/VerticalWithAlternateImageAndText",
        },
      }
    },

    Cards: {
      type: "Cards",
      elements: {
        Slider: {
          name: "Three Column Slider",
          component: SliderCards,
          url: "/ie-components/blocks/Cards/Slider",
        },
        Portfolio: {
          name: "Two Column Portfolio Cards With Images ",
          component: PortfolioCards,
          url: "/ie-components/blocks/Cards/Portfolio",
        },
        TabGrid: {
          name: "Tab Card Grid With Tab Switcher",
          component: TabGridCards,
          url: "/ie-components/blocks/Cards/TabGrid",
        },
        ProfileThreeColGrid: {
          name: "Three Column Grid Cards For Profile",
          component: ProfileThreeColGridCards,
          url: "/ie-components/blocks/Cards/ProfileThreeColGrid",
        },
        ThreeColContactDetails: {
          name: "Three Column Contact Details Cards",
          component: ThreeColContactDetailsCards,
          url: "/ie-components/blocks/Cards/ThreeColContactDetails",
        },
        Trending: {
          name: "Two Trending Preview Cards With Images",
          component: TrendingCards,
          url: "/ie-components/blocks/Cards/Trending",
        },
      }
    },

    Blog: {
      type: "Blog Section",
      elements: {
        GridWithFeaturedPost: {
          name: "Grid With Featured Post",
          component: GridWithFeaturedPostBlog,
          url: "/ie-components/blocks/Blog/GridWithFeaturedPost",
        },
        PopularAndRecentPosts: {
          name: "Popular And Recent Posts",
          component: PopularAndRecentPostsBlog,
          url: "/ie-components/blocks/Blog/PopularAndRecentPosts",
        },
        ThreeColSimpleWithImage: {
          name: "Simple Three Column With Image",
          component: ThreeColSimpleWithImageBlog,
          url: "/ie-components/blocks/Blog/ThreeColSimpleWithImage",
        },
        ThreeColSimpleWithImageAndDashedBorder: {
          name: "Simple Three Column With Image and Dashed Border",
          component: ThreeColSimpleWithImageAndDashedBorderBlog,
          url: "/ie-components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder",
        },
      } 
    },

    Testimonial: {
      type: "Testimonial Section",
      elements: {
        TwoColumnWithImage: {
          name: "Two Column With Image",
          component: TwoColumnWithImageTestimonial,
          url: "/ie-components/blocks/Testimonial/TwoColumnWithImage",
        },
        TwoColumnWithImageAndProfilePictureReview: {
          name: "Two Column With Image And Profile Picture Review",
          component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
          url: "/ie-components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview",
        },
        TwoColumnWithImageAndRating: {
          name: "Two Column With Image And Rating",
          component: TwoColumnWithImageAndRatingTestimonial,
          url: "/ie-components/blocks/Testimonial/TwoColumnWithImageAndRating",
        },
        ThreeColumnWithProfileImage: {
          name: "Three Column With Profile Image",
          component: ThreeColumnWithProfileImageTestimonial,
          url: "/ie-components/blocks/Testimonial/ThreeColumnWithProfileImage",
        },
        SimplePrimaryBackground: {
          name: "Simple With Primary Background",
          component: SimplePrimaryBackgroundTestimonial,
          url: "/ie-components/blocks/Testimonial/SimplePrimaryBackground",
        },
      }
    },

    FAQS: {
      type: "FAQs Section",
      elements: {
        SimpleWithSideImage: {
          name: "Simple With Side Image",
          component: SimpleWithSideImageFAQS,
          url: "/ie-components/blocks/FAQS/SimpleWithSideImage",
        },
        SingleCol: {
          name: "Single Column",
          component: SingleColFAQS,
          url: "/ie-components/blocks/FAQS/SingleCol",
        },
        TwoColumnPrimaryBackground: {
          name: "Two Column With Primary Background",
          component: TwoColumnPrimaryBackgroundFAQS,
          url: "/ie-components/blocks/FAQS/TwoColumnPrimaryBackground",
        },
      }
    },

    Form: {
      type: "Forms Section",
      elements: {
        SimpleContactUs: {
          name: "Simple Contact Us",
          component: SimpleContactUsForm,
          url: "/ie-components/blocks/Form/SimpleContactUs",
        },
        SimpleSubscribeNewsletter: {
          name: "Simple Subscribe newsletter",
          component: SimpleSubscribeNewsletterForm,
          url: "/ie-components/blocks/Form/SimpleSubscribeNewsletter",
        },
        TwoColContactUs: {
          name: "Two Column Contact Us",
          component: TwoColContactUsForm,
          url: "/ie-components/blocks/Form/TwoColContactUs",
        },
        TwoColContactUsFull: {
          name: "Two Column Contact Us - Full Form",
          component: TwoColContactUsFullForm,
          url: "/ie-components/blocks/Form/TwoColContactUsFull",
        },
      }
    },

    CTA: {
      type: "CTA Section",
      elements: {
        GetStarted: {
          name: "Get Started",
          component: GetStartedCTA,
          url: "/ie-components/blocks/CTA/GetStarted",
        },
        GetStartedLight: {
          name: "Get Started Light",
          component: GetStartedLightCTA,
          url: "/ie-components/blocks/CTA/GetStartedLight",
        },
        DownloadApp: {
          name: "Download App",
          component: DownloadAppCTA,
          url: "/ie-components/blocks/CTA/DownloadApp",
        },
      }
    },

    Footer: {
      type: "Footers Section",
      elements: {
        SimpleFiveColumn: {
          name: "Simple Five Column",
          component: SimpleFiveColumnFooter,
          url: "/ie-components/blocks/Footer/SimpleFiveColumn",
        },
        FiveColumnWithInputForm: {
          name: "Five Column With Input Form",
          component: FiveColumnWithInputFormFooter,
          url: "/ie-components/blocks/Footer/FiveColumnWithInputForm",
        },
        FiveColumnWithBackground: {
          name: "Five Column With background",
          component: FiveColumnWithBackgroundFooter,
          url: "/ie-components/blocks/Footer/FiveColumnWithBackground",
        },
        FiveColumnDark: {
          name: "Five Column Dark",
          component: FiveColumnDarkFooter,
          url: "/ie-components/blocks/Footer/FiveColumnDark",
        },
        MiniCentered: {
          name: "Mini Centered Dark",
          component: MiniCenteredFooter,
          url: "/ie-components/blocks/Footer/MiniCentered",
        },
      }
    }
  }
}

export default () => {
  const { type, subtype, name } = useParams()

  try {
    let Component = null;
    if(type === "blocks" && subtype) {
      Component= components[type][subtype]["elements"][name].component
      return <AnimationRevealPage disabled>
          <Component/>
        </AnimationRevealPage>
    }
    else
      Component= components[type][name].component

    if(Component)
      return <Component/>

    throw new Error("Component Not Found")
  }
  catch (e) {
    console.log(e)
    return <div>Error: Component Not Found</div>
  }
}
