import React from "react";

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
                        Let's create more tools and ideas that brings us
                        together.
                    </h2>

                    <p className="mb-6 font-light text-gray-500 md:text-lg">
                        Flowbite helps you connect with friends and communities
                        of people who share your interests. Connecting with your
                        friends and family as well as discovering new ones is
                        easy with features like Groups.
                    </p>

                    <a
                        href="/#product"
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
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
