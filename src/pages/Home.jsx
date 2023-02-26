import React from "react";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import LatestProduct from "../components/Home/LatestProduct";
import Layout from "../components/Layout/Layout";
import useCategories from "../hooks/useCategories";
import useProducts from "../hooks/useProducts";

const Home = () => {
    const { products } = useProducts();
    const { categories } = useCategories();

    return (
        <Layout>
            <Hero categories={categories} />
            <Categories categories={categories} />
            <Featured products={products} />
            <Banner />
            <LatestProduct products={products} />
            <Blogs />
        </Layout>
    );
};

export default Home;
