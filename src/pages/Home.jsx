import React from "react";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import LatestProduct from "../components/Home/LatestProduct";

const Home = ({ products, categories }) => {
    return (
        <>
            <Hero categories={categories} />
            <Categories categories={categories} />
            <Featured products={products} />
            <Banner />
            <LatestProduct products={products} />
            <Blogs />
        </>
    );
};

export default Home;
