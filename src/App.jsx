import { isExpired } from "react-jwt";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Common/Layout";
import PrivateRoute from "./components/Common/PrivateRoute";
import useAuth from "./hooks/useAuth";
import useCart from "./hooks/useCart";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Checkout from "./pages/CheckOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Order from "./pages/Order";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Success from "./pages/Success";
import Shop from "./pages/Shop";
import Faq from "./pages/Faq";
import Team from "./pages/Team";

function App() {
    const { access_token, logout } = useAuth();
    const {
        cart,
        calculateTotalPrice,
        addProductToCart,
        deleteProductFromCart,
        isSuccess: cartIsSuccess,
    } = useCart();

    let routes = useRoutes([
        {
            path: "/",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Home
                        addProductToCart={addProductToCart}
                        cartIsSuccess={cartIsSuccess}
                    />
                </Layout>
            ),
        },

        {
            path: "/productDetails/:productId",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <ProductDetails
                        addProductToCart={addProductToCart}
                        cartIsSuccess={cartIsSuccess}
                    />
                </Layout>
            ),
        },

        {
            path: "/category",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Category />
                </Layout>
            ),
        },

        {
            path: "/cart",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Cart
                        cart={cart}
                        calculateTotalPrice={calculateTotalPrice}
                        deleteProductFromCart={deleteProductFromCart}
                    />
                </Layout>
            ),
        },

        {
            path: "/shop",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Shop
                        addProductToCart={addProductToCart}
                        cartIsSuccess={cartIsSuccess}
                    />
                </Layout>
            ),
        },

        {
            path: "/faq",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Faq />
                </Layout>
            ),
        },

        {
            path: "/team",
            element: (
                <Layout cart={cart} calculateTotalPrice={calculateTotalPrice}>
                    <Team />
                </Layout>
            ),
        },

        {
            path: "/checkout",
            element: (
                <PrivateRoute>
                    <Layout
                        cart={cart}
                        calculateTotalPrice={calculateTotalPrice}
                    >
                        <Checkout
                            cart={cart}
                            calculateTotalPrice={calculateTotalPrice}
                        />
                    </Layout>
                </PrivateRoute>
            ),
        },

        {
            path: "/orders",
            element: (
                <PrivateRoute>
                    <Layout
                        cart={cart}
                        calculateTotalPrice={calculateTotalPrice}
                    >
                        <Order />
                    </Layout>
                </PrivateRoute>
            ),
        },

        {
            path: "/success",
            element: (
                <PrivateRoute>
                    <Layout
                        cart={cart}
                        calculateTotalPrice={calculateTotalPrice}
                    >
                        <Success />
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
    const isTokenExpired = isExpired(access_token);

    if (isTokenExpired) {
        logout();
    }

    return routes;
}

export default App;
