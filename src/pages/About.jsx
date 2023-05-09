import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <section className="bg-white" id="about">
            <div className="gap-8 items-center px-4 md:px-0 py-8 container mx-auto xl:gap-16 md:grid md:grid-cols-2 sm:py-16">
                <img
                    className="w-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
                    alt=""
                />

                <div className="mt-8 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                        Shop like a BOSS with BOSS International.
                    </h2>

                    <p className="mb-6 font-light text-gray-500 md:text-lg">
                        BOSS International is an e-commerce website that offers
                        a wide range of products such as fashion accessories,
                        electronics, home appliances, and more. The website has
                        a sleek and user-friendly interface that makes shopping
                        easy and convenient for customers. BOSS International is
                        committed to providing high-quality products at
                        competitive prices, and customers can enjoy a
                        hassle-free shopping experience with secure payment
                        options and fast delivery services. With a focus on
                        customer satisfaction, BOSS International strives to
                        provide excellent customer service and support.
                    </p>

                    <Link
                        to="/shop"
                        className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Get started
                        <svg
                            className="ml-2 -mr-1 w-5 h-5"
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
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
