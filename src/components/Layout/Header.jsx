import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cart }) => {
    return (
        <>
            <div className="humberger__menu__overlay"></div>

            <div className="humberger__menu__wrapper">
                <div className="humberger__menu__logo">
                    <Link href="#" className="logo header-logo">
                        <span className="primary-text">BOSS</span> INTERNATIONAL
                    </Link>
                </div>

                <div className="humberger__menu__cart">
                    <ul>
                        <li>
                            <Link to="/wishlist">
                                <i className="fa fa-heart"></i> <span>0</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag"></i>{" "}
                                <span>{cart.length}</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="header__cart__price">
                        item: <span>$00.00</span>
                    </div>
                </div>

                <div className="humberger__menu__widget">
                    <div className="header__top__right__language">
                        <img src="assets/img/language.png" alt="" />

                        <div>English</div>

                        <span className="arrow_carrot-down"></span>

                        <ul>
                            <li>
                                <Link to="/">Chines</Link>
                            </li>

                            <li>
                                <Link to="/">English</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="header__top__right__auth">
                        <Link to="/login">
                            <i className="fa fa-user"></i> Login
                        </Link>
                    </div>
                </div>

                <nav className="humberger__menu__nav mobile-menu">
                    <ul>
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/shop">Shop</Link>
                        </li>

                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>

                <div id="mobile-menu-wrap"></div>

                <div className="header__top__right__social">
                    <a href="#" target="_blank">
                        <i className="fa fa-facebook"></i>
                    </a>

                    <a href="#" target="_blank">
                        <i className="fa fa-twitter"></i>
                    </a>

                    <a href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                    </a>

                    <a href="#" target="_blank">
                        <i className="fa fa-pinterest-p"></i>
                    </a>
                </div>

                <div className="humberger__menu__contact">
                    <ul>
                        <li>
                            <i className="fa fa-envelope"></i>{" "}
                            bossinternational@gmail.com
                        </li>

                        <li>Free Shipping for all Order of $99</li>
                    </ul>
                </div>
            </div>

            <header className="header">
                <div className="header__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__left">
                                    <ul>
                                        <li>
                                            <i className="fa fa-envelope"></i>{" "}
                                            bossinternational@gmail.com
                                        </li>

                                        <li>
                                            Free Shipping for all Order of $99
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="header__top__right">
                                    <div className="header__top__right__social">
                                        <a href="#" target="_blank">
                                            <i className="fa fa-facebook"></i>
                                        </a>

                                        <a href="#" target="_blank">
                                            <i className="fa fa-twitter"></i>
                                        </a>

                                        <a href="#" target="_blank">
                                            <i className="fa fa-linkedin"></i>
                                        </a>

                                        <a href="#" target="_blank">
                                            <i className="fa fa-pinterest-p"></i>
                                        </a>
                                    </div>

                                    <div className="header__top__right__language">
                                        <img
                                            src="assets/img/language.png"
                                            alt=""
                                        />

                                        <div>English</div>

                                        <span className="arrow_carrot-down"></span>

                                        <ul>
                                            <li>
                                                <Link to="#">Chines</Link>
                                            </li>
                                            <li>
                                                <Link to="#">English</Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="header__top__right__auth">
                                        <Link to="/login">
                                            <i className="fa fa-user"></i> Login
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <Link to="/" className="logo header-logo">
                                    <span className="primary-text">BOSS</span>{" "}
                                    INTERNATIONAL
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active">
                                        <Link href="/">Home</Link>
                                    </li>

                                    <li>
                                        <Link href="/shop">Shop</Link>
                                    </li>

                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>

                                    <li>
                                        <Link href="/contact">Contact</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li>
                                        <Link to="/wishlist">
                                            <i className="fa fa-heart"></i>{" "}
                                            <span>0</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cart">
                                            <i className="fa fa-shopping-bag"></i>{" "}
                                            <span>{cart.length}</span>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="header__cart__price">
                                    item: <span>$00.00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
