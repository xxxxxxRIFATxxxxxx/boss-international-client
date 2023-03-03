import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, cart }) => {
    return (
        <div className="MainDiv">
            <Header cart={cart} />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
