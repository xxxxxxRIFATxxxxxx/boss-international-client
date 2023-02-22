import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import Spinner from "../Common/Spinner";

const LatestProduct = () => {
    const { products } = useProducts();

    return (
        <section className="latest-product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Latest Products</h4>

                            {products.length === 0 && (
                                <div className="text-center mx-auto">
                                    <Spinner />
                                </div>
                            )}

                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {products.slice(0, 3).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="latest-prdouct__slider__item">
                                    {products.slice(3, 6).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Top Rated Products</h4>

                            {products.length === 0 && (
                                <div className="text-center mx-auto">
                                    <Spinner />
                                </div>
                            )}

                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {products.slice(6, 9).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="latest-prdouct__slider__item">
                                    {products.slice(9, 12).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="latest-product__text">
                            <h4>Review Products</h4>

                            {products.length === 0 && (
                                <div className="text-center mx-auto">
                                    <Spinner />
                                </div>
                            )}

                            <div className="latest-product__slider owl-carousel">
                                <div className="latest-prdouct__slider__item">
                                    {products.slice(0, 3).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>

                                <div className="latest-prdouct__slider__item">
                                    {products.slice(3, 6).map((product) => {
                                        return (
                                            <Link
                                                key={product._id}
                                                to={`/productDetails/${product._id}`}
                                                className="latest-product__item"
                                            >
                                                <div className="latest-product__item__pic">
                                                    <img
                                                        src={product.thumbnail}
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="latest-product__item__text">
                                                    <h6>{product.title}</h6>
                                                    <span>
                                                        ${product.price}.00
                                                    </span>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LatestProduct;
