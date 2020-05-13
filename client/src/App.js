import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

import { setCurrentUser } from "./redux/user/user.actions";
import Header from "./components/header/header.component";
import Footer from "../src/components/footer/footer.component";
import Home from "../src/components/pages/home/home.component";
import SectionPage from "./components/section/section.component";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { checkUserSession } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="App">
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:sectionId" component={SectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
