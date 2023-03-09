const usePayment = () => {
    const stripePayment = (cart, userId) => {
        const promise = new Promise((resolve, reject) => {
            fetch(
                `${process.env.REACT_APP_API_URL}/payment/create-checkout-session`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        cart: cart,
                        userId: userId,
                    }),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    const result = data.url;
                    resolve(result);
                })
                .catch((error) => {
                    reject(error);
                });
        });

        return promise;
    };

    return {
        stripePayment,
    };
};

export default usePayment;
