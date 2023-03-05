import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/Common/PrivateRoute";
import Layout from "./components/Layout/Layout";
import useAuth from "./hooks/useAuth";
import useCategories from "./hooks/useCategories";
import useProducts from "./hooks/useProducts";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";

// React JWT
import { isExpired } from "react-jwt";

function App() {
    const { products } = useProducts();
    const { categories } = useCategories();
    const [cart, setCart] = useState([]);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    let totalPrice = 0;

    cart.map((product) => {
        totalPrice += product.price;
    });

    const handleCart = (product) => {
        setCart((prevState) => {
            const productExists = prevState.findIndex(
                (prevProuct) => prevProuct.id === product.id
            );

            if (productExists !== -1) {
                prevState[productExists].quantity += product.quantity;
                setShowSuccessAlert(true);

                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 3000);
                return prevState;
            } else {
                setShowSuccessAlert(true);

                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 3000);

                return [...prevState, product];
            }
        });
    };

    const deleteProductFromCart = (productId) => {
        setCart((prevState) => {
            const productIndex = prevState.findIndex(
                (prevProuct) => prevProuct.id === productId
            );

            prevState.splice(productIndex, 1);

            return prevState;
        });
    };

    let routes = useRoutes([
        {
            path: "/",
            element: (
                <Layout cart={cart}>
                    <Home
                        products={products}
                        categories={categories}
                        handleCart={handleCart}
                        showSuccessAlert={showSuccessAlert}
                    />
                </Layout>
            ),
        },

        {
            path: "/productDetails/:productId",
            element: (
                <Layout cart={cart}>
                    <ProductDetails handleCart={handleCart} />
                </Layout>
            ),
        },

        {
            path: "/cart",
            element: (
                <Layout cart={cart}>
                    <Cart
                        cart={cart}
                        totalPrice={totalPrice}
                        deleteProductFromCart={deleteProductFromCart}
                    />
                </Layout>
            ),
        },

        {
            path: "/checkout",
            element: (
                <PrivateRoute>
                    <Layout cart={cart}>
                        <CheckOut cart={cart} totalPrice={totalPrice} />
                    </Layout>
                </PrivateRoute>
            ),
        },

        {
            path: "/orders",
            element: (
                <PrivateRoute>
                    <Layout cart={cart}>
                        <Orders />
                    </Layout>
                </PrivateRoute>
            ),
        },

        {
            path: "/login",
            element: <Login />,
        },

        {
            path: "/signup",
            element: <SignUp />,
        },
    ]);

    // Check JWT Token Expired Or Not
    const { logout } = useAuth();
    const access_token = JSON.parse(localStorage.getItem("access_token"));
    const isTokenExpired = isExpired(access_token);

    if (isTokenExpired) {
        logout();
    }

    return routes;
}

export default App;
