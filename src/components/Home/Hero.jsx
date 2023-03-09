import React from "react";
import { Link } from "react-router-dom";
import useCategories from "../../hooks/useCategories";
import heroIcon from "../../images/hero-icon.svg";
import Spinner from "../Common/Spinner";

const Hero = () => {
    const { categories } = useCategories();

    return (
        <section className="bg-white" id="about">
            <div className="gap-8 px-4 md:px-0 py-8 container mx-auto xl:gap-16 md:grid md:grid-cols-12 sm:py-16">
                <div className="z-20 w-full bg-white divide-y divide-gray-100 rounded-lg shadow col-span-12 md:col-span-5 lg:col-span-3 mb-8 md:mb-0">
                    <div className="block px-4 py-2 font-medium text-center text-white rounded-t-lg bg-primary-700">
                        All Categories
                    </div>

                    <div className="divide-y divide-gray-100">
                        {categories?.length === 0 && (
                            <div className="flex px-4 py-3 justify-center">
                                <Spinner />
                            </div>
                        )}

                        {categories.map((category) => {
                            return (
                                <Link
                                    to={`/category?category=${category?.title}`}
                                    className="flex px-4 py-3 hover:bg-gray-100"
                                    key={category._id}
                                >
                                    <div className="w-full pl-3 text-center">
                                        <div className="text-gray-500 text-sm mb-1.5">
                                            {category?.title}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="col-span-12 md:col-span-7 lg:col-span-9">
                    <section className="bg-primary-50 h-full flex items-center rounded-lg">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 p-10 lg:p-20">
                            <div className="flex items-center text-center lg:text-start">
                                <div>
                                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                                        Product <br />
                                        100% Authentic
                                    </h1>

                                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                                        Free Pickup and Delivery Available
                                    </p>

                                    <a
                                        href="/#product"
                                        className="inline-flex items-center justify-center px-5 py-3 mr-0 md:mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 mb-2 lg:mb-0"
                                    >
                                        Shop Now
                                        <svg
                                            className="w-5 h-5 ml-2 -mr-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </a>

                                    <a
                                        href="/#product"
                                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                                    >
                                        Speak to Sales
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <img className="w-full" src={heroIcon} alt="" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Hero;
