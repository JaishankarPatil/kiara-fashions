import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 98vw;
  height: 6vmax;
  background-color: transparent;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const BrandName = styled.div`
  position: relative;
  font-family: "Kaushan Script", cursive;
  color: white;

  font-size: 4vmax;
  text-align: center;
  letter-spacing: 1px;
  line-height: 8vmax;
  margin-left: 0.2vmax;
`;

export const SignInButton = styled.button`
  height: 3vmax;
  width: 7.4vmax;
  border-radius: 2em;
  background-color: #212121;
  border: 2px solid #fff;
  margin-top: 3vmax;
  position: absolute;
  right: 8em;
  color: #fff;
  cursor: pointer;

  span {
    color: white;
    text-align: center;
    font-size: 1.4vmax;
  }
`;
