import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductComponent.css";
import { connect } from "react-redux";

class ProductComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main_productComponent">
        {this.props.products.map((product) => {
          const { id, title, price, image, category } = product;
          return (
            <div className="productCard" key={id}>
              <Link to={`/product/${id}`} style={{ textDecoration: "none" }}>
                <div className="cards">
                  <div className="card">
                    <div className="image">
                      <img
                        src={image}
                        alt={title}
                        className="mainItem_image"
                      ></img>
                    </div>
                    <div className="card_content">
                      <div className="content_header">{title}</div>
                      <div className="content_metaPrice">$ {price}</div>
                      <div className="content_metaCategory">{category}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.allProducts.products,
  };
};

export default connect(mapStateToProps)(ProductComponentClass);
