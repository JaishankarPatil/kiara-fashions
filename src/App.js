import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Footer from "../src/components/footer/footer.component";
import Home from "../src/components/pages/home/home.component";
import SectionPage from "./components/section/section.component";
import CheckoutPage from "./components/pages/checkout/checkout.component";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop/:sectionId" component={SectionPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
