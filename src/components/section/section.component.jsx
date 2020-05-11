import React, { useEffect } from "react";
import { connect } from "react-redux";

import {
  selectShopStoreItems,
  selectShopStoreItem,
  selectStoreItemsPreview,
  selectShopStoreIsLoding,
} from "../../redux/shop/shop.selectors";

import Spinner from "../with-spinner/with-spinner.component";

import { fetchShopItemsStart } from "../../redux/shop/shop.action";

import SectionItem from "../section-item/section-item.component";
import { render } from "@testing-library/react";
//import { addCollectionAndDocument } from "../../firebase/firebase.utils";

class SectionPage extends React.Component {
  componentDidMount() {
    const { fetchShopItemsStart } = this.props;
    fetchShopItemsStart();
  }

  render() {
    const { shopData, isLoading } = this.props;
    return isLoading ? (
      <Spinner />
    ) : (
      <div>
        {shopData.map((section) => (
          <SectionItem key={section.id} section={section} />
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopItemsStart: () => dispatch(fetchShopItemsStart()),
});

const mapStateToProps = (state, { match }) => ({
  //shopData: selectShopStoreItems(state),
  shopData: selectShopStoreItem(match.params.sectionId)(state),
  storePreview: selectStoreItemsPreview(state),
  isLoading: selectShopStoreIsLoding(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(SectionPage);
