import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  selectShopStoreItems,
  selectShopStoreItem,
  selectStoreItemsPreview,
} from "../../redux/shop/shop.selectors";

import {
  firestore,
  convertStoreItemsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { setShopData } from "../../redux/shop/shop.action";

import SectionItem from "../section-item/section-item.component";
import ttt from "./section.styles";

import { addCollectionAndDocument } from "../../firebase/firebase.utils";

const SectionPage = ({ match, setStoreData, storePreview, shopData }) => {
  useEffect(() => {
    const collectionRef = firestore.collection("ShopItems");

    collectionRef.onSnapshot((snapshot) => {
      const convartedStoreMap = convertStoreItemsSnapshotToMap(snapshot);
      console.log("convartedStoreMap", convartedStoreMap);
      setStoreData(convartedStoreMap);
    });
  }, []);

  return (
    <div>
      {shopData.map((section) => (
        <SectionItem key={section.id} section={section} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setStoreData: (StoreItems) => dispatch(setShopData(StoreItems)),
});

const mapStateToProps = (state, { match }) => ({
  //shopData: selectShopStoreItems(state),
  shopData: selectShopStoreItem(match.params.sectionId)(state),
  storePreview: selectStoreItemsPreview(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionPage);
