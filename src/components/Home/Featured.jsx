import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";
import SuccessAlert from "../Common/SuccessAlert";

const Featured = ({ products, handleCart, showSuccessAlert }) => {
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
                                        <Link
                                            to={`/productDetails/${product?._id}`}
                                        >
                                            <img
                                                className="img-fluid"
                                                src={product?.thumbnail}
                                                alt="image"
                                            />
                                        </Link>

                                        <ul className="featured__item__pic__hover">
                                            <li style={{ cursor: "pointer" }}>
                                                <a
                                                    onClick={() =>
                                                        handleCart({
                                                            id: product._id,
                                                            title: product.title,
                                                            price: product.price,
                                                            thumbnail:
                                                                product.thumbnail,
                                                            quantity:
                                                                parseInt(1),
                                                        })
                                                    }
                                                >
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

            {showSuccessAlert && (
                <div
                    style={{
                        position: "fixed",
                        bottom: 0,
                        right: 0,
                        zIndex: 10,
                    }}
                >
                    <SuccessAlert message="Product added successfully!" />
                </div>
            )}
        </section>
    );
};

export default Featured;
