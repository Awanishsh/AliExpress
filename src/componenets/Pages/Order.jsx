import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/cartSlice"; 

function Order() {
  const dispatch = useDispatch();

  // Clear the cart after the order is confirmed
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen flex flex-col items-center justify-center">
   
      <h2 className="text-3xl font-semibold mb-4 text-green-600">
        Thank you for your order!
      </h2>
      <p className="text-lg text-gray-600 mb-6">
        Your order has been placed successfully. You will receive an email
        confirmation shortly.
      </p>
    </div>
  );
}

export default Order;
