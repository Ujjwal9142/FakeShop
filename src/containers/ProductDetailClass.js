import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import "./ProductDetail.css";

class ProductDetailClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: Math.floor(Math.random() * 10),
    };
  }

  getMyProduct = async () => {
    const { productId } = this.props.match.params;
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    this.props.selectedProduct(response.data);
  };
  componentDidMount() {
    const { productId } = this.props.match.params;
    if (productId && productId !== "") {
      this.getMyProduct();
    }
  }
  componentWillUnmount() {
    this.props.removeSelectedProduct();
  }
  render() {
    console.log(this.props.product);
    const { title, image, category, price, description } = this.props.product;
    return (
      <div className="main_productDetail">
        {Object.keys(this.props.product).length !== 0 ? (
          <div className="main_productDetail_card">
            <div className="main_productDetail_image">
              <img
                src={image}
                alt={title}
                className="main_productDetail_mainItem_image"
              ></img>
            </div>
            <div className="main_productDetail_card_content">
              <div className="main_productDetail_content_header">
                Item Name: <span>{title}</span>
              </div>
              <div className="main_productDetail_content_metaPrice">
                Price : <span>$ {price}</span>
              </div>
              <div className="main_productDetail_content_metaCategory">
                Category: <span>{category}</span>
              </div>
              <div className="main_productDetail_content_metaRating">
                Rating:{" "}
                <span>
                  {this.state.rating < 5
                    ? this.state.rating + 4
                    : this.state.rating}
                  /10
                </span>
              </div>
              <div className="main_productDetail_content_metaDescription">
                About the product: <span>{description}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="main_productDetail_loading">...Loading</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};

const mapDispatchToProps = {
  selectedProduct,
  removeSelectedProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailClass);
