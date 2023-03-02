import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../Common/Spinner";

// Swiper
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Categories = ({ categories }) => {
    return (
        <section className="categories">
            <div className="container">
                {categories?.length === 0 && (
                    <div className="text-center">
                        <Spinner />
                    </div>
                )}

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                >
                    {categories.map((category) => {
                        return (
                            <SwiperSlide key={category?._id}>
                                <div className="categories__item light-silver-bg">
                                    <img
                                        className="img-fluid"
                                        src={category?.image}
                                        alt=""
                                    />

                                    <h5>
                                        <Link
                                            href={`/shop?category=${category?.title}`}
                                        >
                                            {category?.title}
                                        </Link>
                                    </h5>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default Categories;
