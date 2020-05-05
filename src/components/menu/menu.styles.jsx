import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: rgba(34, 18, 0, 0.07);
  margin-top: 80px;
  opacity: 0.9;
  display: flex;
  position: relative;
  justify-content: space-around;
`;

export const MenuName = styled.div`
  position: relative;
  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    color: black;
  }

  span {
    color: white;
    line-height: 50px;
    font-family: "Kaushan Script", cursive;
    padding-bottom: 50px;
  }
`;
