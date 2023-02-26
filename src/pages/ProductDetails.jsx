import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import useProducts from "../hooks/useProducts";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../components/Common/Spinner";

const ProductDetails = () => {
    const { productId } = useParams();
    const { getProduct, products } = useProducts();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct(productId).then((data) => setProduct(data));
    }, [productId]);

    return (
        <Layout>
            {product.title ? (
                <>
                    {/* <!-- Breadcrumb Section Begin --> */}
                    <section
                        className="breadcrumb-section"
                        style={{ backgroundColor: "#7fad39" }}
                    >
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="breadcrumb__text">
                                        <h2 className="pb-2">
                                            {product?.title}
                                        </h2>

                                        <div className="breadcrumb__option">
                                            <Link to="/">Home</Link>
                                            <Link
                                                to={`/categoryDetails/category=${product?.category}`}
                                            >
                                                {product?.category}
                                            </Link>
                                            <span>{product?.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Breadcrumb Section End --> */}

                    {/* <!-- Product Details Section Begin --> */}
                    <section className="product-details spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__pic">
                                        <div className="product__details__pic__item">
                                            <img
                                                className="product__details__pic__item--large"
                                                src={product?.thumbnail}
                                                alt=""
                                            />
                                        </div>

                                        <div className="product__details__pic__slider ">
                                            <Swiper
                                                slidesPerView={4}
                                                spaceBetween={30}
                                                navigation={true}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                autoplay={true}
                                                className="mySwiper"
                                            >
                                                {product?.images?.map(
                                                    (image) => {
                                                        return (
                                                            <SwiperSlide
                                                                className="border"
                                                                key={Math.random()}
                                                            >
                                                                <img
                                                                    data-imgbigurl={
                                                                        image
                                                                    }
                                                                    src={image}
                                                                    alt=""
                                                                />
                                                            </SwiperSlide>
                                                        );
                                                    }
                                                )}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="product__details__text">
                                        <h3>{product?.title}</h3>

                                        <div className="product__details__rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            {/* <i className="fa fa-star-half-o"></i> */}
                                            <span>
                                                ({product?.reviews?.length}{" "}
                                                reviews)
                                            </span>
                                        </div>

                                        <div className="product__details__price">
                                            ${product?.price}.00
                                        </div>
                                        <p>{product?.description}</p>

                                        <div className="product__details__quantity">
                                            <div className="quantity">
                                                <div className="pro-qty">
                                                    <input
                                                        type="text"
                                                        value="1"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <a href="#" className="primary-btn">
                                            ADD TO CARD
                                        </a>

                                        <a href="#" className="heart-icon">
                                            <span className="icon_heart_alt"></span>
                                        </a>

                                        <ul>
                                            <li>
                                                <b>Availability</b>{" "}
                                                <span>
                                                    {product?.availability}
                                                </span>
                                            </li>

                                            <li>
                                                <b>Shipping</b>
                                                <span>
                                                    {product?.shipping}{" "}
                                                    <samp>
                                                        Free pickup today
                                                    </samp>
                                                </span>
                                            </li>

                                            <li>
                                                <b>Weight</b>{" "}
                                                <span>{product?.weight}</span>
                                            </li>

                                            <li>
                                                <b>Share on</b>
                                                <div className="share">
                                                    <a href="#">
                                                        <i className="fa fa-facebook"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-twitter"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-instagram"></i>
                                                    </a>
                                                    <a href="#">
                                                        <i className="fa fa-pinterest"></i>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="product__details__tab">
                                        <ul
                                            className="nav nav-tabs"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    data-toggle="tab"
                                                    href="#tabs-1"
                                                    role="tab"
                                                    aria-selected="true"
                                                >
                                                    Description
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-toggle="tab"
                                                    href="#tabs-2"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Information
                                                </a>
                                            </li>

                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    data-toggle="tab"
                                                    href="#tabs-3"
                                                    role="tab"
                                                    aria-selected="false"
                                                >
                                                    Reviews{" "}
                                                    <span>
                                                        (
                                                        {
                                                            product?.reviews
                                                                ?.length
                                                        }
                                                        )
                                                    </span>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div
                                                className="tab-pane active"
                                                id="tabs-1"
                                                role="tabpanel"
                                            >
                                                <div className="product__details__tab__desc">
                                                    <h6>
                                                        Products Description
                                                    </h6>

                                                    <p>
                                                        {product?.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane"
                                                id="tabs-2"
                                                role="tabpanel"
                                            >
                                                <div className="product__details__tab__desc">
                                                    <h6>Products Infomation</h6>

                                                    <p>
                                                        <p>
                                                            {
                                                                product?.description
                                                            }
                                                        </p>
                                                    </p>
                                                </div>
                                            </div>

                                            <div
                                                className="tab-pane"
                                                id="tabs-3"
                                                role="tabpanel"
                                            >
                                                <div className="product__details__tab__desc">
                                                    <h6>Products Reviews</h6>

                                                    <p>No reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Product Details Section End --> */}

                    {/* <!-- Related Product Section Begin --> */}
                    <section className="related-product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title related__product__title">
                                        <h2>Related Product</h2>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                {products.map((relatedProduct) => {
                                    if (
                                        relatedProduct.category ===
                                        product.category
                                    ) {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-sm-6">
                                                <div className="product__item">
                                                    <div className="product__item__pic">
                                                        <img
                                                            className="img-fluid"
                                                            src={
                                                                relatedProduct?.thumbnail
                                                            }
                                                            alt=""
                                                        />

                                                        <ul className="product__item__pic__hover">
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
                                                    <div className="product__item__text">
                                                        <h6>
                                                            <a href="#">
                                                                {
                                                                    relatedProduct?.title
                                                                }
                                                            </a>
                                                        </h6>
                                                        <h5>
                                                            $
                                                            {
                                                                relatedProduct?.price
                                                            }
                                                            .00
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </section>
                    {/* <!-- Related Product Section End --> */}
                </>
            ) : (
                <div className="text-center mx-auto py-5">
                    <Spinner />
                </div>
            )}
        </Layout>
    );
};

export default ProductDetails;
