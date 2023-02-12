import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return (
        <div className="MainDiv">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
