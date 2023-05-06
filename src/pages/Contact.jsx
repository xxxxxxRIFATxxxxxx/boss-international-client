import React, { useState } from "react";
import Spinner from "../components/Common/Spinner";
import SuccessAlert from "../components/Common/SuccessAlert";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleContact = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const contact = {
            email,
            subject,
            message,
        };

        setTimeout(() => {
            setIsLoading(false);
            setSuccessMessage(
                "Thank you for contacting us. We will get back to you soon"
            );

            setEmail("");
            setSubject("");
            setMessage("");
        }, 3000);

        setTimeout(() => {
            setSuccessMessage("");
        }, 6000);
    };

    return (
        <section className="bg-white" id="contact">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
                    Contact Us
                </h2>

                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta
                    feature? Need details about our Business plan? Let us know.
                </p>

                <form className="space-y-8" onSubmit={handleContact}>
                    {successMessage && (
                        <SuccessAlert message={successMessage} />
                    )}

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Your email
                        </label>

                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                            placeholder="name@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Subject
                        </label>

                        <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                            placeholder="Let us know how we can help you"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Your message
                        </label>

                        <textarea
                            id="message"
                            rows="6"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                            placeholder="Leave a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 flex items-center"
                    >
                        {isLoading && <Spinner />}
                        Send message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
