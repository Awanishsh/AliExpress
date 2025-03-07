import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptypic from "../../Image/Empatypic.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../Modal";
import ChangeAddress from "../ChangeAddress";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../Redux/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("main street, 0");
  const [isModelOpen, setisModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const totalPrice = cart.product.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="container flex flex-col lg:flex-row justify-between gap-8 mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen">
      {cart.product.length > 0 ? (
        <div className="w-full lg:w-2/3">
          <h3 className="text-2xl font-semibold mb-6">SHOPPING CART</h3>

          {/* Table Headers */}
          <div className="hidden md:flex justify-between mb-6 text-xs font-bold border-b pb-3">
            <p className="w-1/4">PRODUCTS</p>
            <p className="w-1/6 text-center">PRICE</p>
            <p className="w-1/6 text-center">QUANTITY</p>
            <p className="w-1/6 text-center">SUBTOTAL</p>
            <p className="w-1/6 text-center">REMOVE</p>
          </div>

          {/* Product List */}
          {cart.product.map((product) => (
            <div
              key={product.id}
              className="flex flex-col md:flex-row items-center justify-between py-4 border-b space-y-4 md:space-y-0"
            >
              <div className="w-full md:w-1/4 flex items-center space-x-4">
                <img
                  src={product.image}
                  alt=""
                  className="w-24 h-24 object-contain rounded"
                />
                <h3 className="text-sm font-Oswald mt-2">{product.title}</h3>
              </div>

              <p className="w-full md:w-1/6 text-center">${product.price}</p>

              <div className="w-full md:w-1/6 flex justify-center items-center">
                <button
                  className="text-xl font-bold px-2 border-r"
                  onClick={() => dispatch(decreaseQuantity(product.id))}
                >
                  -
                </button>
                <p className="text-xl px-4">{product.quantity}</p>
                <button
                  className="text-xl px-2 border-l"
                  onClick={() => dispatch(increaseQuantity(product.id))}
                >
                  +
                </button>
              </div>

              <p className="w-full md:w-1/6 text-center">
                ${(product.price * product.quantity).toFixed(2)}
              </p>

              <button
                className="text-red-500 hover:text-red-700 w-full md:w-1/6 text-center px-10"
                onClick={() => dispatch(removeFromCart(product.id))}
              >
                <FaTrashAlt/>
              </button>
            </div>
          ))}

          <Modal isModelOpen={isModelOpen} setisModelOpen={setisModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setisModelOpen={setisModelOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center m-20">
          <img src={emptypic} alt="Empty Cart" className="w-3/4 h-auto" />
          <p className="absolute py-5 text-4xl font-Oswald text-red-500">
            Your cart is empty
          </p>
        </div>
      )}

      {/* Cart Total Section */}
      {cart.product.length > 0 && (
        <div className="w-full h-96 lg:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-5">CART TOTAL</h3>

          <div className="flex justify-between mb-4 border-b pb-3">
            <span className="text-sm">Total Items:</span>
            <span>{cart.totalQuantity}</span>
          </div>

          <div className="mb-4">
            <p className="text-sm font-semibold">Shipping:</p>
            <p className="text-sm">
              Shipping to: <span className="font-medium">{address}</span>
            </p>
            <button
              onClick={() => setisModelOpen(true)}
              className="text-blue-500 hover:underline mt-2"
            >
              Change the address
            </button>
          </div>

          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            className="w-full bg-red-500 text-white font-semibold py-3 px-4 rounded mt-4 hover:bg-red-600 transition duration-300"
            onClick={() => navigate("/checkout")}
          >
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;
