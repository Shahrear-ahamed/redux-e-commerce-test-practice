import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../app/features/cartSlice";

const CartDetails = ({ cartProduct }) => {
  const { id, image, title } = cartProduct;
  const dispatch = useDispatch();

  return (
    <div className="flex min-w-[800px] my-5 border-gray-400 shadow-lg px-7 py-4 rounded-md hover:shadow-xl duration-700">
      <div className="w-40">
        <img src={image} alt="" className="w-16" />
      </div>
      <div className="flex flex-auto text-left justify-between items-center">
        <h4 className="text-xl w-4/5">{title}</h4>
        <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded-md" onClick={() => dispatch(removeCart(id))}>Delete</button>
      </div>
    </div>
  );
};

export default CartDetails;
