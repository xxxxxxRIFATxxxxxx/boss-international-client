import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, cart, calculateTotalPrice }) => {
    return (
        <>
            <Header cart={cart} calculateTotalPrice={calculateTotalPrice} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
