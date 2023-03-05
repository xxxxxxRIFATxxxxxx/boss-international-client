import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import ErrorAlert from "../components/Common/ErrorAlert";
import Spinner from "../components/Common/Spinner";
import SuccessAlert from "../components/Common/SuccessAlert";
import useAuth from "../hooks/useAuth";

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");
        setIsSuccess(false);
        setIsError(false);
        setIsLoading(true);

        const user = {
            email,
            password,
        };

        login(user)
            .then((result) => {
                if (result.message === "Success") {
                    // set user data to local storage
                    localStorage.setItem(
                        "access_token",
                        JSON.stringify(result.access_token)
                    );
                    localStorage.setItem("user", JSON.stringify(result.user));

                    setIsSuccess(true);
                    setIsLoading(false);
                    setSuccessMessage("Login successful!");
                    setEmail("");
                    setPassword("");

                    setTimeout(() => {
                        navigate("/");
                    }, 1000);
                } else {
                    setIsError(true);
                    setIsLoading(false);
                    setErrorMessage("Something went wrong try again!");
                }
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false);
                setErrorMessage(error);
            });
    };

    // check user logged in or not
    const user = JSON.parse(localStorage.getItem("user"));
    const access_token = JSON.parse(localStorage.getItem("access_token"));

    if (user && access_token) {
        return <Navigate to="/" />;
    }

    return (
        <div className="h-screen container">
            <div className="border p-5">
                <Link to="/" className="logo header-logo">
                    <span className="primary-text">BOSS</span> INTERNATIONAL
                </Link>

                <form className="mt-3" onSubmit={handleLogin}>
                    {isSuccess && <SuccessAlert message={successMessage} />}
                    {isError && <ErrorAlert message={errorMessage} />}

                    <div className="checkout__input">
                        <p>
                            Email<span>*</span>
                        </p>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="checkout__input">
                        <p>
                            Password<span>*</span>
                        </p>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className={`site-btn d-flex align-items-center ${
                            isLoading ? "bg-white text-dark" : ""
                        }`}
                    >
                        {isLoading && <Spinner />}
                        <div className={`${isLoading && "ml-2"}`}>LOGIN</div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
