import React, { useEffect } from "react";
import axios from "axios";
import { fetchProducts, setProducts } from "../redux/actions/productActions";
import { useDispatch } from "react-redux";
import "./productListing.css";
import ProductComponent from "./ProductComponent";
import ProductComponentClass from "./ProductComponentClass";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  // console.log(products);

  return (
    <div className="productListing">
      <ProductComponentClass />
    </div>
  );
};

export default ProductListing;
