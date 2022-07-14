import React from "react";
import { useGetProductsQuery } from "../../app/api/ProductApi";
import Loading from "../../Components/Loading";
import ProductCard from "../../Components/ProductCard";

const Products = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();
  if (isLoading) {
    return <Loading>Loading</Loading>;
  }
  if (error) {
    return <h1>Something is wrong</h1>;
  }
  return (
    <div className="max-w-6xl mx-auto w-[90%]">
      <h1 className="my-5 text-2xl inline-block border-b-2 border-indigo-500 pb-1 font-semibold">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
