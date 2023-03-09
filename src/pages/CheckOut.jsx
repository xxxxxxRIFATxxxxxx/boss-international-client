import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Common/Spinner";
import useAuth from "../hooks/useAuth";
import useOrders from "../hooks/useOrders";
import usePayment from "../hooks/usePayment";

const Checkout = ({ cart, calculateTotalPrice }) => {
    const { createOrder } = useOrders();
    const { currentUser } = useAuth();
    const { stripePayment } = usePayment();

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState(currentUser?.firstName);
    const [lastName, setLastName] = useState(currentUser?.lastName);
    const [email, setEmail] = useState(currentUser?.email);
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postCode, setPostCode] = useState("");
    const [notes, setNotes] = useState("");

    const handlePayment = (e) => {
        e.preventDefault();

        setIsLoading(true);

        stripePayment(cart, currentUser.userId)
            .then((data) => {
                // Post Order To Database
                const order = {
                    userId: currentUser.userId,
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
                    totalPrice: calculateTotalPrice(cart),
                    status: "Processing",
                };

                createOrder(order)
                    .then((result) => {
                        if (result === "Success") {
                            setPhone("");
                            setCountry("");
                            setStreetAddress("");
                            setCity("");
                            setState("");
                            setPostCode("");
                            setNotes("");

                            setIsLoading(false);
                            window.location.href = data;
                        } else {
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                        setIsLoading(false);
                    });
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return (
        <section className="bg-white relative" id="product">
            <div className="px-4 md:px-0 py-8 container mx-auto sm:py-16">
                <h2 className="mb-14 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Checkout
                </h2>

                <form onSubmit={handlePayment}>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="col-span-12 md:col-span-8 lg:col-span-9 bg-white">
                            <div>
                                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                                    Billing Details
                                </h2>

                                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            First Name
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="First Name"
                                            required
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            readOnly
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Last Name
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Last Name"
                                            required
                                            value={lastName}
                                            onChange={(e) =>
                                                setLastName(e.target.value)
                                            }
                                            readOnly
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Phone
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="+8613910998888"
                                            required
                                            value={phone}
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Email
                                        </label>

                                        <input
                                            type="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="name@company.com"
                                            required
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            readOnly
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Country
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="China"
                                            required
                                            value={country}
                                            onChange={(e) =>
                                                setCountry(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Address
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Address"
                                            required
                                            value={streetAddress}
                                            onChange={(e) =>
                                                setStreetAddress(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            City
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="City"
                                            required
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            State
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="State"
                                            required
                                            value={state}
                                            onChange={(e) =>
                                                setState(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Post Code
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Post Code"
                                            required
                                            value={postCode}
                                            onChange={(e) =>
                                                setPostCode(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div className="w-full">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Notes
                                        </label>

                                        <input
                                            type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                            placeholder="Notes"
                                            value={notes}
                                            onChange={(e) =>
                                                setNotes(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 md:col-span-4 lg:col-span-3">
                            <div className="relative overflow-hidden bg-white shadow-md sm:rounded-lg mb-8 mt-0 md:mt-16">
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                >
                                                    Your Order
                                                </th>

                                                <th
                                                    scope="col"
                                                    className="px-4 py-3"
                                                ></th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr className="border-b hover:bg-gray-100">
                                                <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    Products
                                                </th>

                                                <th className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                                                    Total
                                                </th>
                                            </tr>

                                            {cart.map((product) => {
                                                return (
                                                    <tr className="border-b hover:bg-gray-100">
                                                        <td className="px-4 py-2 text-gray-900 whitespace-nowrap flex items-center">
                                                            <img
                                                                className="w-10 mr-4"
                                                                src={
                                                                    product?.thumbnail
                                                                }
                                                                alt=""
                                                            />

                                                            {product?.title}
                                                        </td>

                                                        <td className="px-4 py-2 text-gray-900 whitespace-nowrap">
                                                            {product?.price *
                                                                product?.quantity}
                                                        </td>
                                                    </tr>
                                                );
                                            })}

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

                            <div>
                                <button
                                    type="submit"
                                    className="block w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center"
                                >
                                    {isLoading && <Spinner />}
                                    PLACE ORDER
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;
