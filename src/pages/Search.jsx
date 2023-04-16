import React, { useEffect, useState } from "react";
import Spinner from "../components/Common/Spinner";
import SuccessAlert from "../components/Common/SuccessAlert";
import useProducts from "../hooks/useProducts";
import useCart from "../hooks/useCart";
import { Link, useSearchParams } from "react-router-dom";

const Search = () => {
    const [products, setProducts] = useState([]);
    const { getProductsByTitle } = useProducts();
    const { isSuccess: cartIsSuccess, addProductToCart } = useCart();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");

    let content;

    if (products?.length === 0) {
        content = (
            <div className="flex px-4 py-3 justify-center">
                <Spinner />
            </div>
        );
    } else if (products === "No result found!") {
        content = (
            <h4 className="text-2xl tracking-tight text-center text-gray-900">
                {products}
            </h4>
        );
    } else {
        content = (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 8).map((product) => {
                    return (
                        <div
                            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                            key={product?._id}
                        >
                            <Link to={`/productDetails/${product?._id}`}>
                                <img
                                    className="p-8 rounded-t-lg"
                                    src={product?.thumbnail}
                                    alt=""
                                />
                            </Link>

                            <div className="px-5 pb-5">
                                <Link to={`/productDetails/${product?._id}`}>
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
                                                id: product?._id,
                                                title: product?.title,
                                                price: product?.price,
                                                thumbnail: product?.thumbnail,
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
        );
    }

    useEffect(() => {
        getProductsByTitle(title).then((data) => {
            setProducts(data);
        });
    }, [title]);

    return (
        <section className="bg-white relative" id="product">
            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Search Result For "{title}"
                </h2>

                {cartIsSuccess && (
                    <div className="fixed bottom-0 right-0">
                        <SuccessAlert message="Product added successfully!" />
                    </div>
                )}

                {content}
            </div>
        </section>
    );
};

export default Search;
