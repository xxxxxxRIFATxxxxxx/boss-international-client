import React, { useEffect, useState } from "react";
import Spinner from "../components/Common/Spinner";
import useAuth from "../hooks/useAuth";
import useOrders from "../hooks/useOrders";

const Order = () => {
    const { getOrderByUserId } = useOrders();
    const { currentUser } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrderByUserId(currentUser.userId)
            .then((data) => setOrders(data))
            .catch((error) => console.log(error));
    }, [currentUser.userId]);

    return (
        <section className="bg-white relative" id="product">
            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    My Orders
                </h2>

                {orders.length === 0 ? (
                    <div className="flex justify-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg mb-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-4 py-3">
                                            Order ID
                                        </th>

                                        <th scope="col" className="px-4 py-3">
                                            Status
                                        </th>

                                        <th scope="col" className="px-4 py-3">
                                            Total
                                        </th>

                                        <th scope="col" className="px-4 py-3">
                                            Date
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {orders.map((order) => {
                                        return (
                                            <tr
                                                key={order?._id}
                                                className="border-b hover:bg-gray-100"
                                            >
                                                <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    {order?._id}
                                                </th>

                                                <td className="px-4 py-2 font-medium text-primary-700 whitespace-nowrap">
                                                    {order?.status}
                                                </td>

                                                <td className="px-4 py-2 text-primary-700 font-medium whitespace-nowrap">
                                                    #{order?.totalPrice}
                                                </td>

                                                <td className="px-4 py-2 text-gray-900 whitespace-nowrap">
                                                    {order?.createdAt}
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Order;
