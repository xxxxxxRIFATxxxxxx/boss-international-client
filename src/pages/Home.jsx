import React from "react";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Product from "../components/Home/Product";
import Banner from "../components/Home/Banner";
import Discount from "../components/Home/Discount";
import Brand from "../components/Home/Brand";

const Home = ({ addProductToCart, cartIsSuccess }) => {
    return (
        <>
            <Hero />
            <Discount />
            <Product
                addProductToCart={addProductToCart}
                cartIsSuccess={cartIsSuccess}
            />
            <Banner />
            <Brand />
            <About />
            <Contact />
        </>
    );
};

export default Home;
