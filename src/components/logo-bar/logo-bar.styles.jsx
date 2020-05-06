import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 98vw;
  height: 6rem;
  background-color: transparent;
  display: flex;
  position: relative;
  justify-content: space-between;
`;

export const BrandName = styled.div`
  position: relative;
  font-family: "Kaushan Script", cursive;
  color: white;
  font-size: 40px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 80px;
`;

export const SignInButton = styled.button`
  height: 35px;
  width: 70px;
  border-radius: 2em;
  background-color: #212121;
  border: 2px solid #fff;
  margin-top: 28px;
  position: absolute;
  right: 8em;
  color: #fff;
  cursor: pointer;
`;
