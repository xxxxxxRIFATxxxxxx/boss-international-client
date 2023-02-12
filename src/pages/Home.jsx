import React from "react";
import Banner from "../components/Home/Banner";
import Blogs from "../components/Home/Blogs";
import Categories from "../components/Home/Categories";
import Featured from "../components/Home/Featured";
import Hero from "../components/Home/Hero";
import LatestProduct from "../components/Home/LatestProduct";
import Layout from "../components/Layout/Layout";

const Home = () => {
    return (
        <Layout>
            <Hero />
            <Categories />
            <Featured />
            <Banner />
            <LatestProduct />
            <Blogs />
        </Layout>
    );
};

export default Home;
