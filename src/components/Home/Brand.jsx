import React from "react";
import brand1Image from "../../images/brand-1.png";
import brand2Image from "../../images/brand-2.png";
import brand3Image from "../../images/brand-3.png";
import brand4Image from "../../images/brand-4.png";
import brand5Image from "../../images/brand-5.png";
import brand6Image from "../../images/brand-6.png";

const Brand = () => {
    return (
        <section className="bg-white" id="about">
            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Our Brands
                </h2>

                <div className="gap-8 items-center px-4 md:px-0 py-8 container mx-auto xl:gap-16 md:grid md:grid-cols-3 lg:grid-cols-6 sm:py-16">
                    <div>
                        <img className="w-full" src={brand1Image} alt="" />
                    </div>

                    <div>
                        <img className="w-full" src={brand2Image} alt="" />
                    </div>

                    <div>
                        <img className="w-full" src={brand3Image} alt="" />
                    </div>

                    <div>
                        <img className="w-full" src={brand4Image} alt="" />
                    </div>

                    <div>
                        <img className="w-full" src={brand5Image} alt="" />
                    </div>

                    <div>
                        <img className="w-full" src={brand6Image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brand;
