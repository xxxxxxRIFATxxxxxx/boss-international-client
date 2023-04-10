import React from "react";
import Product from "../components/Home/Product";

const Shop = ({ addProductToCart, cartIsSuccess }) => {
    return (
        <Product
            addProductToCart={addProductToCart}
            cartIsSuccess={cartIsSuccess}
        />
    );
};

export default Shop;
