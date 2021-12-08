import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
import ProductComponent from "./containers/ProductComponent";
import "./App.css";
import ProductDetailClass from "./containers/ProductDetailClass";
import ProductListingClass from "./containers/ProductListingClass";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route>404 Not found!</Route>
      </Switch>
    </div>
  );
}

export default App;
