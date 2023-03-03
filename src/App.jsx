import { useState } from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import useCategories from "./hooks/useCategories";
import useProducts from "./hooks/useProducts";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

function App() {
    const { products } = useProducts();
    const { categories } = useCategories();
    const [cart, setCart] = useState([]);

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
                return prevState;
            } else {
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
                    <Home products={products} categories={categories} />
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
                <Layout cart={cart}>
                    <CheckOut cart={cart} totalPrice={totalPrice} />
                </Layout>
            ),
        },
    ]);

    return routes;
}

export default App;
