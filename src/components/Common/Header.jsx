import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo.png";

const Header = ({ cart, calculateTotalPrice }) => {
    const { logout, currentUser } = useAuth();

    const [active, setActive] = useState("Home");
    const [showNav, setShowNav] = useState(false);
    const [stickyClass, setStickyClass] = useState("relative");

    const handleActive = (name) => {
        setActive(name);
    };

    const handleShowNav = () => {
        setShowNav((prevState) => {
            return !prevState;
        });
    };

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 50
                ? setStickyClass(
                      "fixed top-0 left-0 z-50 w-full text-black nav-sticky-bg transition-all"
                  )
                : setStickyClass("relative");
        }
    };

    useEffect(() => {
        if (window.location.pathname === "/shop") {
            setActive("Shop");
        } else if (window.location.pathname === "/team") {
            setActive("Team");
        } else if (window.location.pathname === "/faq") {
            setActive("Faq");
        }
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", stickNavbar);

        return () => {
            window.removeEventListener("scroll", stickNavbar);
        };
    }, []);

    return (
        <div
            className={`header-section transition-all duration-500 ease-in-out ${stickyClass}`}
        >
            <div className="bg-gray-50 py-1">
                <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
                    <div>
                        Welcome,{" "}
                        <span className="font-bold">
                            {currentUser?.email
                                ? `${currentUser?.firstName} ${currentUser?.lastName}`
                                : "Guest"}
                        </span>
                    </div>

                    <div className="text-sm hidden md:block">
                        Free Shipping for all Order of $99
                    </div>

                    <div className="flex items-center">
                        <Link
                            to="/cart"
                            className="relative inline-flex items-center p-3 text-sm font-medium text-center text-dark focus:outline-none focus:ring-0 mr-5"
                        >
                            <i className="fa-solid fa-cart-shopping text-sm hover:text-primary-700"></i>

                            <span className="sr-only">Cart</span>

                            <div className="absolute inline-flex items-center justify-center w-3 h-3 text-xs p-3 font-bold text-white bg-primary-700 border-2 border-white rounded-full -top-0 -right-4">
                                {cart?.length}
                            </div>
                        </Link>

                        <div className="text-sm">
                            item:{" "}
                            <span className="font-bold">
                                ${calculateTotalPrice(cart)}.00
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="bg-white px-4 md:px-0 py-2.5 shadow">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="" />

                        <span className="self-center text-xl font-semibold whitespace-nowrap text-primary">
                            BOSS International <br /> Logistics co, LTD
                        </span>
                    </Link>

                    <div className="flex md:order-2">
                        {!currentUser?.email && (
                            <Link
                                to="/login"
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            >
                                Login
                            </Link>
                        )}

                        {currentUser?.email && (
                            <button
                                onClick={logout}
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                            >
                                Logout
                            </button>
                        )}

                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                            onClick={handleShowNav}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                            showNav ? "block" : "hidden"
                        }`}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li onClick={() => handleActive("Home")}>
                                <NavLink
                                    to="/"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "Home"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Home
                                </NavLink>
                            </li>

                            <li onClick={() => handleActive("Shop")}>
                                <NavLink
                                    to="/shop"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "Shop"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Shop
                                </NavLink>
                            </li>

                            <li onClick={() => handleActive("About")}>
                                <a
                                    href="/#about"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "About"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    About
                                </a>
                            </li>

                            <li onClick={() => handleActive("Contact")}>
                                <a
                                    href="/#contact"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "Contact"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Contact
                                </a>
                            </li>

                            <li onClick={() => handleActive("Store")}>
                                <a
                                    href="/team"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "Team"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Team
                                </a>
                            </li>

                            <li onClick={() => handleActive("Faq")}>
                                <a
                                    href="/faq"
                                    className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                        active === "Faq"
                                            ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                            : "text-gray-700"
                                    }`}
                                >
                                    Faq
                                </a>
                            </li>

                            {currentUser?.email && (
                                <li onClick={() => handleActive("Orders")}>
                                    <Link
                                        to="/orders"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:hover:text-primary-700 md:p-0 ${
                                            active === "Orders"
                                                ? "text-white bg-primary-700 md:bg-transparent md:text-primary-700 font-bold"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        Orders
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
