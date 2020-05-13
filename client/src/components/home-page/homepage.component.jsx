import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaPinterest,
  FaRedditAlien,
  FaSnapchatGhost,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import {
  HomePageImgContainer,
  TopImageContainer,
  MiddleIMageCont,
  MiddleImageRight,
  MiddleImageLeft,
  BottomImageContainer,
  TopImgText,
  TopImgDesription,
  OfferImageContainer,
  OfferInnerContainer,
  MediaIconContainer,
  MediaIconTwitter,
  OfferTopText,
  NewsText,
  EmailIDText,
  EmailInput,
  EmailSignupButton,
  BottemText,
} from "./homepage.styles";

const HomePageComponent = () => {
  return (
    <HomePageImgContainer>
      <TopImageContainer>
        <TopImgText>Style Is A Way To Say Who You Are</TopImgText>
        <TopImgDesription>
          {" "}
          A good man often appears gauche simply because he does not take
          advantage of the myriad mean little chances of making himself look
          stylish. Preferring truth to form, he is not constantly at work upon
          the facade of his appearance.
        </TopImgDesription>
      </TopImageContainer>
      <MiddleIMageCont>
        <MiddleImageRight />
        <MiddleImageLeft />
      </MiddleIMageCont>
      <BottomImageContainer />
      <OfferImageContainer>
        <OfferInnerContainer>
          <OfferTopText>10% OFF YOUR FIRST ORDER </OfferTopText>

          <NewsText>
            Get the latest news, invites and offers straight to your mail.
          </NewsText>
          <EmailIDText>EMAIL ADDRESS</EmailIDText>
          <EmailInput />
          <EmailSignupButton>SIGN UP</EmailSignupButton>
          <BottemText>
            Click here to read information on how Kiyara Fashions processes your
            personal data.
          </BottemText>
        </OfferInnerContainer>
        <MediaIconContainer>
          <MediaIconTwitter>
            <a href="https://twitter.com/login?lang=en">
              <FaTwitter size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.youtube.com/">
              <FaYoutube size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.youtube.com/">
              <FaFacebookF size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.instagram.com/">
              <FaInstagram size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.pinterest.com/">
              <FaPinterest size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.instagram.com/">
              <FaRedditAlien size="1.4rem" />
            </a>
          </MediaIconTwitter>
          <MediaIconTwitter>
            <a href="https://www.instagram.com/">
              <FaSnapchatGhost size="1.4rem" />
            </a>
          </MediaIconTwitter>
        </MediaIconContainer>
      </OfferImageContainer>
    </HomePageImgContainer>
  );
};

export default HomePageComponent;
