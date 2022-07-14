import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../app/api/ProductApi";
import Loading from "../../Components/Loading";
import { addCart } from "../../app/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading, error } = useGetSingleProductQuery(id);
  if (isLoading) {
    return <Loading>Loading</Loading>;
  }
  if (error) {
    return <h1>Something went wrong</h1>;
  }
  const { image, title, price, category, description } = product;

  return (
    <div className="grid mx-auto max-w-[1060px] py-3 px-4 md:px-[30px] border-2 rounded-xl shadow my-10">
      <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold mb-5">{title}</h1>
      <div className="flex flex-col md:flex-row justify-evenly mt-10 gap-10">
        <img src={image} alt="" className="w-[230px]" />
        <div className="max-w-xl md:mt-10">
          <h3 className="text-base md:text-2xl">{title}</h3>
          <h3>Price: {price}$</h3>
          <h3>Category: {category}</h3>
          <p></p>
          <p className="mt-3">{description}</p>
          <div className="mt-5">
            <button
              className="bg-indigo-500 text-white px-3 py-2 rounded"
              onClick={() => dispatch(addCart(product))}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
