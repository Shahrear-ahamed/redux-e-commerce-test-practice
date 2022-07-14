import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCart } from "../app/features/cartSlice";

const ProductCard = ({ product }) => {
  const { id, image, title, price, category } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  return (
    <div className="border-2 border-gray-500 p-4 rounded-2xl shadow-lg hover:shadow-xl duration-500">
      <div className="flex justify-center h-[150px]">
        <img src={image} alt="" />
      </div>
      <div className="mt-5">
        <h4 className="min-h-14">{title}</h4>
        <h5>Category: {category}</h5>
        <h5>Price: {price}$</h5>
        <div className="space-x-5 mt-5">
          <button className="bg-indigo-500 text-white px-3 py-2 rounded"
            onClick={() => dispatch(addCart(product))}>Add to cart</button>
          <button className="bg-orange-500 text-white px-3 py-2 rounded"
            onClick={() => navigate(`/product/${id}`)}>View Product</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
