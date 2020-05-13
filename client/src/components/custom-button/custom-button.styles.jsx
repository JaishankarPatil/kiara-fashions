import styled, { css } from "styled-components";

export const CustomButtonContainer = styled.div`
  display: flex;
`;

const googleSigniInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

const getButtonStyle = (props) => {
  if (props.isGoogleSignIn) {
    return googleSigniInStyles;
  }
};

export const CustomBtn = styled.button`
  min-width: 170px;
  width: auto;
  height: 50px;
  background-color: #707b7c;
  border-radius: 2%;
  margin-left: 12px;
  border: none;
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  cursor: pointer;

  ${getButtonStyle}
`;
