import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import { MenuContainer, MenuName } from "./menu.styles";

const MenuItem = ({ match }) => {
  console.log("inside Menu Item", match);

  return (
    <MenuContainer>
      <MenuName>
        <Link to="/shop/womens">
          <span>WOMENS</span>
        </Link>
      </MenuName>
      <MenuName>
        <Link to="/shop/mens">
          <span>MENS</span>
        </Link>
      </MenuName>
      <MenuName>
        <a href="/shop/juniors">
          <span>JUNIORS</span>
        </a>
      </MenuName>
      <MenuName>
        <a href="/shop/wedding">
          <span>WDDING COLLECTION</span>
        </a>
      </MenuName>
      <MenuName>
        <a href="/shop/jewellery">
          <span>JEWELLERY</span>
        </a>
      </MenuName>
      <MenuName>
        <a href="/shop/accessories">
          <span>ACCESSORIES</span>
        </a>
      </MenuName>
    </MenuContainer>
  );
};

export default withRouter(MenuItem);
