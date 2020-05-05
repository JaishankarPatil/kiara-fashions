import React from "react";
import { addItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import {
  SectionItemsContainer,
  ImageContainer,
  ImageDetails,
  ProductDetails,
  ProductName,
  ProductPrice,
  CurencySym,
  AddButton,
} from "./section-item.styles";

const SectionItem = ({ addItem, section }) => {
  const { items, id } = section;
  console.log("Name", id);
  return (
    <SectionItemsContainer>
      {items.map((item) => (
        <ProductDetails>
          <ImageContainer src={item.imageUrl} />
          <ImageDetails>
            <ProductName>{item.name} </ProductName>
            <CurencySym />
            <ProductPrice>{item.price}</ProductPrice>
          </ImageDetails>
          <AddButton onClick={() => addItem(item)}> ADD TO CART</AddButton>
        </ProductDetails>
      ))}
    </SectionItemsContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(SectionItem);
