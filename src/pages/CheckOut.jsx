import React, { useState } from "react";
import useOrders from "../hooks/useOrders";

const CheckOut = ({ cart, totalPrice }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const user = JSON.parse(localStorage.getItem("user"));
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postCode, setPostCode] = useState("");
    const [notes, setNotes] = useState("");

    const { createOrder } = useOrders();

    const handleCreateOrder = async (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");
        setIsSuccess(false);
        setIsError(false);
        setIsLoading(true);

        const order = {
            userId: user.userId,
            firstName,
            lastName,
            email,
            phone,
            country,
            streetAddress,
            city,
            state,
            postCode,
            notes,
            products: cart,
            totalPrice,
            status: "Processing",
        };

        createOrder(order)
            .then((result) => {
                if (result === "Success") {
                    setIsSuccess(true);
                    setIsLoading(false);
                    setSuccessMessage("Order created successfully!");

                    setFirstName("");
                    setLastName("");
                    setEmail("");
                    setPhone("");
                    setCountry("");
                    setStreetAddress("");
                    setCity("");
                    setState("");
                    setPostCode("");
                    setNotes("");
                } else {
                    setIsError(true);
                    setIsLoading(false);
                    setErrorMessage("Something went wrong try again!");
                }

                setTimeout(() => {
                    setSuccessMessage("");
                    setErrorMessage("");
                    setIsSuccess(false);
                    setIsError(false);
                    setIsLoading(false);
                }, 3000);
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false);
                setErrorMessage(error);
            });
    };

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
                                <h2 className="pb-2">Checkout</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Breadcrumb Section End --> */}

            <section className="checkout spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h6>
                                <span className="icon_tag_alt"></span> Have a
                                coupon? <a href="#">Click here</a> to enter your
                                code
                            </h6>
                        </div>
                    </div>
                    <div className="checkout__form">
                        <h4>Billing Details</h4>
                        <form onSubmit={handleCreateOrder}>
                            <div className="row">
                                <div className="col-lg-8 col-md-6">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Fist Name<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={firstName}
                                                    onChange={(e) =>
                                                        setFirstName(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Last Name<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={lastName}
                                                    onChange={(e) =>
                                                        setLastName(
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Country<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            value={country}
                                            onChange={(e) =>
                                                setCountry(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="checkout__input">
                                        <p>
                                            Address<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Street Address"
                                            className="checkout__input__add"
                                            value={streetAddress}
                                            onChange={(e) =>
                                                setStreetAddress(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="checkout__input">
                                        <p>
                                            Town/City<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="checkout__input">
                                        <p>
                                            Country/State<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            value={state}
                                            onChange={(e) =>
                                                setState(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="checkout__input">
                                        <p>
                                            Postcode / ZIP<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            value={postCode}
                                            onChange={(e) =>
                                                setPostCode(e.target.value)
                                            }
                                            required
                                        />
                                    </div>

                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Phone<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={phone}
                                                    onChange={(e) =>
                                                        setPhone(e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="checkout__input">
                                                <p>
                                                    Email<span>*</span>
                                                </p>
                                                <input
                                                    type="text"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="checkout__input">
                                        <p>
                                            Order notes<span>*</span>
                                        </p>
                                        <input
                                            type="text"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                            value={notes}
                                            onChange={(e) =>
                                                setNotes(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6">
                                    <div className="checkout__order">
                                        <h4>Your Order</h4>
                                        <div className="checkout__order__products">
                                            Products <span>Total</span>
                                        </div>
                                        <ul>
                                            {cart.map((product) => {
                                                return (
                                                    <li>
                                                        {product.title}{" "}
                                                        <span>
                                                            $
                                                            {product.price *
                                                                product.quantity}
                                                        </span>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                        <div className="checkout__order__subtotal">
                                            Subtotal <span>${totalPrice}</span>
                                        </div>

                                        <div className="checkout__order__total">
                                            Total <span>${totalPrice}</span>
                                        </div>

                                        <button
                                            type="submit"
                                            className="site-btn"
                                        >
                                            PLACE ORDER
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CheckOut;
