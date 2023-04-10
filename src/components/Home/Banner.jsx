import React from "react";
import bannerImage from "../../images/banner.webp";

const Banner = () => {
    return (
        <section className="relative">
            <img className="w-full" src={bannerImage} alt="" />

            {/* For Web */}
            <div className="w-80 h-fit text-center absolute top-0 bottom-0 right-96 m-auto hidden lg:block">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                    SHOP TOGETHER
                </h2>

                <p className="mb-8">
                    Quisquemos sodales suscipit tortor ditaemcos condimentum de
                    cosmo lacus.
                </p>

                <a
                    href="/#product"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Shop Now
                </a>
            </div>

            {/* For Tab */}
            <div className="w-80 h-fit text-center absolute top-0 bottom-0 right-0 left-0 m-auto hidden md:block lg:hidden">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                    SHOP TOGETHER
                </h2>

                <p className="mb-8">
                    Quisquemos sodales suscipit tortor ditaemcos condimentum de
                    cosmo lacus.
                </p>

                <a
                    href="/#product"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Shop Now
                </a>
            </div>

            {/* For Mobile */}
            <div className="w-80 h-fit text-center absolute top-0 bottom-0 right-0 left-0 m-auto block md:hidden">
                <a
                    href="/#product"
                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Shop Now
                </a>
            </div>
        </section>
    );
};

export default Banner;
