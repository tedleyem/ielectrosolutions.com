import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line 
import { SectionHeading, Subheading as SubheadingBase } from "ie-components/misc/Headings.js";
import { SectionDescription } from "ie-components/misc/Typography.js";

import defaultCardImage from "images/shield-icon.svg";
 
import phonerepairsymbolImage from "images/phone-repair-symbol-svgrepo-com.svg";
import WebDesignImage from "images/web-design.svg";
import EventsImage from "images/event-tickets.svg";
import ComputerTechnicalImage from "images/computer-technical.svg";
import ServerStackImage from "images/server-stack.svg";
import CustomerAppleImage from "images/apple-black-svgrepo-com.svg";

const Container = tw.div`relative bg-primary-900 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;

const VerticalSpacer = tw.div`mt-10 w-full`;

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`bg-gray-100 text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

export default ({
  cards = null,
  heading = "In-Store Services",
  subheading = "",
  description = "Come to the store to inquire more about our services"
}) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: phonerepairsymbolImage,
      title: "Cell Phone Repairs",
      description: "We can help with water damage, speaker failure, lcd replacement, and more. Come into our store to find out more"
    },
    { imageSrc: CustomerAppleImage, title: "Apple Product Repairs",
    description: "We can quickly repair your Apple devices including iPhones, iPads, iPods, iMacs, and Macbooks." },
    { imageSrc: WebDesignImage, title: "Web Development",
    description: "Need a web site developed? Need direction on where to start, our team can help with that." },
    { imageSrc: ComputerTechnicalImage, title: "Tech Repair and Recovery",
    description: "Our Technicians can help you with PC tune ups, data transfers, virus removal, and more. We are the go to shop for your computer repair needs." },
    { imageSrc: ServerStackImage, title: "IT Consulting",
    description: "We provide IT Consulting Services for Managed Services, Email support, virus removal, server setup and installation, and more" },
    { imageSrc: EventsImage, title: "Event Hosting",
    description: "Our Store location can be your destination to host your next event. Come in and talk to us to discuss more." }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc || defaultCardImage} alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
    </Container>
  );
};
