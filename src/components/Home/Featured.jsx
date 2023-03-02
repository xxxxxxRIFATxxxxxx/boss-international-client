import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";

const Featured = ({ products }) => {
    return (
        <section className="featured spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title">
                            <h2>Featured Product</h2>
                        </div>
                    </div>
                </div>

                {products?.length === 0 && (
                    <div className="text-center mx-auto">
                        <Spinner />
                    </div>
                )}

                <div className="row featured__filter">
                    {products.slice(0, 8).map((product) => {
                        return (
                            <div
                                key={product?._id}
                                className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat"
                            >
                                <div className="featured__item">
                                    <div
                                        className="featured__item__pic set-bg"
                                        data-setbg={product?.thumbnail}
                                    >
                                        <img
                                            className="img-fluid"
                                            src={product?.thumbnail}
                                            alt="image"
                                        />
                                        <ul className="featured__item__pic__hover">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-heart"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-retweet"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="featured__item__text">
                                        <h6>
                                            <Link
                                                to={`/productDetails/${product?._id}`}
                                            >
                                                {product?.title}
                                            </Link>
                                        </h6>
                                        <h5>${product?.price}.00</h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Featured;
