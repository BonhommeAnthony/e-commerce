import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStart } from "../../redux/Products/products.actions";
import Product from "./Product/";
import "./styles.scss";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ProductResults = () => {
  const dispatch = useDispatch();
  const { products } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  if (!Array.isArray(products)) return null;

  if (products.length < 1) {
    return (
      <div className="productResults">
        <p>No search results</p>
      </div>
    );
  }

  return (
    <div className="products ">
      <h1>BROWSE PRODUCTS</h1>
      <div className="productResults">
        {products.map((product, pos) => {
          const { productThumbnail, productName, productPrice } = product;
          if (
            !productThumbnail ||
            !productName ||
            typeof productPrice === "undefined"
          )
            return null;

          const configProduct = {
            productThumbnail,
            productName,
            productPrice,
          };

          return <Product key={pos} {...configProduct} />;
        })}
      </div>
    </div>
  );
};

export default ProductResults;
