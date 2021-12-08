import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./ProductComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(products);

  return (
    <div className="main_productComponent">
      {products.map((product) => {
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
};

export default ProductComponent;
