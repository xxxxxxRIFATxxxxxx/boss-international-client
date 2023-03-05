import React, { useEffect, useState } from "react";
import useOrders from "../hooks/useOrders";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { getUserOrders } = useOrders();

    const user = JSON.parse(localStorage.getItem("user"));
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    useEffect(() => {
        getUserOrders(user.userId)
            .then((data) => setOrders(data))
            .catch((err) => console.log(err));
    });
    return (
        <>
            {/* <!-- Breadcrumb Section Begin --> */}
            <section
                className="breadcrumb-section"
                style={{ backgroundColor: "#7fad39" }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2 className="pb-2">My Orders</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">
                                                Order ID
                                            </th>

                                            <th>Status</th>

                                            <th>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {orders.map((order) => {
                                            return (
                                                <tr>
                                                    <td className="shoping__cart__item">
                                                        <h5>{order?._id}</h5>
                                                    </td>

                                                    <td className="shoping__cart__price">
                                                        {order?.status}
                                                    </td>

                                                    <td className="shoping__cart__price">
                                                        ${order?.totalPrice}.00
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Orders;
