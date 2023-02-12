import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";

const Hero = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/category`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data.result);
            });
    }, [categories]);

    return (
        <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="hero__categories">
                            <div className="hero__categories__all">
                                <i className="fa fa-bars"></i>
                                <span>All categories</span>
                            </div>

                            {categories.length === 0 && (
                                <div className="text-center py-5">
                                    <Spinner />
                                </div>
                            )}

                            <ul
                                className={`${
                                    categories.length > 0 ? "block" : "d-none"
                                }`}
                            >
                                {categories.map((category) => {
                                    return (
                                        <li key={category._id}>
                                            <Link
                                                to={`/shop?category=${category.title}`}
                                                className="category-list-item"
                                            >
                                                {category.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="hero__search">
                            <div className="hero__search__form">
                                <form action="#">
                                    <div className="hero__search__categories">
                                        All Categories
                                        <span className="arrow_carrot-down"></span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="What do yo u need?"
                                    />
                                    <button type="submit" className="site-btn">
                                        SEARCH
                                    </button>
                                </form>
                            </div>

                            <div className="hero__search__phone">
                                <div className="hero__search__phone__icon">
                                    <i className="fa fa-phone"></i>
                                </div>
                                <div className="hero__search__phone__text">
                                    <h5>1234567890</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>

                        <div className="hero__item hero-section-bg">
                            <div className="hero__text">
                                <span>MEGA SALE</span>
                                <h2>
                                    Product <br />
                                    100% Authentic
                                </h2>
                                <p>Free Pickup and Delivery Available</p>

                                <Link to="/shop" className="primary-btn">
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
