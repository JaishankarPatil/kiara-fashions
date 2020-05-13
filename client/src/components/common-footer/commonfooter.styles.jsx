import styled from "styled-components";

export const FooterLinksContainer = styled.div`
  width: 96vw;
  height: 200px;
  background-color: red;
  position: relative;
  margin: 20px 12px;
  display: flex;
`;

export const LinksHeader = styled.p`
  font-size: 20px;
  line-height: 40px;
  font-family: "Manrope", sans-serif;
  color: rgb(0, 8, 28);
  margin-left: 17px;
`;
export const LinkFirstColumn = styled.div`
  width: 25%;
  height: 300px;
  position: relative;
  background-color: white;
  text-decoration: undefined;
  text-align: left;

  a {
    text-decoration: none;
    color: rgb(0, 8, 28);
    line-height: 30px;
    letter-spacing: 0.15px;
    font-family: "Manrope", sans-serif;
    font-size: 15px;
    cursor: pointer;
  }
  ul {
    list-style: none;
  }
  li {
    text-align: left;
    margin-left: 20px;
  }

  a:hover {
    text-decoration: underline;
  }
`;
