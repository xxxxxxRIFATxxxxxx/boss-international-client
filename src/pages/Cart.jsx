import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, totalPrice, deleteProductFromCart }) => {
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
                                <h2 className="pb-2">Shopping Cart</h2>
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
                                                Products
                                            </th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {cart.map((product) => {
                                            return (
                                                <tr>
                                                    <td className="shoping__cart__item">
                                                        <img
                                                            style={{
                                                                width: "5rem",
                                                            }}
                                                            src={
                                                                product.thumbnail
                                                            }
                                                            alt=""
                                                        />
                                                        <h5>
                                                            {product?.title}
                                                        </h5>
                                                    </td>
                                                    <td className="shoping__cart__price">
                                                        ${product?.price}.00
                                                    </td>
                                                    <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <div className="pro-qty pt-2">
                                                                {
                                                                    product.quantity
                                                                }
                                                            </div>
                                                        </div>
                                                    </td>

                                                    <td className="shoping__cart__total">
                                                        $
                                                        {product?.price *
                                                            product?.quantity}
                                                        .00
                                                    </td>

                                                    <td
                                                        onClick={() =>
                                                            deleteProductFromCart(
                                                                product.id
                                                            )
                                                        }
                                                        className="shoping__cart__item__close"
                                                    >
                                                        <span className="icon_close"></span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="#" className="primary-btn cart-btn">
                                    CONTINUE SHOPPING
                                </a>
                                <a
                                    href="#"
                                    className="primary-btn cart-btn cart-btn-right"
                                >
                                    <span className="icon_loading"></span>
                                    Upadate Cart
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input
                                            type="text"
                                            placeholder="Enter your coupon code"
                                        />
                                        <button
                                            type="submit"
                                            className="site-btn"
                                        >
                                            APPLY COUPON
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>
                                        Subtotal
                                        <span>${totalPrice}</span>
                                    </li>
                                    <li>
                                        Total <span>${totalPrice}</span>
                                    </li>
                                </ul>
                                <Link to="/checkout" className="primary-btn">
                                    PROCEED TO CHECKOUT
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;
