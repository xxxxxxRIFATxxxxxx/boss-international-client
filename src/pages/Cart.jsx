import React from "react";
import { Link } from "react-router-dom";

const Cart = ({
    cart,
    calculateTotalPrice,
    totalPrice,
    deleteProductFromCart,
}) => {
    return (
        <section className="bg-white relative" id="product">
            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Cart
                </h2>

                <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        Product
                                    </th>

                                    <th scope="col" className="px-4 py-3">
                                        Price
                                    </th>

                                    <th scope="col" className="px-4 py-3">
                                        Quantity
                                    </th>

                                    <th scope="col" className="px-4 py-3">
                                        Total
                                    </th>

                                    <th scope="col" className="px-4 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {cart.map((product) => {
                                    return (
                                        <tr
                                            key={product.id}
                                            className="border-b hover:bg-gray-100"
                                        >
                                            <th
                                                scope="row"
                                                className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                                            >
                                                <img
                                                    src={product?.thumbnail}
                                                    alt=""
                                                    className="w-auto h-8 mr-3"
                                                />

                                                {product?.title}
                                            </th>

                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                ${product?.price}
                                            </td>

                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                {product?.quantity}
                                            </td>

                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                $
                                                {product?.price *
                                                    product?.quantity}
                                            </td>

                                            <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                <button
                                                    onClick={() =>
                                                        deleteProductFromCart(
                                                            product?.id
                                                        )
                                                    }
                                                >
                                                    <i className="fa-solid fa-trash hover:text-primary-700"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg w-full md:w-[30%] lg:w-[20%] ml-auto mb-8">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">
                                        Cart Total
                                    </th>

                                    <th scope="col" className="px-4 py-3"></th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-b hover:bg-gray-100">
                                    <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        Subtotal
                                    </th>

                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {calculateTotalPrice(cart)}
                                    </td>
                                </tr>

                                <tr className="border-b hover:bg-gray-100">
                                    <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        Total
                                    </th>

                                    <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                        {calculateTotalPrice(cart)}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="w-full md:w-[30%] lg:w-[20%] ml-auto">
                    <Link
                        to="/checkout"
                        className="block w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        PROCEED TO CHECKOUT
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cart;
