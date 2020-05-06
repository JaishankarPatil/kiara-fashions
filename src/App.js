import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "../src/components/footer/footer.component";
import Home from "../src/components/pages/home/home.component";
import SectionPage from "./components/section/section.component";
import CheckoutPage from "./components/pages/checkout/checkout.component";
import SignInAndSignUp from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
          console.log("Sign Up", this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:sectionId" component={SectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
