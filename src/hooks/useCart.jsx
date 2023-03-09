import { useState } from "react";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);

    const addProductToCart = (product) => {
        setIsSuccess(false);

        const productExists = cart.findIndex(
            (prevProuct) => prevProuct.id === product.id
        );

        if (productExists !== -1) {
            const newCart = [...cart];
            newCart[productExists].quantity += product.quantity;
            setIsSuccess(true);

            setCart(newCart);
        } else {
            setIsSuccess(true);
            setCart([...cart, product]);
        }

        setTimeout(() => {
            setIsSuccess(false);
        }, [3000]);
    };

    const deleteProductFromCart = (productId) => {
        setIsSuccess(false);

        setCart((prevState) => {
            const productIndex = prevState.findIndex(
                (prevProuct) => prevProuct.id === productId
            );
            prevState.splice(productIndex, 1);
            setIsSuccess(true);

            return prevState;
        });
    };

    const calculateTotalPrice = (cart) => {
        let totalPrice = 0;

        cart.forEach((product) => {
            totalPrice += product.price * product.quantity;
        });

        return totalPrice;
    };

    return {
        cart,
        isSuccess,
        addProductToCart,
        deleteProductFromCart,
        calculateTotalPrice,
    };
};

export default useCart;
