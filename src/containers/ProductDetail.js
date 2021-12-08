import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
import "./ProductDetail.css";

const ProductDetail = () => {
  let rating = Math.floor(Math.random() * 10);
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(selectedProduct(productId));
    }
    return () => {
      dispatch(removeSelectedProduct());
      rating = null;
    };
  }, [productId]);
  console.log(product);
  const { title, image, category, price, description } = product;
  return (
    <div className="main_productDetail">
      {Object.keys(product).length !== 0 ? (
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
              Rating: <span>{rating}/10</span>
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
};

export default ProductDetail;
