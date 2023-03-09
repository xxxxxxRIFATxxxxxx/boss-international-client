import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../components/Common/Spinner";
import SuccessAlert from "../components/Common/SuccessAlert";
import useProducts from "../hooks/useProducts";

const ProductDetails = ({ addProductToCart, cartIsSuccess }) => {
    const { productId } = useParams();
    const { getProduct, getProductsByCategory } = useProducts();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [currentImage, setCurrentImage] = useState("");

    const handleCurrentImage = (img) => {
        setCurrentImage(img);
    };

    useEffect(() => {
        getProduct(productId).then((data) => {
            setProduct(data);
            setCurrentImage(data.thumbnail);
            getProductsByCategory(data.category).then((data) => {
                setProducts(data);
            });
        });
    }, [productId]);

    return (
        <section className="bg-white" id="about">
            {!product?.title && (
                <div className="flex px-4 py-3 justify-center mt-8">
                    <Spinner />
                </div>
            )}

            {product?.title && (
                <div className="gap-8 px-4 md:px-0 py-8 container mx-auto xl:gap-16 md:grid md:grid-cols-12 sm:py-16 mb-4">
                    <div className="col-span-12 md:col-span-6 lg:col-span-2 hidden lg:block"></div>

                    <div className="col-span-12 md:col-span-6 lg:col-span-4 mb-8 md:mb-0">
                        <img
                            className="w-full mr-auto mb-5"
                            src={currentImage}
                            alt=""
                        />

                        <div>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={20}
                                pagination={false}
                                modules={[]}
                                className="mySwiper"
                            >
                                {product?.images?.map((image) => {
                                    return (
                                        <SwiperSlide
                                            key={Math.random() * Math.random()}
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleCurrentImage(image)
                                            }
                                        >
                                            <img
                                                className="w-full"
                                                src={image}
                                                alt=""
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                            {product?.title}
                        </h2>

                        <div className="flex items-center mb-4">
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>First star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Second star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Third star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Fourth star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <svg
                                aria-hidden="true"
                                className="w-5 h-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Fifth star</title>
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>

                            <span className="bg-primary-100 text-primary-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                5.0
                            </span>
                        </div>

                        <div className="text-3xl font-bold text-gray-900 mb-4">
                            ${product?.price}
                        </div>

                        <p className="mb-4 font-light text-gray-500 md:text-lg">
                            {product?.description}
                        </p>

                        <div className="grid grid-cols-12 gap-4 mb-6">
                            <div className="col-span-3">
                                <input
                                    type="number"
                                    className="bg-gray-50 text-center border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full px-2.5 py-3"
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                />
                            </div>

                            <div className="col-span-9">
                                <button
                                    onClick={() => {
                                        addProductToCart({
                                            id: product?._id,
                                            title: product?.title,
                                            price: product?.price,
                                            thumbnail: product?.thumbnail,
                                            quantity: parseInt(quantity),
                                        });
                                    }}
                                    className="text-white w-full bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-base font-bold">
                                    Availability
                                </h4>

                                <p>{product?.availability}</p>
                            </div>

                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-base font-bold">
                                    Shipping
                                </h4>

                                <p>{product?.shipping}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <h4 className="text-base font-bold">Weight</h4>

                                <p>{product?.weight}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-6 lg:col-span-2 hidden lg:block"></div>
                </div>
            )}

            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Related Product
                </h2>

                {products?.length === 0 && (
                    <div className="flex px-4 py-3 justify-center">
                        <Spinner />
                    </div>
                )}

                {cartIsSuccess && (
                    <div className="fixed bottom-0 right-0">
                        <SuccessAlert message="Product added successfully!" />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => {
                        return (
                            <div
                                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                                key={product._id}
                            >
                                <Link to={`/productDetails/${product?._id}`}>
                                    <img
                                        className="p-8 rounded-t-lg"
                                        src={product.thumbnail}
                                        alt=""
                                    />
                                </Link>

                                <div className="px-5 pb-5">
                                    <Link
                                        to={`/productDetails/${product?._id}`}
                                    >
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                            {product?.title}
                                        </h5>
                                    </Link>

                                    <div className="flex items-center mt-2.5 mb-5">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>First star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>

                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Second star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>

                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Third star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>

                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Fourth star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>

                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-yellow-300"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <title>Fifth star</title>
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                        </svg>

                                        <span className="bg-primary-100 text-primary-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            5.0
                                        </span>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900">
                                            ${product?.price}
                                        </span>

                                        <button
                                            onClick={() => {
                                                addProductToCart({
                                                    id: product._id,
                                                    title: product.title,
                                                    price: product.price,
                                                    thumbnail:
                                                        product.thumbnail,
                                                    quantity: parseInt(1),
                                                });
                                            }}
                                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                        >
                                            Add to cart
                                        </button>
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

export default ProductDetails;
