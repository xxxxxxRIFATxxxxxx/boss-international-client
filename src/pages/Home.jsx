import React from "react";
import About from "../components/Home/About";
import Contact from "../components/Home/Contact";
import Hero from "../components/Home/Hero";
import Product from "../components/Home/Product";

const Home = ({ addProductToCart, cartIsSuccess }) => {
    return (
        <>
            <Hero />
            <Product
                addProductToCart={addProductToCart}
                cartIsSuccess={cartIsSuccess}
            />
            <About />
            <Contact />
        </>
    );
};

export default Home;
