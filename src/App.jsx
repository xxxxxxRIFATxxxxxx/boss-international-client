import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },

    {
        path: "/productDetails/:productId",
        element: <ProductDetails />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
