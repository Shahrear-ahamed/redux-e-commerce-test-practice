import React from "react";
import { useSelector } from "react-redux";
import CartDetails from "../../Components/CartDetails";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          marginTop: "20px",
        }}>
        {cartProducts.map((cart) => (
          <CartDetails key={cart.id} cartProduct={cart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
