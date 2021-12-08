import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponentClass from "./ProductComponentClass";

class ProductListingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getAllProducts = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    this.props.setProducts(response.data);
  };

  componentDidMount() {
    this.getAllProducts();
  }

  render() {
    return (
      <div className="productListing">
        <ProductComponentClass />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setProducts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListingClass);
