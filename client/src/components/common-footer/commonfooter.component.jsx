import React from "react";

import {
  FooterLinksContainer,
  LinkFirstColumn,
  LinksHeader,
} from "./commonfooter.styles";

const CommonFooter = () => (
  <FooterLinksContainer>
    <LinkFirstColumn>
      <ul>
        <LinksHeader>STORE</LinksHeader>
        <li>
          <a href="https://www.google.com/">Womens</a>
        </li>
        <li>
          <a href="https://www.google.com/">Mens</a>
        </li>
        <li>
          <a href="https://www.google.com/">Juniors</a>
        </li>
        <li>
          <a href="https://www.google.com/">Wedding Collection</a>
        </li>
        <li>
          <a href="https://www.google.com/">Jewellery</a>
        </li>
        <li>
          <a href="https://www.google.com/">Accessories</a>
        </li>
      </ul>
    </LinkFirstColumn>
    <LinkFirstColumn>
      <ul>
        <LinksHeader>POLICIES</LinksHeader>
        <li>
          <a href="https://www.google.com/">Payment Options</a>
        </li>
        <li>
          <a href="https://www.google.com/">Terms & Conditions of Use</a>
        </li>

        <li>
          <a href="https://www.google.com/">Offer Terms & Conditions</a>
        </li>
        <li>
          <a href="https://www.google.com/">Returns & Exchange Policy</a>
        </li>
        <li>
          <a href="https://www.google.com/">Shipping Policy</a>
        </li>
        <li>
          <a href="https://www.google.com/">Privacy Policy</a>
        </li>
      </ul>
    </LinkFirstColumn>
    <LinkFirstColumn>
      <ul>
        <LinksHeader>ABOUT US</LinksHeader>
        <li>
          <a href="https://www.google.com/">Official Brand Store</a>
        </li>
        <li>
          <a href="https://www.google.com/">Our Story</a>
        </li>
        <li>
          <a href="https://www.google.com/">KF World</a>
        </li>
        <li>
          <a href="https://www.google.com/">Careers</a>
        </li>
      </ul>
    </LinkFirstColumn>
    <LinkFirstColumn>
      <ul>
        <LinksHeader>CONTACT US</LinksHeader>
        <li>
          <a href="https://www.google.com/">Customer Support</a>
        </li>
        <li>
          <a href="https://www.google.com/">Store Locators</a>
        </li>
        <li>
          <a href="https://www.google.com/">Help Center</a>
        </li>
      </ul>
    </LinkFirstColumn>
  </FooterLinksContainer>
);

export default CommonFooter;
