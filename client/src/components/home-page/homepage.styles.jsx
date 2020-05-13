import styled from "styled-components";

export const HomePageImgContainer = styled.div`
  width: 98vw;
  display: flex;
  position: relative;
  flex-direction: column;
  margin-top: 10px;
`;

export const TopImageContainer = styled.div`
  width: 96vw;
  height: 460px;
  background-image: url("https://images.pexels.com/photos/735551/pexels-photo-735551.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  position: relative;
  margin: 5px 12px;
  background-position: center;
  background-size: cover;
`;

export const TopImgText = styled.p`
  color: #2e2c2b;
  font-family: "Kaushan Script", cursive;
  font-size: 40px;
  margin-top: 40px;
  margin-left: 50px;
  width: 400px;
  text-align: center;
`;

export const TopImgDesription = styled.p`
  color: #2e2c2b;
  font-family: "Comic Neue", cursive;

  font-size: 20px;
  margin-top: 40px;
  margin-left: 20px;
  width: 550px;
  text-align: center;
`;

export const MiddleIMageCont = styled.div`
  width: 96vw;
  height: 460px;
  margin: 5px 12px;
  display: flex;
  position: relative;
`;

export const MiddleImageRight = styled.div`
  width: 50%;
  height: 460px;
  margin-right: 8px;
  background-image: url("https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  position: relative;
  background-position: center;
  background-size: cover;
`;

export const MiddleImageLeft = styled.div`
  width: 50%;
  height: 460px;
  margin-left: 8px;
  background-image: url("https://images.pexels.com/photos/219550/pexels-photo-219550.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  position: relative;

  background-position: center;
  background-size: cover;
`;

export const BottomImageContainer = styled.div`
  width: 96vw;
  height: 460px;
  background-image: url("https://images.pexels.com/photos/872756/pexels-photo-872756.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260");
  position: relative;
  margin: 5px 12px;
  background-position: center;
  background-size: cover;
`;

export const OfferImageContainer = styled.div`
  width: 96vw;
  height: 420px;
  background-image: url("https://www.danielwellington.com/ecom2-image-bucket/mv3xw5mnbbp0/0t7ywzRhsRjSSvVEcAMKe/058744d44886e6ede72a5bf896550817/262_2800x1200_Startpage_Footer.jpg");
  position: relative;
  margin: 5px 12px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const OfferInnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 28px 0px;
  position: relative;
  min-height: 18rem;
  width: 60vw;
  max-width: 70rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  margin: 30px 0px 20px 180px;
`;

export const OfferTopText = styled.p`
  font-size: 25px;
  font-family: "Cinzel", serif;
  line-height: 50px;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-weight: normal;
  margin-left: 20px;
`;

export const NewsText = styled.p`
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 0.15px;
  font-family: "Manrope", sans-serif;
  font-weight: normal;
  margin-left: 20px;
`;

export const EmailIDText = styled.p`
  font-family: "Cinzel", serif;
  font-size: 16px;
  line-height: 30px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: normal;
  margin-left: 20px;
`;

export const EmailInput = styled.input`
  width: 400px;
  height: 50px;
  line-height: 60px;
  margin-left: 20px;
`;

export const EmailSignupButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #707b7c;
  border-radius: 2%;
  margin-left: 12px;
  border: none;
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
`;

export const BottemText = styled.p`
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 1px;
  font-family: "Manrope", sans-serif;
  font-weight: normal;
  text-align: left;
  width: 420px;
  margin-top: 15px;
  margin-left: 20px;
`;

export const MediaIconContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 28px 0px;
  min-height: 3.6rem;
  position: relative;
  width: 60vw;
  max-width: 70rem;
  background: rgba(255, 255, 255, 0.8);
  margin: 0px 100px 180px 180px;
  height: 17px;
  display: flex;
  position: relative;
  justify-content: space-around;
`;

export const MediaIconTwitter = styled.div`
  padding-top: 8px;
  padding-left: 7px;
  border-radius: 50%;
  background-color: #fdfefe;
  width: 35px;
  height: 35px;
  position: relative;
  margin-top: 13px;

  cursor: pointer;

  :hover {
    background-color: #d5d8dc;
  }
`;
