import React from "react";
import Banner from "../components/Home/Banner";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import LatestProduct from "../components/Home/LatestProduct";

const Home = ({ products, categories, handleCart, showSuccessAlert }) => {
    return (
        <>
            <Hero categories={categories} />
            <Categories categories={categories} />
            <Featured
                products={products}
                handleCart={handleCart}
                showSuccessAlert={showSuccessAlert}
            />
            <Banner />
            <LatestProduct products={products} />
        </>
    );
};

export default Home;
