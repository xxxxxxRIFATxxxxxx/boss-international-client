import React from "react";
import discountImage1 from "../../images/discount-img-1.webp";
import discountImage2 from "../../images/discount-img-2.webp";
import discountImage3 from "../../images/discount-image-3.webp";
import discountImage4 from "../../images/discount-image-4.webp";
import { Link } from "react-router-dom";

const Discount = () => {
    return (
        <section className="bg-white" id="about">
            <div className="gap-8 items-center px-4 md:px-0 py-8 container mx-auto xl:gap-8 md:grid md:grid-cols-2 sm:py-16">
                <div className="relative mb-8 md:mb-0">
                    <Link to="/category?category=Clothing & Apparel">
                        <img className="w-full" src={discountImage1} alt="" />

                        <div className="absolute top-20 left-20">
                            <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">
                                Dress Collection
                            </h2>

                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-400">
                                Sale of 50%
                            </h2>
                        </div>
                    </Link>
                </div>

                <div>
                    <div className="flex items-center mb-8">
                        <div className="mr-8">
                            <Link to="/category?category=Clothing & Apparel">
                                <img
                                    className="w-full"
                                    src={discountImage3}
                                    alt=""
                                />
                            </Link>
                        </div>

                        <div>
                            <Link to="/category?category=Clothing & Apparel">
                                <img
                                    className="w-full"
                                    src={discountImage4}
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <Link to="/category?category=Clothing & Apparel">
                            <img
                                className="w-full"
                                src={discountImage2}
                                alt=""
                            />

                            <div className="absolute top-10 left-10 w-fit h-fit m-auto">
                                <h2 className="text-4xl tracking-tight font-extrabold text-gray-900">
                                    Mini backpack
                                </h2>

                                <h2 className="text-3xl tracking-tight font-extrabold text-gray-400">
                                    Sale of 10%
                                </h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discount;
